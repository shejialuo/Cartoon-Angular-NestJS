import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { NavrbarDisplayComponent } from './components/navrbar-display/navrbar-display.component';
import { UsersLogComponent } from './components/users-log/users-log.component';
import { LostAndFoundComponent } from './components/users-log/lost-and-found/lost-and-found.component';
import { UsersRegisterComponent } from './components/users-log/users-register/users-register.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SerachBarComponent } from './components/serach-bar/serach-bar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MessageBoardComponent } from './components/message-board/message-board.component';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { UsersReadComponent } from './components/users-read/users-read.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ChangeEmailComponent } from './components/change-email/change-email.component';
import { UsersRemarkComponent } from './components/users-remark/users-remark.component';
@NgModule({
  declarations: [
    AppComponent,
    NavrbarDisplayComponent,
    UsersLogComponent,
    LostAndFoundComponent,
    UsersRegisterComponent,
    MainContentComponent,
    SerachBarComponent,
    MainPageComponent,
    MessageBoardComponent,
    UsersPageComponent,
    UsersReadComponent,
    ChangePasswordComponent,
    ChangeEmailComponent,
    UsersRemarkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
