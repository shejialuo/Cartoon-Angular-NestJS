import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersRegisterModule } from './users-register/users-register.module';
import { LostAndFoundModule } from './lost-and-found/lost-and-found.module';
import { UsersReadModule } from './users-read/users-read.module';
import { UsersLoginModule } from './users-login/users-login.module';
import { UsersPageModule } from './users-page/users-page.module';
import { UsersMessageModule } from './users-message/users-message.module';
import { UsersRemarkModule } from './users-remark/users-remark.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    MongooseModule.forRoot('mongodb://localhost/DataBase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    }),
    UsersRegisterModule,
    LostAndFoundModule,
    UsersReadModule,
    UsersLoginModule,
    UsersPageModule,
    UsersMessageModule,
    UsersRemarkModule,
  ],
})
export class AppModule {}
