import { Module } from '@nestjs/common';
import {UsersLoginController} from './users-login.controller';
import {UsersLoginService} from './users-login.service';
import {UsersRegisterSchema} from '../Schemas/uses-register.schema';
import { MongooseModule} from '@nestjs/mongoose';
@Module({
    imports: [MongooseModule.forFeature([
        {name: 'UsersRegister', schema: UsersRegisterSchema}])],
        // 注意name需要与Interface一一对应
      controllers: [UsersLoginController],
      providers: [UsersLoginService],
})
export class UsersLoginModule {
}
