/*
 * @Author: your name
 * @Date: 2021-07-22 16:05:55
 * @LastEditTime: 2021-08-02 09:44:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SCRM-Admin-Webd:\work\project\loveSearch\server\index.js
 */
const express = require('express');
// 中间件
const middleware = require('./middleware')
// 引入模块
const admin = require('../routes/admin/user');
// bodyParser
const bodyParser = require('body-parser')
// 创建服务器
const app = express();
// 托管web目录
app.use(express.static('./web'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
// 使用中间件
app.use(middleware)
// 路由admin模块
app.use('/admin', admin)
// 监听8888 
app.listen(8888, function () {
  console.log('===== node 服务器已开启 ====')
})
