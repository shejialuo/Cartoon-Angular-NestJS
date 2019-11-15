import { Module } from '@nestjs/common';
import {UsersRemarkController} from './users-remark.controller';
import {UsersRemarkService} from './users-remark.service';
import {UsersRemarkSchema} from '../Schemas/users-remark.schema';
import { MongooseModule} from '@nestjs/mongoose';
@Module({
    imports: [MongooseModule.forFeature([
        {name: 'UsersRemark', schema: UsersRemarkSchema}])],
    controllers: [UsersRemarkController],
    providers: [UsersRemarkService],
})
export class UsersRemarkModule {}
