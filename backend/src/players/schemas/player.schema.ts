import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlayerDocument = Player & Document;

@Schema()
export class Player {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  position: string;

  @Prop()
  thumbnail: string;

  @Prop({
    type: {
      amount: { type: Number, required: true },
      currency: { type: String, required: true },
    },
  })
  signin: {
    amount: number;
    currency: string;
  };

  @Prop({ type: Date, required: true })
  born: Date;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
