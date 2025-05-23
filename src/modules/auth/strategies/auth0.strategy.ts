import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-auth0';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class Auth0Strategy extends PassportStrategy(Strategy) {
    constructor(private configService: ConfigService) {
        super({
            domain: configService.get<string>('AUTH0_DOMAIN'),
            clientID: configService.get<string>('AUTH0_CLIENT_ID'),
            clientSecret: configService.get<string>('AUTH0_CLIENT_SECRET'),
            callbackURL: configService.get<string>('AUTH0_CALLBACK_URL'),
            scope: 'openid profile email',
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: any) {
        return {
            id: profile.id,
            email: profile.emails[0].value,
            name: profile.displayName,
        };
    }
}