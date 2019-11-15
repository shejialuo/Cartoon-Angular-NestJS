import { Injectable } from '@nestjs/common';
import {nodemailer, smtpConfig, transporter, sendmail} from '../PublicTs/emailer';
import { checkNumber} from '../PublicTs/checkInfo';
import {InjectModel} from '@nestjs/mongoose';
import {UsersRegister} from '../Interface/users-register.interface';
import { Model } from 'mongoose';
@Injectable()
export class UsersLostAndFoundService {
    constructor(@InjectModel('UsersRegister')
    private readonly usersRegisterModel: Model<UsersRegister>) {}
    str: string;

    // 发送邮件
    emailedsender(poster: string): void {
        this.str = checkNumber();
        sendmail(`找回密码的验证码为${this.str}`, poster);
    }

    // 验证码核对
    checkPassword(password: string): boolean {
        if (this.str.match(password)) { return true; } else {return false; }
    }

    changePassword(email: string, password: string): void {
       const update = this.usersRegisterModel.findOneAndUpdate(
           {useremail: email}, {userpassword: password},
       );
       update.exec();
    }
}
