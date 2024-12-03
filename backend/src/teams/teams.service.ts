import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { Team, TeamDocument } from './schemas/team.schema';
import { Player } from 'src/players/schemas/player.schema';

@Injectable()
export class TeamsService {
  constructor(@InjectModel(Team.name) private teamModel: Model<TeamDocument>) {}

  async getPlayersByTeam(teamId: string): Promise<any> {
    if (!isValidObjectId(teamId)) {
      throw new BadRequestException(
        `L'ID fourni (${teamId}) n'est pas valide.`,
      );
    }

    const team = await this.teamModel
      .findById(teamId)
      .populate('players', 'name position thumbnail signin born')
      .exec();

    if (!team) {
      throw new NotFoundException('L’équipe spécifiée est introuvable.');
    }

    if (!team.players || team.players.length === 0) {
      return {
        teamName: team.name,
        players: [],
        message: 'Cette équipe n’a pas encore de joueurs enregistrés.',
      };
    }

    return {
      teamName: team.name,
      players: team.players.map((player: Player) => ({
        name: player.name,
        position: player.position,
        birthDate: player.born,
        transferFee: player.signin?.amount || null,
        currency: player.signin?.currency || 'unknown',
        thumbnail:
          player.thumbnail || 'https://example.com/default-thumbnail.png',
      })),
    };
  }
}
