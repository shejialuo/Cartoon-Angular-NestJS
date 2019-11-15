import * as mongooge from 'mongoose';

export const UsersRemarkSchema = new mongooge.Schema({
    userusename: {type: String, required: true},
    userremark: {type: String, required: true},
});
