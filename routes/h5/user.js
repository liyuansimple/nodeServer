/*
 * @Author: your name
 * @Date: 2021-07-30 17:52:18
 * @LastEditTime: 2021-08-19 13:46:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SCRM-Admin-Webd:\work\project\nodeServer\routes\login\login.js
 */
const express = require('express');
// 可使用 express.Router 类创建模块化、可挂载的路由句柄
const router = express.Router();
// mongo
const Mongo = require('../../mongodb/index')
// 获取
router.get('/',function(req,res){
  Mongo.find('site',{ name: "张三" }).then(user => {
    res.send(user);
  })
});
// 新增
router.post('/add',function(req,res){
  Mongo.add('site',{ name: "张三", url: "www.baidu" }).then(mon => {
    res.send('h5 显示商品 增加');
  })
});
// 修改
router.get('/edit',function(req,res){
  res.send('h5 显示商品 修改');
});
// 删除
router.get('/delete',function(req,res){
  res.send('h5 显示商品 删除');
});

module.exports = router; 