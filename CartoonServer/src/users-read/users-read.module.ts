import { Module } from '@nestjs/common';
import {UsersReadController} from './users-read.controller';
import {UsersReadService} from './user-read.service';
import {UsersReadSchema} from '../Schemas/users-read.schema';
import { MongooseModule} from '@nestjs/mongoose';
@Module({
    imports: [MongooseModule.forFeature([
        {name: 'UsersRead', schema: UsersReadSchema}])],
    controllers: [UsersReadController],
    providers: [UsersReadService],
})
export class UsersReadModule {}
