import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { Auth0Guard } from './guards/auth0.guard';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Injectable()
export class AuthService {
    constructor(private configService: ConfigService) { }

    async validateToken(token: string) {
        // Implement token validation logic here
        // You can use express-oauth2-jwt-bearer for JWT validation
        return true;
    }
}

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    @Get('login')
    @UseGuards(Auth0Guard)
    @ApiOperation({ summary: 'Login with Auth0' })
    @ApiResponse({ status: 302, description: 'Redirects to Auth0 login page' })
    async login() {
        // This will redirect to Auth0 login page
    }

    @Get('callback')
    @UseGuards(Auth0Guard)
    @ApiOperation({ summary: 'Auth0 callback endpoint' })
    @ApiResponse({ status: 200, description: 'Successfully authenticated' })
    async callback(@Req() req) {
        return req.user;
    }
}