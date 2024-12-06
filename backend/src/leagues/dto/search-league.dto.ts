import { IsString, IsOptional, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SearchLeagueDto {
  @ApiProperty({
    description: 'Nom ou partie du nom de la ligue à rechercher.',
    example: 'Premier',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Length(1, 50, { message: 'Le nom doit contenir entre 1 et 50 caractères.' })
  name?: string;
}
