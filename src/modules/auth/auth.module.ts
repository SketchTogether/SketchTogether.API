import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { Auth0Strategy } from './strategies/auth0.strategy';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
    imports: [PassportModule],
    providers: [Auth0Strategy, AuthService],
    controllers: [AuthController],
    exports: [AuthService],
})
export class AuthModule { }