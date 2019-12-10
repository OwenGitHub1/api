/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */

const Tool  = require('../models/Tool.js');
const ToolInfo = require('../class/ToolInfo.js');
const Errors = require('../util/error.js');
const Sequelize = require('sequelize');

module.exports = {
  async addTool(params){
    const toolInfo = new ToolInfo(params.name, params.desc || '', params.site, params.link, params.tag || '');
    await Tool.create(toolInfo);
    return Errors.serverOK();
  },


  async queryTool(params){
   const { keyword, order, page, pageSize } = params;
   const option = {
     offset: (page - 1) * pageSize,
     limit: pageSize
   };
    const countOption = {};
   if (keyword) {
     option.where = {name:{[Sequelize.Op.like]:`%${keyword}%`}};
     countOption.where = {name:{[Sequelize.Op.like]:`%${keyword}%`}};
   }
   const result = await Tool.findAll(option);
   const totalRes = await Tool.findAndCountAll(countOption);
   return {
     total: totalRes.count,
     page,
     pageSize,
     data: result
   }
  },

  async getRecomendTool(){

  }

};
