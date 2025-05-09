import { Module } from '@nestjs/common';
import { SessionController } from './session.controller';
import { SessionService } from './session.service';

/**
 * SessionModule encapsulates drawing session management features.
 */
@Module({
  controllers: [SessionController],
  providers: [SessionService],
})
export class SessionModule {} 