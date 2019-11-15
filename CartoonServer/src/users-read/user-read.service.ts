import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {UsersRead} from '../Interface/users-read.interface';
import { Observable, of } from 'rxjs';
@Injectable()
export class UsersReadService {

    findAllQuery() {
        return this.usersReadModel.find().exec();
    }
    information: any;
    constructor(@InjectModel('UsersRead')
    private readonly usersReadModel: Model<UsersRead>) {}
    async findAll() {
        await this.findAllQuery().then((docs) => {this.information = docs; } );
        return this.information;
    }
}
