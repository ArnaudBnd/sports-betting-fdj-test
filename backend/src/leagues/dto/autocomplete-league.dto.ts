import { IsString, IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AutocompleteLeagueDto {
  @ApiProperty({
    description: 'Texte partiel pour l’autocomplétion.',
    example: 'Fren',
    required: true,
  })
  @IsString()
  @IsNotEmpty({ message: 'Le champ "query" est obligatoire.' })
  @Length(1, 50, {
    message: 'La recherche doit contenir entre 1 et 50 caractères.',
  })
  query: string;
}
