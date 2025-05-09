import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

/**
 * UserModule encapsulates user management features such as authentication and profile.
 */
@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {} 