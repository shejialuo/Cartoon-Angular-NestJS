import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {UsersRegister} from '../Interface/users-register.interface';
import { Observable, of } from 'rxjs';
@Injectable()
export class UsersLoginService {
    userLoginQuery(str: string[]) {
        return this.usersRegisterModel.findOne(
            {username: str[0], userpassword: str[1]}).exec();
    }
    flag: any;
    // 注入
    constructor(@InjectModel('UsersRegister')
    private readonly usersRegisterModel: Model<UsersRegister>) {}
    async userLogin(str: string[]) {
       await this.userLoginQuery(str).then((result) => this.flag = result);
       return this.flag;
    }
}
