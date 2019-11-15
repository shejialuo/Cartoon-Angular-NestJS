import { Controller, Post, Body, Get } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { UsersRegisterDto} from '../DTO/users-register.dto';
import { UsersRegisterService} from './users-register.service';

@Controller('users-registers')
export class UsersRegisterController {
    constructor(private service: UsersRegisterService) {}
    // 利用Post创建新的用户
    @Post()
    Create(@Body() usersRegisterDto: UsersRegisterDto ):
    Observable<any> {
        return this.service.add(usersRegisterDto.username, usersRegisterDto.userpassword,
            usersRegisterDto.useremail);
    }
    // 利用Post email 实现发送邮件的功能
    @Post('email')
    emailsender(@Body() poster: string) {
        return this.service.emailedsender(poster);
    }

    // 利用Post solo 实现查重名的操作

    @Post('solo')
    check(@Body() name: string) {
        return this.service.checkName(name);
    }

    @Post('check')
    checknum(@Body() check: string): boolean {
        return this.service.checkPassword(check);
    }
}
