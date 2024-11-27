import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Sports')
@Controller('sports')
export class AppController {
  @ApiOperation({ summary: 'Get a greeting message' })
  @ApiResponse({
    status: 200,
    description: 'Greeting message returned successfully.',
  })
  @Get()
  getHello(): string {
    return 'Welcome to the Sports Betting API!';
  }

  @ApiOperation({ summary: 'Say hello to a specific user' })
  @ApiResponse({
    status: 200,
    description: 'Dynamic greeting returned successfully.',
  })
  @ApiParam({ name: 'name', description: 'Name of the user to greet' })
  @Get(':name')
  sayHello(@Param('name') name: string): string {
    return `Hello, ${name}!`;
  }

  @ApiOperation({ summary: 'Submit a sports-related message' })
  @ApiResponse({ status: 201, description: 'Message submitted successfully.' })
  @ApiBody({
    schema: { type: 'object', properties: { message: { type: 'string' } } },
  })
  @Post()
  submitMessage(@Body() body: { message: string }): string {
    return `Your message: "${body.message}" has been received.`;
  }
}
