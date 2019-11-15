import * as mongooge from 'mongoose';

export const UsersReadSchema = new mongooge.Schema({
    information: { type: String, required: true },
});
