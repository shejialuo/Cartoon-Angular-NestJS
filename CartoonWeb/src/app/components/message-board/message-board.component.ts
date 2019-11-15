import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent implements OnInit {
  message = [
    `我不知不觉也完成了自己的第一个网页，为什么要做这个网页了，其实就是因为喜欢。
  按照自己的兴趣去做，借鉴了别人网页的设计思想，参照了别人的CSS设计。
  看着原本很丑陋的网页逐渐地变成了一个相对比较现代化的、好看的网页。
  我真的感到十分欣慰，因为做了一件喜欢的事，就这么简单。`,
    `我为什么想用秒速五厘米的这一幕作为背景了，或许是觉得遗憾。
  你说本来好好的两人，说散就散了。
  怎不会让我这多愁善感又无病呻吟的人心觉惆怅呢？`,
    `首先我要感谢我的老师,将我带入了一次完整的前端和后台的全栈开发。给予了我很多方面的指导。`,
    `其次要感谢Angular、Angular Material、NestJS、Mongoose、MongoDB中文社区翻译的无私奉献。`,
    `最后感谢自己三个星期断断续续的努力。`,
  ];
  constructor() { }

  ngOnInit() {
  }

}
