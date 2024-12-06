import { Controller, Get, Query } from '@nestjs/common';
import { LeaguesService } from './leagues.service';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { SearchLeagueDto } from './dto/search-league.dto';
import { AutocompleteLeagueDto } from './dto/autocomplete-league.dto';

@ApiTags('leagues')
@Controller('leagues')
export class LeaguesController {
  constructor(private readonly leaguesService: LeaguesService) {}

  @ApiOperation({
    summary: 'Recherche de ligues par nom avec leurs équipes associées',
    description:
      'Recherche des ligues par nom partiel et retourne les ligues trouvées avec leurs équipes associées.',
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
  @ApiResponse({
    status: 400,
    description: 'Les données fournies sont invalides.',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 400 },
        message: {
          type: 'array',
          items: {
            type: 'string',
            example: 'Le champ "name" doit être une chaîne de caractères.',
          },
        },
        error: { type: 'string', example: 'Bad Request' },
      },
    },
  })
  @Get('search')
  async searchLeagues(@Query() query: SearchLeagueDto): Promise<any[]> {
    return this.leaguesService.findByName(query.name);
  }

  @ApiOperation({
    summary: 'Auto-complétion pour les noms de ligues',
    description:
      'Renvoie une liste de suggestions de noms de ligues basées sur l’entrée utilisateur.',
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
    status: 404,
    description: 'Aucune suggestion trouvée.',
  })
  @ApiResponse({
    status: 400,
    description: 'Les données fournies sont invalides.',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 400 },
        message: {
          type: 'array',
          items: {
            type: 'string',
            example: 'Le champ "query" est obligatoire.',
          },
        },
        error: { type: 'string', example: 'Bad Request' },
      },
    },
  })
  @Get('autocomplete')
  async autocomplete(@Query() query: AutocompleteLeagueDto): Promise<string[]> {
    return this.leaguesService.autocomplete(query.query);
  }
}
