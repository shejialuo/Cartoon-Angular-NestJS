var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema(
    {name: {type: String, required: true}}
);
mongoose.connect('mongodb://localhost:27017/DataBase');
mongoose.connection.once('open',() => {
    console.log('connceted to database.')
  });
var Tank = mongoose.model('Tank', schema);
var small = new Tank({ name: 'small' });
var smaller = new Tank({name: 'shejialuo'});
    small.save();
    smaller.save();
