var express = require('express');
var apiRouter = express.Router();
var flwrs = require('../tweetNode.js');

var Twit = require('twit');
var config = require('../config');
var T = new Twit(config);

apiRouter.route('/')
  .get(function (req, res, next) {
    var userName = req.query.usrName;
    var cursor = req.query.page;

    T.get('followers/list', { screen_name: userName, count: 200, cursor: cursor,},  function getFollowers(err, data, response) {
      if(err){ console.log(err) } else {
        var followers = data.users;
        var yourfollowers =[];
        for(var i=0; i<followers.length; i++){
          if(followers[i].location !== '') {

            yourfollowers.push({userName: followers[i].screen_name, pic: followers[i].profile_image_url_https, name: followers[i].name, location: followers[i].location})
          }
        }
        res.send({followers: yourfollowers, next_page: data.next_cursor, previous_page: data.previous_cursor });
      }
    });
  })
  .post(function (req, res, next) {
  });

module.exports = apiRouter;