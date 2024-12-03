import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Team } from 'src/teams/schemas/team.schema';

export type LeagueDocument = League & Document;

@Schema()
export class League {
  @ApiProperty({
    description: 'Nom de la ligue',
    example: 'English Premier League',
  })
  @Prop({ required: true })
  name: string;

  @ApiProperty({ description: 'Sport associé à la ligue', example: 'soccer' })
  @Prop({ required: true })
  sport: string;

  @ApiProperty({
    description: 'Liste des équipes associées à la ligue',
    example: [
      '5d2d01fdda07b95bb8f16f0a',
      '5d2d02d7da07b95bb8f16f2a',
      '5d2d8f60da07b95bb8f17170',
    ],
  })
  @Prop({ type: [Types.ObjectId], ref: 'Team' })
  teams: (Types.ObjectId | Team)[];
}

export const LeagueSchema = SchemaFactory.createForClass(League);
