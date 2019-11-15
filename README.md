### 一、项目名称及需求

> <font color="blue">项目名称</font>

Cartoon-Web：动漫评论平台

> <font color="blue">基本需求</font>

+ **实现较现代化的界面设计**

+ **实现基本的用户登录功能**
+ **实现基本的用户注册功能**
  + 用户登录名至少6位以上且不能重复
  + 密码至少6位以上且实现确认密码功能
  + 实现邮箱验证注册功能，用户需输入4位的验证码
+ **实现基本的用户找回密码功能**
  + 通过邮箱地址找回密码
  + 通过验证码确定实现密码修改功能，密码要求同注册要求

+ **实现基本的评论功能**
+ **实现基本的用户个人主页**
  + 用户能查看自己的相关信息
  + 用户能修改自己的相关信息，例如个人说明，兴趣爱好等
  + 用户能修改自己的密码
  + 用户能修改自己的邮箱地址

### 二、项目开发过程

项目开发的总环境基于```Node.Js```，其版本为```v10.11.0```。

使用的文本编辑器为```Visual Studio Code```。

> 前端：<font color="red">**CartoonWeb**</font>
>
> 后台：<font color="red">**CartoonServer**</font>

#### 2.1 前端开发

##### 2.1.1 前端开发及组件样式框架选择

+ <font color="red">```Angular```</font>

```
Angular CLI: 8.3.4
rxjs: 6.4.0
```

+ <font color="red">```Angular Material```</font>

##### 2.1.2 前端总体设计

给出前端项目的文件目录如下所示。
```
│  favicon.ico
│  index.html
│  main.ts
│  polyfills.ts
│  styles.css
│  test.ts
│  
├─app
│  │  app-routing.module.ts
│  │  app.component.css
│  │  app.component.html
│  │  app.component.ts
│  │  app.module.ts
│  │  material.module.ts
│  │  
│  ├─components
│  │  ├─change-email
│  │  │      change-email.component.css
│  │  │      change-email.component.html
│  │  │      change-email.component.ts
│  │  │      
│  │  ├─change-password
│  │  │      change-password.component.css
│  │  │      change-password.component.html
│  │  │      change-password.component.ts
│  │  │      
│  │  ├─main-content
│  │  │      main-content.component.css
│  │  │      main-content.component.html
│  │  │      main-content.component.ts
│  │  │      
│  │  ├─main-page
│  │  │      main-page.component.css
│  │  │      main-page.component.html
│  │  │      main-page.component.ts
│  │  │      
│  │  ├─message-board
│  │  │      message-board.component.css
│  │  │      message-board.component.html
│  │  │      message-board.component.ts
│  │  │      
│  │  ├─navrbar-display
│  │  │      navrbar-display.component.css
│  │  │      navrbar-display.component.html
│  │  │      navrbar-display.component.ts
│  │  │      
│  │  ├─serach-bar
│  │  │      serach-bar.component.css
│  │  │      serach-bar.component.html
│  │  │      serach-bar.component.ts
│  │  │      
│  │  ├─users-log
│  │  │  │  user.ts
│  │  │  │  users-log.component.css
│  │  │  │  users-log.component.html
│  │  │  │  users-log.component.ts
│  │  │  │  
│  │  │  ├─lost-and-found
│  │  │  │      lost-and-found.component.css
│  │  │  │      lost-and-found.component.html
│  │  │  │      lost-and-found.component.ts
│  │  │  │      
│  │  │  └─users-register
│  │  │          users-register.component.css
│  │  │          users-register.component.html
│  │  │          users-register.component.ts
│  │  │          
│  │  ├─users-page
│  │  │      users-page.component.css
│  │  │      users-page.component.html
│  │  │      users-page.component.ts
│  │  │      
│  │  ├─users-read
│  │  │      users-read.component.css
│  │  │      users-read.component.html
│  │  │      users-read.component.ts
│  │  │      users-read.ts
│  │  │      
│  │  └─users-remark
│  │          users-remark.component.css
│  │          users-remark.component.html
│  │          users-remark.component.ts
│  │          users-remark.ts
│  │          
│  ├─services
│  │      log.service.ts
│  │      lost-and-found.service.ts
│  │      register.service.ts
│  │      users-page.service.ts
│  │      users-read.service.ts
│  │      users-remark.service.ts
│  │      
│  └─source
│          111.jpg
│          
├─assets
│      .gitkeep
│      
└─environments
        environment.prod.ts
        environment.ts
```

