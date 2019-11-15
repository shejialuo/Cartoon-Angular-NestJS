import { Document } from 'mongoose';
export interface UsersRemark extends Document {
    readonly userusename: string;
    readonly userremark: string;
}
