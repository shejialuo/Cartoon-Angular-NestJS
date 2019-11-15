/*确定用户登录的基本数据结构 */

export class User {
    constructor(
        public username: string,
        public userpassword: string,
        public useremail: string,
    ) {}
}