##### 
2.1.3 关键功能实现及问题解决

###### 注册表单密码的同步验证

> <font color="red">遇到的问题</font>

+ 对于```Angular```响应式表单自定义验证器理解不深刻，导致函数定义出错
+ 对于```Angular```响应式表单同步和异步验证器的API文档理解不深刻，导致了同步和异步的区分错误
+ 对于```ngOnInit()```钩子函数理解不够深刻，导致初始化出现```undefined```错误

```typescript
this.firstFormGroup = this.formBuilder.group({
      userpostpassword: ['', Validators.required, this.passwordValidators],
});
// 错误的原因在于，this.passwordValidators应是同步验证,但却位于第三个参数上
// Error: Expected validator to return Promise or Observable.
```

> <font color="red">问题的解决</font>

+ 通过查阅```Angular```官网文档，明确自定义验证器的API

```typescript
new formcontrol('表单控制标识符', [自定义同步验证器], [自定义异步验证器]);
// 最开始出现的错误就是没有意识到应该用一个数组表示自定义同步验证器
// 从而使得同步验证器位于了异步验证器的位置
```

+ 通过设置一个判断语句，避免```control.parent```为```undefiend```的错误

```typescript
if ( control.parent === undefined) { return null; }
// 由于初始化control.parent并不存在，设置一个判断避免出错
```

> <font color="red">完整代码实现如下</font>

```typescript
// 表单的自定义同步验证
this.firstFormGroup = this.formBuilder.group({
    userpostpassword: ['', [Validators.required, this.passwordValidators]],
});
// 自定义同步函数的实现
passwordValidators(control: AbstractControl) {
    const confirmpassword = control.value;
    if ( control.parent === undefined) { return null; }
    const password = control.parent.value.userprepassword;
    if ( confirmpassword !== password) {
      return {isSame: true};
    }
    return null;
}
```

###### 注册表单用户名查重的异步验证

> <font color="red">遇到的问题</font>

+ 由于每次用户都要进行输入，应该如何进行防抖操作

+ 对于表单实现异步验证操作理解不深刻

+ 对于```Observable```**多播**技术认识不清晰

+ 对于```Rxjs```中的用于多播实现的函数理解不够深刻

> <font color="red">问题的解决</font>

