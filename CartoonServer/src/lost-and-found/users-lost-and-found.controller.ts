import { Controller, Post, Body, Get } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import {UsersLostAndFoundService} from './users-lost-and-found.service';
import { UsersRegisterDto} from '../DTO/users-register.dto';
@Controller('users-lost-and-found')
export class UsersLostAndFoundController {
    email: string;
    constructor( private service: UsersLostAndFoundService) {}
    // 利用Post email 实现发送邮件的功能
    @Post('email')
    emailsender(@Body() poster: string) {
        this.email = poster;
        return this.service.emailedsender(poster);
    }
    // 核对验证码
    @Post('check')
    checknum(@Body() check: string): boolean {
        return this.service.checkPassword(check);
    }

    @Post('change')
    change(@Body() password: string) {
        return this.service.changePassword(this.email, password);
    }
}
