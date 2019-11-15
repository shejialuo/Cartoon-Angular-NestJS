import { Module } from '@nestjs/common';
import { UsersPageController } from './users-page.controller';
import { UsersPageService } from './users-page.service';
import {UsersRegisterSchema} from '../Schemas/uses-register.schema';
import { MongooseModule} from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forFeature([
    {name: 'UsersRegister', schema: UsersRegisterSchema}])],
    // 注意name需要与Interface一一对应
  controllers: [UsersPageController],
  providers: [UsersPageService],
})
export class UsersPageModule {}