+ 通过查阅```Angular```官方文档，明确表单的一个用于实现**多播**```Observable```的方法，[参考网址](https://angular.cn/api/forms/AbstractControl)。

```typescript
AbstractControl.valueChanges: Observable<any>;
// 官网文档解释：一个多播 Observable（可观察对象），每当控件的值发生变化时，它就会发出一个事件。
```

+ 通过查阅```Angular```官方文档，明确防抖需要靠**管道**操作实现，并要利用相关```Rxjs```的相关函数，例如```debounceTime()```、```distinctUntilChange()```、```switchMap()```、```map()```以及```first()```函数。[参考Angular网址](https://angular.cn/guide/http#debouncing-requests)，[参考博客园网址](https://www.cnblogs.com/ajanuw/p/8986776.html)，[参考StackOverflow网址](https://stackoverflow.com/questions/51864074/angular-6-expected-validator-to-return-promise-or-observable-in-async-validato)。

```typescript
debounceTime(); // 等待，直到用户停止输入
distinctUntilChanged(); // 等待，直到内容发生变化
map(); // 类似于Array.prototype.map()
switchMap(); // 会停止发出先前发出的内部Observable并开始发出新的内部Observable的值
first(); // 获取事件流中的第一个事件
```

> <font color="red">完整代码实现如下</font>

```typescript
usernameValidators(control: AbstractControl) {
    return control.valueChanges.pipe(
          debounceTime(1000),
          distinctUntilChanged(),
          switchMap(() => {
            return this.registerservice.checkName(control.value);
              // 向后台发起检查用户名是否重名的请求
          }),
          map(result => result ? { isSame: true } : null),
          first()
        );
}
```

###### this作用域及箭头函数理解问题

> <font color="red">遇到的问题</font>

+ 在表单验证函数中访问类的成员无法访问，this的指向问题

```typescript
passwordValidators(control: AbstractControl) {
   console.log(this); // undefined
   console.log(this.content); 
    // Unable to get property 'content' of undefined or null reference 
}
```

+ 对于箭头函数理解的不深刻问题

> <font color="red">问题的解决</font>

+ 通过查阅网上相关博客，[参考博客园网址](https://www.cnblogs.com/zjjDaily/p/9482958.html)。深入了解this指针的指向问题，并总结如下。

```typescript
// 举一个例子
const bj=10;
const obj={
    name:"八戒",
    say:function obj1(){
        const bj=40;
        console.log(this);//就是obj这个对象
        console.log(this.bj);//undefined
        console.log(this.name);//八戒
    }
}
// 1. JavaScript中的Object和function均是对象，不同于C++的this指针的指向方式
// 2. 在JavaScript中this指针的指向是动态的，指向调用产生this指针的函数
```

+ 通过查阅网上相关论坛，[参考StackOverflow网址](https://stackoverflow.com/questions/48785362/angular-4-validator-custom-function-this-is-undefined)，得知了两种处理方法

```typescript
// 1.在定义验证器中使用bind()方法绑定类的this指针。
this.passwordValidators.bind(this);
// 2.使用箭头函数
```

+ 通过查阅网上相关博客，[参考博客园网址](https://www.cnblogs.com/clement-jiao/p/11073781.html)，深化了对于箭头函数的理解。

```typescript
// 1. 箭头函数实现匿名函数的功能
// 2. this固定不变！
obj = {
    data: ['John Backus', 'John Hopcroft'],
    init: function() {
        document.onclick = ev => {
            alert(this.data) // ['John Backus', 'John Hopcroft']
        }
        // 非箭头函数
        // document.onclick = function(ev) {
        //     alert(this.data) // undefined
        // }
    }
}
```

> <font color="red">完整代码实现如下</font>

```typescript
// 采用bind()函数绑定this
this.firstFormGroup = this.formBuilder.group({
    userpostpassword: ['', [Validators.required, this.passwordValidators.bind(this)]],
});
passwordValidators(control: AbstractControl) {
   console.log(this); // successful
}
// 采用箭头函数
passwordValidators = (control: AbstractControl) =>{
   console.log(this); // successful
}
```

###### 组件之间的通信问题

> <font color="red">遇到的问题</font>

+ 用户登录成功的信息用什么载体进行通信
+ 这种信息应该用什么样的方式进行传递

> <font color="red">问题的解决</font>

+ 通过```service```，也就是服务进行通信
+ 通过父子组件的方式进行通信
+ 通过兄弟组件的方式进行通信

``` typescript
// 采用服务的方式进行通信
constructor(private service1: UsersRemarkService,
              private service2: LogService) { }
 ngOnInit() {
    this.user = this.service2.user;
	// service2的user作为中间变量实现组件之间的通信
  }
```

#### 2.2 后台开发

##### 2.2.1 后台开发及数据库框架选择

+ 后台开发框架：<font color="red">```NestJS```</font>

```
Nest CLI: 6.11.3
```

+ 数据库：<font color="red">```MongoDB```</font>
+ 数据库接口：<font color="red">```Mongoose```</font>
+ CRUD实现风格：<font color="red">```Restful```</font>

##### 2.2.2 后台总体设计

给出后台项目的文件目录如下所示。

```
│  app.controller.spec.ts
│  app.controller.ts
│  app.module.ts
│  app.service.ts
│  main.ts
│  
├─DTO
│      users-read.dto.ts
│      users-register.dto.ts
│      users-remark.dto.ts
│      
├─Interface
│      users-read.interface.ts
│      users-register.interface.ts
│      users-remark.interface.ts
│      
├─lost-and-found
│      lost-and-found.module.ts
│      users-lost-and-found.controller.ts
│      users-lost-and-found.service.ts
│      
├─PublicTs
│      checkInfo.ts
│      emailer.ts
│      
├─Schemas
│      users-read.schema.ts
│      users-remark.schema.ts
│      uses-register.schema.ts
│      
├─users-login
│      users-login.controller.ts
│      users-login.module.ts
│      users-login.service.ts
│      
├─users-message
│      users-message.module.ts
│      
├─users-page
│      users-page.controller.ts
│      users-page.module.ts
│      users-page.service.ts
│      
├─users-read
│      user-read.service.ts
│      users-read.controller.ts
│      users-read.module.ts
│      
├─users-register
│      users-register.controller.ts
│      users-register.module.ts
│      users-register.service.ts
│      
└─users-remark
        users-remark.controller.ts
        users-remark.module.ts
        users-remark.service.ts
```

##### 2.2.3 关键功能实现及问题解决

###### 邮件发送功能

> <font color="red">遇到的问题</font>

+ 对于```Nodemailer module```的理解不深刻
+ 对于JavaScript的```reuqire()```理解不深刻

> <font color="red">问题的解决</font>

+ 通过查阅```Nodemailer```的[官方文档](https://nodemailer.com/about/)，解决问题

```typescript
// 1. 包的安装
npm install nodemaier
// 2. Config的封装
const smtpConfig = {
    host: , // 发送方的host号
    port: , // 端口号
    auth: {
    	users: ,
    	pass: ,
	}, // smtp协议所需的名称及密码
}
// 3. 发送的实现
const transporter = nodemailer.createTransport(smtpConfig);
transporter.sendMail([],[],[])
```

+ 通过查阅相关博客，[参考网址](https://www.cnblogs.com/libin-1/p/7127481.html)

```typescript
// require()用于加载模块
const nodemailer = require('nodemailer');
// 类似于import
```

> <font color="red">完整代码实现如下</font>

```typescript
const nodemailer = require('nodemailer');
const smtpConfig = {
    host: 'smtp.qq.com',
    port: 465,
    auth: {
        user: '392499367@qq.com',
        pass: 'mbbkzapjcuufbihj',
    },
};
const transporter = nodemailer.createTransport(smtpConfig);
const sendmail = (html1: string, poster: string) => {
    const option = {
        from: '392499367@qq.com',
        to: poster, // 利用函数调用
        subject : 'Cartoon校验码',
        html : html1, //信息
    };
    transporter.sendMail(option, (error, response) => {
        if (error) {
            console.log('fail:' + error);
        } else {
            console.log('success:' + response.messageID);
        }
    });
};
export {nodemailer, smtpConfig, transporter, sendmail};
```

###### Mongoose框架的基本逻辑问题

> <font color="red">遇到的问题</font>

+ 对于```Mongoose```框架的不熟悉造成了基本CRUD无法实现的问题

> <font color="red">问题的解决</font>

+ 查阅```Mongoose``` 文档，[参考网址](http://www.mongoosejs.net/)，总结如下的知识点

```typescript
// 1. 每个Schema都会映射到一个MongoDB Collection
const schema = new Shcema({
    ...
});
// 2. 利用Schema可以创建Model
const blog = mongoose.model('blog',schema);
// 本项目主要使用Model进行查找方法

// 3. 利用Mongoose连接MongoDB
mongoose.connect('mongodb://localhost/myapp');

// 4. 用到的常用API

model.find().exec(); // 查找全部
model.create(); // 创建
model.findOne().exec(); // 找到一个
model.findOneAndUpdate().exec(); //找到一个并更新
```

###### 数据库异步查询问题

> <font color="red">遇到的问题</font>

+ 使用```Mongoose```查询的API，将查询结果返回前端，返回结果为```undefined```.

```typescript
findAll() {
    const query = this.userReadModel.find(); // 详情见Mongoose官方文档
    query.exec((docs) => {this.information = docs; 
                         console.log(this.information);} );
    console.log(this.information); // 测试使用
    console.log('hhh') // 测试，判断打印的先后次序
    return this.information;
}
// 控制台打印如下
undefined 
hhh
object
// 通过控制台的语句打印，发现了问题所在。
```

+ ```Mongoose```查询是一种<font color="red">**异步**</font>方式，所以在回调函数结束以前，函数就已经返回了```this.information```。

> <font color="red">问题的解决</font>

+ <font color="blue">解决的整体思路：强制必须等查询完毕后，再执行```return```语句</font>

+ 通过查阅相关资料，[参考StackOverflow网址](https://stackoverflow.com/questions/39885339/function-using-mongoose-findone-returning-undefined)，得出第一个解决方法，使用**回调函数**

+ 通过查阅相关资料，[参考CSDN网址](https://bbs.csdn.net/topics/392570425?list=31152598)，得出第二个解决方法，使用```Promise```对象结合```async```和```await```处理

> <font color="red">完整代码实现如下</font>

```typescript
// 使用Mongoose自带的then()方法以及async 和await 进行解决

findAllQuery() {
    return this.userReadModel.find().exec();
}

async findAll() {
    await this.findAllQuery().then((docs) => {this.information = docs; });
    return this.information;
}
```

> <font color="red">小总结</font>

+ ```Node.js```本质就是一个异步编程方式
+ 异步编程方式异于传统方式导致我陷入了传统的思维模式因而产生了错误
+ <font color="red">本问题的解决使得整个后台的许多功能得以成功实现</font>，具体体现在以下两个方面
  + 用户名验证时，由于没有考虑数据库异步查询，总存在延迟问题
  + 前端页面读取数据初始化时，由于没有考虑数据库异步查询，总存在延迟问题

#### 2.3 前后台交互

> <font color="red">遇到的问题</font>

+ 前端与后台的数据交互的细节
  + 后台应该返回怎么样的数据
  + 前端接受的数据类型是什么样的
+ 前端的```post```方法传递多数据的方法是什么，后台接受到的多数据类型是什么

> <font color="red">问题的解决</font>

下面，通过代码分别进行讲解

**前端与后台的数据交互问题**

+ 前端

```typescript
// users-register.service.ts
checkPassword(password: string): Observable<any> {
    return this.httpClient.post<any>('this.userLogUrl'+'/'+'check', password);
}// markdown无法处理``，此处用''代替
// users-register.component.ts
check(password: string): void {
    this.registerservice.checkPassword(password).subscribe(
      (flag) => this.flag = flag );
}
// 我们可以看出，通过调用服务中HTTP的Post方法得到一个flag的Observable对象
```

+ 后端

```typescript
// users-register.service.ts
checkNameQuery(name: string) {
        return this.usersRegisterModel.findOne({username: name}).exec();
}
async checkName(name: string) {
       await this.checkNameQuery(name).then((result) => {this.flag = result; });
       return this.flag;
}
// users-register.controller.ts
@Post('check')
    checknum(@Body() check: string): boolean {
        return this.service.checkPassword(check);
}
```

我们可以看出后台可以返回```boolean```类型的值，但是前端得到的实际上是一个```Observable```。

**Post传递多数据的讨论**

+ 前端

```typescript
// change-email.component.ts
changeEmail(str1: string, str2: string) {
    this.service1.changeEmail(str1, str2).subscribe();
}
// users-page.service.ts
changeEmail(str1: string, str2: string): Observable<any> {
    return this.httpClient.post<any>(this.url+'/'+'email', [str1, str2]);
};
```

+ 后台

```typescript
// users-page.service.ts
changeEmail(str: string[]): void {
        const update = this.usersRegisterModel.findOneAndUpdate(
            {username: str[0]}, {useremail: str[1]},
        );
        update.exec();
}
// users-page.controller.ts
@Post('email')
    changeEmail(@Body() str: string[]) {
        return this.service.changeEmail(str);
}
```

从上述的例子可以看出，我们可以通过```[]```的方式传递多个数据，此时后台接受的到的就是一个数组，如果类型不一致的话，需要使用```str: any[]```，也可以将多个数据封装成对象传输。

### 三、心得体会以及项目总结

#### 3.1 心得体会

这是我第一次从头完整地开发一个小项目，从前端到后台的全栈开发，学习了很多知识，最重要的是了解到了一个基本的开发过程，由于从来没有接触过这方面，花费了不少的功夫，学习框架的基础知识。在开发的过程中，遇到了不少的问题，```Angular Material```基本思想的学习，```Angular```表单及```Rxjs```库中的```Observable```的学习。在前端的开发过程中，**最重要的学习到了一种不同于面向对象和面向过程的编程思想**。

在后台的开发过程中，首先是对```NestJS```进行学习，发现其框架结构非常类似于```Angular```的框架，上手十分地快，了解了基本的组件```Controller```，就开始尝试进行开发了。在开发后台的过程中，本来打算用```GraphQL```实现查询的操作，但是由于学业及其他时间的限制，采用了```Restful```风格的查询方式，这点比较遗憾。进而学习后台连接数据库，第一次学习**非关系数据库**```MongoDB```以及**数据库框架**```Mongoose```，了解到了**数据传输对象**```DTO```的重要性。

个人收获最大的地方在于前端和后台之间通过```HTTP```协议实现交互的过程，如何在后台定义好方法，返回的逻辑，在前端通过```Observable```订阅(```subscribe```)回调函数的方式得到后台的数据。总之，看着自己做的项目一步一步实现相应的功能，到最终的实现，是一个很开心的过程。

#### 3.2 项目总结

本项目基本完成了需求分析中所需要的需求。其中用户注册、用户找回密码、查看个人信息、用户评论、修改个人信息、修改个人密码和修改邮箱信息需求均可以实现的，且实现的过程与现代网页无区别。但是用户登录模块实现的并不是很好，存在一些瑕疵。

本项目在以下问题的处理方式上存在**瑕疵**：

+ <font color="red">登录验证问题</font>

> 用户登录采用了简单的实现方式，当后台验证了用户在前端表单输入的用户名和密码，将用户信息传递到前台，通过前台服务组件进行交互和判断，这种方式过于简单和不安全，由于能力和时间有限，对于登录验证问题的处理采用了极其粗略的方式，存在瑕疵。

+ <font color="red">并发问题</font>
> 写的所有事务的处理方式基本没有考虑过并发的问题，现实生活中的网页都是多线程的问题，无法明确网页设计优化的性能如何。
+ <font color="red">后台数据与前台交互问题</font>
> 本项目在处理后台数据传递问题时，采取了比较简单粗暴的方式，直接就把整个数据传给了前台，对于过滤的设计处理并不是很好，直接发送给前台会造成数据网络带宽的浪费。

项目开发过程中的**不足之处**：

+ <font color="red">模块化思想过于严重</font>
> 最初设计项目的想法是对于每一个前端的组件都对应于一个后台的模块。但是在后面的开发过程中，才发现许多逻辑是重复的，造成了重复造轮子。例如发送邮件功能对应了几个组件，虽然邮件发送功能是一个单独的功能，但是对于发送邮件每一个对应的模块写了一个发送邮件的服务。造成了设计的杂糅。

+ <font color="red">开发经验不足</font>

> 由于项目开发经验不足且组件和模块过多，在开发过程中出现了许多低级错误加上对于```TypeScript```语言的不熟悉，造成了许多困难，导致了开发效率的低下。

### 四、鸣谢

首先感谢我的任课老师，将我带入了一次完整的前端和后台的全栈开发，在我开发的过程中给予了我许多方面的指导。

> + [棋哥教学网](https://qige.io/)

其次要感谢``` Angular```、```Angular Material```、```NestJS```、```Mongoose```、```MongoDB```中文社区翻译的无私奉献。

> + [Angular](https://angular.cn/)
> + [Angular Material](https://material.angular.cn/)
> + [Nestjs](https://docs.nestjs.cn/)
> + [Mongoose](http://www.mongoosejs.net/)
> + [MongoDB](http://www.mongoing.com/docs/)

本项目前端的界面设计大部分参考某游戏资源网站的风格，特别感谢。

> [我的Galgame资源发布站](https://www.mmgal.com/)

### 五、项目开源

在写项目的过程中，参考了许多前辈的优先经验，没有这些前辈的开源精神，我这个项目或许无法完成到现在这个水平，虽然项目实现的功能很基础，基于开源的精神，本项目所有源代码将在```GitHub```上开源，希望能够给某人带来相应的帮助。



