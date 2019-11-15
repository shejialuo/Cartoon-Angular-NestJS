import { Document } from 'mongoose';
export interface UsersRead extends Document {
    readonly information: string;
}
