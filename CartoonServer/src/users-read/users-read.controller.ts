import { Controller, Post, Body, Get } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import {UsersReadService} from './user-read.service';
import {UsersReadDto} from '../DTO/users-read.dto';
@Controller('users-reads')
export class UsersReadController {
    constructor(private service: UsersReadService) {}
    @Get()
    findAll() {
        return this.service.findAll();
    }
}
