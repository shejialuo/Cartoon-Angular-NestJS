import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  mymessage = [
    `曾何时起，心里面就有一个梦想，做一个关于秒速五厘米主题的网页。
    伴随着点点樱花的散落，one more time, one more chance的点点哀伤。
    `,
    `人与人之间的相遇是一个极其美妙的事情，是一件概率极其低的事情。
    我和你都是茫茫人海中的一员，居然能够相遇。我甚是感激。
    `,
    `可是我们总是会分别的，相遇了又是离别，这总会让人觉得淡淡的忧伤,
    本以为能够一起走到最后的人，却因为时间和空间的原因，就这样散了。
    `,
    `人总归是孤独的，但是我们与他人之间的回忆，永远是光辉的。
    这种光支撑着我，或许也支撑着你，陌生人。
    `,
  ];
  constructor() { }

  ngOnInit() {
  }

}
