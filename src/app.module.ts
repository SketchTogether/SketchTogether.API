import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { SessionModule } from './modules/session/session.module';
import { DrawingModule } from './modules/drawing/drawing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PrismaModule } from './core/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './modules/health/health.module';
import { AuthModule } from './modules/auth/auth.module';

/**
 * AppModule is the root module of the application.
 */
@Module({
  imports: [
    UserModule,
    SessionModule,
    DrawingModule,
    CoreModule,
    SharedModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    HealthModule,
  ],
})
export class AppModule {}
