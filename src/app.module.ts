import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AuthModule, UserModule, DatabaseModule],
  controllers: [AppController, AuthController],
  providers: [AppService, UserService],
})
export class AppModule {}
