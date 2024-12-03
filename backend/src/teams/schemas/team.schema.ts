import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TeamDocument = Team & Document;

@Schema()
export class Team {
  @Prop({ required: true })
  name: string;

  @Prop()
  thumbnail: string;

  @Prop({ type: [Types.ObjectId], ref: 'Player' })
  players: Types.ObjectId[];
}

export const TeamSchema = SchemaFactory.createForClass(Team);
