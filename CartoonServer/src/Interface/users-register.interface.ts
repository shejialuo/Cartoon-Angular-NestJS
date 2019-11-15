import { Document } from 'mongoose';
export interface UsersRegister extends Document {
    readonly username: string;
    readonly userpassword: string;
    readonly useremail: string;
    readonly userusename: string;
    readonly usersex: string;
    readonly userqq: string;
    readonly userwebo: string;
    readonly userbirthday: string;
    readonly userintroduction: string;
    readonly userinterest: string;
}
