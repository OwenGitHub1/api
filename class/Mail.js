/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */

class Mail {
  constructor(from, to, subject, text, html){
    this.from = from || '';
    this.to = to || '';
    this.subject = subject || '';
    this.text = text || '';
    this.html = html || '';
  }
}

module.exports = Mail;
