import { IsMongoId } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetPlayersByTeamDto {
  @ApiProperty({
    description: "ID de l'équipe au format MongoDB.",
    example: '5d2d01fdda07b95bb8f16f0a',
    required: true,
  })
  @IsMongoId({
    message: "L'ID fourni doit être un identifiant MongoDB valide.",
  })
  id: string;
}
