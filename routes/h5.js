/*
 * @Author: your name
 * @Date: 2021-08-19 13:46:52
 * @LastEditTime: 2021-08-19 13:47:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SCRM-Admin-Webd:\work\project\nodeServer\routes\h5.js
 */
const express = require('express');
// 可使用 express.Router 类创建模块化、可挂载的路由句柄
const router = express.Router();
// 
const user = require('./h5/user.js');
// 配置路由
router.use('/user',user);
// 暴露这个 router模块
module.exports = router;  