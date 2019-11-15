import { Injectable, Post } from '@nestjs/common';
import {nodemailer, smtpConfig, transporter, sendmail} from '../PublicTs/emailer';
import { Model } from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {UsersRegister} from '../Interface/users-register.interface';
import { Observable, of } from 'rxjs';
import { checkNumber} from '../PublicTs/checkInfo';
@Injectable()
export class UsersPageService {
    flag: any;
    str: string;
    checkPasswordQuery(str: string[]) {
        return this.usersRegisterModel.findOne(
            {username: str[0], userpassword: str[1]}).exec();
    }

    // 注入
    constructor(@InjectModel('UsersRegister')
    private readonly usersRegisterModel: Model<UsersRegister>) {}
    async checkPassword(str: string[]) {
        await this.checkPasswordQuery(str).then((result) => this.flag = result);
        return this.flag;
    }
    changePassword(str: string[]): void {
        const update = this.usersRegisterModel.findOneAndUpdate(
            {username: str[0]}, {userpassword: str[1]},
        );
        update.exec();
    }
    emailedsender(poster: string): void {
        this.str = checkNumber();
        sendmail(`欢迎修改邮箱,您的验证码为${this.str}`, poster);
    }
    changeEmail(str: string[]): void {
        const update = this.usersRegisterModel.findOneAndUpdate(
            {username: str[0]}, {useremail: str[1]},
        );
        update.exec();
    }
    check(password: string): boolean {
        if (this.str.match(password)) { return true; } else {return false; }
    }
    update(str: string[]): void {
        const update = this.usersRegisterModel.findOneAndUpdate(
            {username: str[0]},
            {userusename: str[1], usersex: str[2], userqq: str[3],
             userwebo: str[4], userbirthday: str[5],
             userintroduction: str[6], userinterest: str[7]},
        );
        update.exec();
    }
}
