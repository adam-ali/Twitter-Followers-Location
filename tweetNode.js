/**
 * Created by adam on 24/01/17.
 */
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

var flwrs = function(name, cursor) {
  var yourfollowers =[];
  T.get('followers/list', { screen_name: name, count: 100, cursor: cursor,},  function getFollowers(err, data, response) {
    var followers = data.users;
    for(var i=0; i<followers.length; i++){
      if(followers[i].location !== '') {
        // console.log({userName: followers[i].screen_name, location: followers[i].location})
        yourfollowers.push({userName: followers[i].screen_name, location: followers[i].location})
      }
    }
    // console.log(yourfollowers);
    // return yourfollowers;
  });

};

function getFollowers(err, data, response) {
  var followers = data.users;
  var yourfollowers =[];
  for(var i=0; i<followers.length; i++){
    if(followers[i].location !== '') {
      // console.log({userName: followers[i].screen_name, location: followers[i].location})
      yourfollowers.push({userName: followers[i].screen_name, location: followers[i].location})
    }
  }
  console.log(yourfollowers);
  return yourfollowers;
}

module.exports = flwrs;