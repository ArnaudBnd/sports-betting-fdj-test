import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LeaguesController } from './leagues.controller';
import { LeaguesService } from './leagues.service';
import { League, LeagueSchema } from './schemas/league.schema';
import { TeamsModule } from '../teams/teams.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: League.name, schema: LeagueSchema }]),
    TeamsModule,
  ],
  controllers: [LeaguesController],
  providers: [LeaguesService],
})
export class LeaguesModule {}
