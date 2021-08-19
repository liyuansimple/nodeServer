/*
 * @Author: your name
 * @Date: 2021-08-19 13:41:05
 * @LastEditTime: 2021-08-19 13:48:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SCRM-Admin-Webd:\work\project\nodeServer\routes\index.js
 */
const express = require('express');
// 可使用 express.Router 类创建模块化、可挂载的路由句柄
const router = express.Router();
// 加载admin模块
const admin = require('./admin.js');
// 加载h5模块
const h5 = require('./h5');
// 配置路由
router.use('/admin', admin);
router.use('/h5', h5);
// 暴露这个 router模块
module.exports = router;  