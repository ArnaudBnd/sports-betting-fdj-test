import { Controller, Get, Query } from '@nestjs/common';
import { LeaguesService } from './leagues.service';
import { ApiTags, ApiQuery, ApiResponse, ApiOperation } from '@nestjs/swagger';

@ApiTags('leagues')
@Controller('leagues')
export class LeaguesController {
  constructor(private readonly leaguesService: LeaguesService) {}

  @ApiOperation({
    summary: 'Recherche de ligues par nom avec leurs équipes associées',
    description:
      'Recherche des ligues par nom partiel et retourne les ligues trouvées avec leurs équipes associées.',
  })
  @ApiQuery({
    name: 'name',
    required: false,
    description: 'Nom ou partie du nom de la ligue à rechercher.',
    example: 'Premier',
  })
  @ApiResponse({
    status: 200,
    description: 'Liste des ligues trouvées avec leurs équipes associées.',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string', example: '5d2cdcf7da07b95bb8f16ed1' },
          name: { type: 'string', example: 'English Premier League' },
          sport: { type: 'string', example: 'soccer' },
          teams: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                name: { type: 'string', example: 'Arsenal' },
                thumbnail: {
                  type: 'string',
                  example:
                    'https://www.example.com//images//media//team//badge//toto.png',
                },
              },
            },
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Aucune ligue ne correspond au critère de recherche.',
  })
  @Get('search')
  async searchLeagues(@Query('name') name: string): Promise<any[]> {
    return this.leaguesService.findByName(name);
  }

  @ApiOperation({
    summary: 'Auto-complétion pour les noms de ligues',
    description:
      'Renvoie une liste de suggestions de noms de ligues basées sur l’entrée utilisateur.',
  })
  @ApiQuery({
    name: 'query',
    required: true,
    description: 'Texte partiel pour l’auto-complétion.',
    example: 'Fren',
  })
  @ApiResponse({
    status: 200,
    description: 'Liste des suggestions basées sur la recherche.',
    isArray: true,
    schema: {
      type: 'array',
      items: { type: 'string', example: 'French Ligue 1' },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Aucune suggestion trouvée.',
    schema: {
      type: 'array',
      items: {},
      example: [],
    },
  })
  @Get('autocomplete')
  async autocomplete(@Query('query') query: string): Promise<string[]> {
    return this.leaguesService.autocomplete(query);
  }
}
