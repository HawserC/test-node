var mongoose = require('mongoose');
//创建一个userSchema对象
var userSchema = new mongoose.Schema({
  name: String
})

var Users = mongoose.model('users', userSchema) // 编译生成Movie 模型

module.exports = Users;

