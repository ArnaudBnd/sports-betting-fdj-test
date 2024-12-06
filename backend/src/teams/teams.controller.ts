import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { TeamsService } from './teams.service';
import { GetPlayersByTeamDto } from './dto/get-players-by-team.dto';

@ApiTags('teams')
@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @ApiOperation({
    summary: 'Obtenir la liste des joueurs d’une équipe',
    description: 'Retourne la liste des joueurs associés à une équipe donnée.',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: "ID de l'équipe au format MongoDB.",
    example: '5d2d01fdda07b95bb8f16f0a',
  })
  @ApiResponse({
    status: 200,
    description: 'Liste des joueurs associés à l’équipe.',
    schema: {
      type: 'object',
      properties: {
        teamName: { type: 'string', example: 'Arsenal' },
        players: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              fullName: { type: 'string', example: 'Cristiano Ronaldo' },
              position: { type: 'string', example: 'Forward' },
              birthDate: { type: 'string', example: '1985-02-05' },
              transferFee: { type: 'number', example: 100000000 },
              thumbnail: {
                type: 'string',
                example: 'https://example.com/ronaldo-face.png',
              },
            },
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Équipe sans joueurs associés.',
    schema: {
      example: {
        teamName: 'Arsenal',
        players: [],
        message: 'Cette équipe n’a pas encore de joueurs enregistrés.',
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'ID mal formé ou invalide.',
    schema: {
      example: {
        statusCode: 400,
        message: "L'ID fourni (invalid_id) n'est pas valide.",
        error: 'Bad Request',
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'L’équipe spécifiée est introuvable.',
  })
  @Get(':id/players')
  async getPlayers(@Param() params: GetPlayersByTeamDto): Promise<any> {
    return this.teamsService.getPlayersByTeam(params.id);
  }
}
