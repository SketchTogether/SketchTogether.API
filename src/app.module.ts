import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { SessionModule } from './modules/session/session.module';
import { DrawingModule } from './modules/drawing/drawing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PrismaModule } from './core/prisma/prisma.module';

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
  ],
})
export class AppModule {}
