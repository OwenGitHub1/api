/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
const log4js = require('log4js');
log4js.configure({
  appenders: {
    server: {
      type: 'file',
      filename: './logs/access.log',
      maxLogSize: 10485760, // 10mb,日志文件大小,超过该size则自动创建新的日志文件
      backups: 20,  // 仅保留最新的20个日志文件
      compress: true,    //  超过maxLogSize,压缩代码
      pattern: ".yyyy-MM-dd-hh", // 用于确定何时滚动日志的模式
      alwaysIncludePattern: true,
    }
    },
  categories: {
    default: { appenders: ['server'], level: 'info' }
  }
});

const logger = log4js.getLogger('server');

module.exports = logger;

