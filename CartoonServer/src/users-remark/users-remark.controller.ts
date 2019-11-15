import { Controller, Post, Body, Get } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import {UsersRemarkService} from './users-remark.service';
import {UsersRemarkDto} from '../DTO/users-remark.dto';
@Controller('users-remarks')
export class UsersRemarkController {
    constructor(private service: UsersRemarkService) {}
    @Get()
    findAll() {
        return this.service.findAll();
    }
    @Post()
    add(@Body() UsersRemarkdto: UsersRemarkDto): Observable<UsersRemarkDto> {
        return this.service.addOne(UsersRemarkdto.userusename, UsersRemarkdto.userremark);
    }
}
