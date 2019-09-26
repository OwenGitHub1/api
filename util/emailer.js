/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
const Mailer = require('nodemailer');
const Mail = require('../class/Mail.js');
const transporter = Mailer.createTransport({
  debug: true,
  host: 'owa.ucredit.com',
  secureConnection: false,
  secure: false,
  port: 25,
  auth: {
    user: 'weiyong@youxin.com',
    pass: 'WYmm524785774+'
  },
  tls: {
    rejectUnauthorized: false,
    ciphers: 'SSLv3'
  }
});

module.exports = {
  sendEmail(){

  },
  async sendVerificationEmail(address, code) {
    return await transporter.sendMail(new Mail('weiyong@youxin.com',address,'注册验证码',code,''));
  }
};
