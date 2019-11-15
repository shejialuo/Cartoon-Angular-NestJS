import { Module } from '@nestjs/common';
import { UsersLostAndFoundController } from './users-lost-and-found.controller';
import { UsersLostAndFoundService } from './users-lost-and-found.service';
import {UsersRegisterSchema} from '../Schemas/uses-register.schema';
import { MongooseModule} from '@nestjs/mongoose';
@Module({
    imports: [MongooseModule.forFeature([
        {name: 'UsersRegister', schema: UsersRegisterSchema}])],
        // 注意name需要与Interface一一对应
      controllers: [UsersLostAndFoundController],
      providers: [UsersLostAndFoundService],
})
export class LostAndFoundModule {}
