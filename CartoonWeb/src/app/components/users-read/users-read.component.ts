import { Component, OnInit } from '@angular/core';
import {UsersReadService} from '../../services/users-read.service';
import { Info} from '../../components/users-read/users-read';
export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-users-read',
  templateUrl: './users-read.component.html',
  styleUrls: ['./users-read.component.css']
})
export class UsersReadComponent implements OnInit {
  info: Info[];
  constructor(private service: UsersReadService) { }

  ngOnInit() {
    this.service.findAll().subscribe((info) => {this.info = info; });
  }

}
