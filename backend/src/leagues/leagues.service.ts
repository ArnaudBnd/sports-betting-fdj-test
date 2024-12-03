import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { League, LeagueDocument } from './schemas/league.schema';
import { TeamDocument } from 'src/teams/schemas/team.schema';

@Injectable()
export class LeaguesService {
  constructor(
    @InjectModel(League.name) private leagueModel: Model<LeagueDocument>,
  ) {}

  async findByName(query: string): Promise<any[]> {
    const regex = new RegExp(query, 'i');

    const leagues = await this.leagueModel
      .find({ name: regex })
      .populate('teams', 'name thumbnail')
      .exec();

    if (leagues.length === 0) {
      throw new NotFoundException(
        'Aucune ligue ne correspond au critère de recherche.',
      );
    }

    return leagues.map((league) => ({
      name: league.name,
      sport: league.sport,
      teams: league.teams.map((team) => {
        const teamDocument = team as TeamDocument;
        return {
          id: teamDocument._id.toString(),
          thumbnail: teamDocument.thumbnail,
        };
      }),
    }));
  }

  async autocomplete(query: string): Promise<string[]> {
    const regex = new RegExp(`^${query}`, 'i');

    return this.leagueModel
      .find({ name: regex }, { name: 1, _id: 0 })
      .limit(10)
      .exec()
      .then((leagues) => leagues.map((league) => league.name));
  }
}
