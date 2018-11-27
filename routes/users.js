var express = require('express');
var router = express.Router();
var superagent = require('superagent');
var cheerio = require('cheerio');
var fs = require('fs');
var url = require('url');
var  eventproxy = require('eventproxy');

var cnodeUrl = 'https://cnodejs.org/';
/* GET users listing. */
var Users = require('../models/Users');

router.get('/', function(req, res, next) {
  Users.find(function(err, users) {
    if(err) console.log(err, 'err');
    res.send(users)
  })
  //爬虫
  // superagent.get(cnodeUrl)
  //   .end(function(err, sres) {
  //     if(err) {
  //       return next(err)
  //     }
  //     var $ = cheerio.load(sres.text);
  //     var urlList = [];
  //     $('#topic_list .topic_title').each(function (idex, element) {
  //       var $element = $(element);
  //       urlList.push({
  //         href: url.resolve(cnodeUrl, $element.attr('href'))
  //       });
  //     })
  //     var ep = new eventproxy();
  //     ep.after('topic_html', urlList.length, function(topics) {
  //       var topic = topics.map(function(topicPair) { 
  //         var topicUrl = topicPair[0];
  //         var topicHtml = topicPair[1];
  //         var $ = cheerio.load(topicHtml);
  //         return {
  //           title: $('.topic_full_title').text().trim(),
  //           href: topicUrl,
  //           comment1: $('.reply_content').eq(0).text().trim()
  //         }
  //       })
  //       res.send(topic)
  //       fs.writeFile('./public/title.json', JSON.stringify(topic, null, '\t'), function(err, data) {
  //         if(err) {
  //           return console.err(err)
  //         }
  //       })
  //     })
  //     urlList.forEach(function(itmeUrl) {
  //       superagent.get(itmeUrl.href) 
  //         .end(function(err, res) {
  //           ep.emit('topic_html', [itmeUrl, res.text])
  //         })  
  //     })  
  //   })
});

module.exports = router;
