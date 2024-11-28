import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LeaguesModule } from './leagues/leagues.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://admin:password@localhost:27017/sportsdb',
      {
        authSource: 'admin',
      },
    ),
    LeaguesModule,
  ],
})
export class AppModule {}
