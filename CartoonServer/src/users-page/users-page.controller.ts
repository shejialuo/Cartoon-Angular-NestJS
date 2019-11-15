import { Controller, Post, Body, Get } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { UsersRegisterDto} from '../DTO/users-register.dto';
import { UsersPageService} from './users-page.service';

@Controller('users-pages')
export class UsersPageController {
    constructor(private service: UsersPageService) {}
    @Post()
    update(@Body() str: string[]) {
        return this.service.update(str);
    }

    @Post('password1')
    checkPassword(@Body() str: string[]) {
        return this.service.checkPassword(str);
    }
    @Post('password2')
    changePassword(@Body() str: string[]) {
        return this.service.changePassword(str);
    }
    @Post('emailer')
    emailersend(@Body() str: string) {
        return this.service.emailedsender(str);
    }
    @Post('email')
    changeEmail(@Body() str: string[]) {
        return this.service.changeEmail(str);
    }
    @Post('check')
    checknum(@Body() check: string): boolean {
        return this.service.check(check);
    }
}
