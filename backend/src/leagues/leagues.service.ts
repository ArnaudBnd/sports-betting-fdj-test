import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { League, LeagueDocument } from './schemas/league.schema';

@Injectable()
export class LeaguesService {
  constructor(
    @InjectModel(League.name) private leagueModel: Model<LeagueDocument>,
  ) {}

  async findByName(query: string): Promise<League[]> {
    const regex = new RegExp(query, 'i');
    const leagues = await this.leagueModel.find({ name: regex }).exec();

    if (leagues.length === 0) {
      throw new NotFoundException(
        'Aucune ligue ne correspond au critère de recherche.',
      );
    }

    return leagues;
  }
}
