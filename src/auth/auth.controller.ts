import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt.auth.guard';

@Controller('auth')
export class AuthController {
  @Get('protected')
  @UseGuards(JwtAuthGuard)
  async protected(@Req() req) {
    return {
      message: 'JwtAuthGuard AuthGuard works 🎉',
      authenticated_user: req.user,
    };
  }
}
