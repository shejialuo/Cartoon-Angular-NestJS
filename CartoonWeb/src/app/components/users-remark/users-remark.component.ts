import { Component, OnInit } from '@angular/core';
import {UsersRemarkService} from '../../services/users-remark.service';
import {LogService} from '../../services/log.service';
import {Info} from './users-remark';
@Component({
  selector: 'app-users-remark',
  templateUrl: './users-remark.component.html',
  styleUrls: ['./users-remark.component.css']
})
export class UsersRemarkComponent implements OnInit {
  remarks: Info[];
  mymessage1 = [
    `他们曾以为他们之间是互相了解的，以为他们能够永远到一起。`,
    `时间和空间却是残酷的，他不知她的生活，她不知道他的世界。`,
    `他逐渐有了她，她逐渐有了他。`,
    `他沉浸在过去的回忆中，她却斩断了过去。`,
  ];
  mymessage2 = [
    `回忆总是美好的，他用工作麻痹自己。`,
    `可怜又可恨，他无法向前进。`,
    `秒速五厘米下落的樱花从不给他片刻的喘息。`,
    `所爱隔山海，山海就是不可平！`,
  ];
  mymessage3 = [
    `对于我来说，这封信让我感触颇多，因为我也有许多这样的信，我曾经也坚信着我和她能走到最后。
    是的，我是这样坚信着的。`,
    `我最喜欢的动漫就是《秒速五厘米》，我时常问自己是不是也被过去所束缚了，变得无法前进了。
    虽说明白往事不可追、往事不可忆。可这心又怎会如此坚强。`,
    `曾经，我习惯了两个人的生活，每到晚上的时间，我的时间是与她一起共享的，现在我习惯了一个人，
    有人闯进我的生活，我会觉得恐慌。`,
    `于是乎，还是让那在空中飘落的樱花随风飘散吧。`,
  ];
  user: any;
  constructor(private service1: UsersRemarkService,
              private service2: LogService) { }

  ngOnInit() {
    this.user = this.service2.user;
    this.service1.findAll().subscribe((info) => this.remarks = info);
  }
  add(userusename: string, userremark: string) {
    const infomation: Info = { userusename, userremark } as Info;
    this.service1.addOne(infomation).subscribe(
      (result) => this.remarks.push(result)
    );
  }
}
