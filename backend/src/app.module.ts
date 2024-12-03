import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LeaguesModule } from './leagues/leagues.module';
import { TeamsModule } from './teams/teams.module';
import { PlayersModule } from './players/players.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://admin:password@localhost:27017/sportsdb',
      {
        authSource: 'admin',
      },
    ),
    LeaguesModule,
    TeamsModule,
    PlayersModule,
  ],
})
export class AppModule {}
