import * as mongooge from 'mongoose';

export const UsersRegisterSchema = new mongooge.Schema({
    username: { type: String, required: true },
    userpassword: { type: String, required: true },
    useremail: { type: String, required: true },
    userusename: {type: String, default: ''},
    usersex: {type: String, default: ''},
    userqq: {type: String, default: ''},
    userwebo: {type: String, default: ''},
    userbirthday: {type: String, default: ''},
    userintroduction: {type: String, default: ''},
    userinterest: {type: String, default: ''},
});
