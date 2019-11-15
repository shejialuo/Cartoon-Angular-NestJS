import { Controller, Get } from '@nestjs/common';
import {AppService} from './app.service';
@Controller()
export class AppController {
    constructor( private service: AppService) {}
    @Get()
    function1() {
        // tslint:disable-next-line: no-console
        console.log('成功了');
    }
}
