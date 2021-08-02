/*
 * @Author: your name
 * @Date: 2021-08-02 09:54:47
 * @LastEditTime: 2021-08-02 10:29:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SCRM-Admin-Webd:\work\project\nodeServer\db\index.js
 */
const fs = require("fs");
// 同步读取文件
const user = fs.readFileSync(`${__dirname}/user.json`,{
  encoding: "utf-8"
})

module.exports = user

