import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {UsersRemark} from '../Interface/users-remark.interface';
import { Observable, of } from 'rxjs';
@Injectable()
export class UsersRemarkService {

    findAllQuery() {
        return this.usersRemarkModel.find().exec();
    }
    information: any;
    constructor(@InjectModel('UsersRemark')
    private readonly usersRemarkModel: Model<UsersRemark>) {}
    async findAll() {
        await this.findAllQuery().then((docs) => {this.information = docs; } );
        return this.information;
    }
    addOne(str1: string, str2: string): Observable<UsersRemark> {
        return this.usersRemarkModel.create({userusename: str1, userremark: str2});
    }
}
