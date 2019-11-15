import { Injectable } from '@nestjs/common';
import {nodemailer, smtpConfig, transporter, sendmail} from '../PublicTs/emailer';
import { Model } from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {UsersRegister} from '../Interface/users-register.interface';
import { Observable, of } from 'rxjs';
import { checkNumber} from '../PublicTs/checkInfo';
@Injectable()
export class UsersRegisterService {

    checkNameQuery(name: string) {
        return this.usersRegisterModel.findOne({username: name}).exec();
    }

    // 实现判断的功能
    flag: any;
    flag1: any;
    str: string;
    // 注入
    constructor(@InjectModel('UsersRegister')
    private readonly usersRegisterModel: Model<UsersRegister>) {}

    // 发送邮件功能

    emailedsender(poster: string): void {
        this.str = checkNumber();
        sendmail(`欢迎注册Cartoon,您的验证码为${this.str}`, poster);
    }

    // 添加用户到数据库

    add(name: string, password: string, email: string): Observable<UsersRegister> {
        return this.usersRegisterModel.create(
            {username: name, userpassword: password, useremail: email});
    }

    // 实现检查用户名的功能

    async checkName(name: string) {
       await this.checkNameQuery(name).then((result) => {this.flag = result; });
       return this.flag;
    }

    // 核对验证码

    checkPassword(password: string): boolean {
        if (this.str.match(password)) { return true; } else {return false; }
    }
}
