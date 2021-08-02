/*
 * @Author: your name
 * @Date: 2021-07-30 16:35:04
 * @LastEditTime: 2021-08-02 15:42:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SCRM-Admin-Webd:\work\project\nodeServer\mongodb\index.js
 */
const MongoClient = require('mongodb').MongoClient;
// 配置文件
const config = require('./config');
const state = false
// 定义基本类
class Mongo{
  // 多次连接共享实例对象
  static getInstance(){
    if(!Mongo.instance){
      Mongo.instance = new Mongo();
    };
    // 简化性能提升
    return Mongo.instance;
  }

  // 默认初始化执行方法
  constructor(){
    // 存放mongodb连接后的对象
    this.dbClient = '';
    // 初始化连接数据库
    this.connect()
  }
  
  // 连接
  connect(){
    let url
    if (state) {
      url = `'mongodb://${config.username}${config.password}@${config.address}:${config.port}/`
    } else {
      url = `'mongodb://${config.address}:${config.port}/`
    }
    return new Promise((resolve,reject) => {
      if(!this.dbClient){
        MongoClient.connect(url,{
          useNewUrlParser:true
        },(err,client) => {
          if(!err){
            this.dbClient = client.db(config.database);
            resolve(this.dbClient);
          }else{
            reject(err);
          }
        })
      }else{
        resolve(this.dbClient)
      }
    })
  }

  // 添加
  add(tableName, json){
    return new Promise((resolve,reject) =>{
      this.connect().then(db => {
        db.collection(tableName).insertOne(json,(err,result) => {
          if(!err){
            return resolve(result)
          }
          reject(err)
        })
      })
    })
  }

  // 删除
  remove(tableName, json){
    return new Promise((resolve,reject) => {
      this.connect().then(db => {
        db.collection(tableName).removeOne(json,(err,result) => {
          if(!err){
            return resolve(result)
          }
          reject(err)
        })
      })
    })
  }

  // 更新
  update(tableName,condition,json){
    return new Promise((resolve,reject) => {
      this.connect().then(db => {
        db.collection(tableName).updateOne(condition,{
          $set:json
        },(err,result) => {
          if(!err){
            return resolve(result)
          }
          reject(err)
        })
      })
    })
  }

  // 查询
  find(tableName,json){
    return new Promise((resolve,reject) => {
      this.connect().then(db => {
        let result = db.collection(tableName).find(json)
        result.toArray((err,data) => {
          if(!err){
            resolve(data)
            return
          }
          reject(err)
        })
      })
    })
  }
}

module.exports = Mongo.getInstance()

