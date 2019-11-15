import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersRegisterComponent} from './components/users-log/users-register/users-register.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {LostAndFoundComponent} from './components/users-log/lost-and-found/lost-and-found.component';
import {MessageBoardComponent} from './components/message-board/message-board.component';
import {UsersPageComponent} from './components/users-page/users-page.component';
import {UsersReadComponent} from './components/users-read/users-read.component';
import {UsersRemarkComponent} from './components/users-remark/users-remark.component';
const routes: Routes = [
  {path: 'users-register' , component: UsersRegisterComponent},
  {path: 'main-page', component: MainPageComponent},
  {path: 'lost-and-found', component: LostAndFoundComponent},
  {path: 'message-board', component: MessageBoardComponent},
  {path: 'users-page', component: UsersPageComponent},
  {path: 'users-read', component: UsersReadComponent},
  {path: 'users-remark', component: UsersRemarkComponent },
  {path: '', redirectTo: '/main-page', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
