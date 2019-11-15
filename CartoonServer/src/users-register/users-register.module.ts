import { Module } from '@nestjs/common';
import { UsersRegisterController } from './users-register.controller';
import { UsersRegisterService } from './users-register.service';
import {UsersRegisterSchema} from '../Schemas/uses-register.schema';
import { MongooseModule} from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forFeature([
    {name: 'UsersRegister', schema: UsersRegisterSchema}])],
    // 注意name需要与Interface一一对应
  controllers: [UsersRegisterController],
  providers: [UsersRegisterService],
})
export class UsersRegisterModule {}
