import { Controller, Post, Body, Get } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import {UsersLoginService} from './users-login.service';
import {UsersReadDto} from '../DTO/users-read.dto';
@Controller('users-login')
export class UsersLoginController {
    constructor(private service: UsersLoginService) {}
    @Post()
    userlogin(@Body() str: string[] ) {
        return this.service.userLogin(str);
    }
}
