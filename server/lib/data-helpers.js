"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      simulateDelay(() => {
        db.collection('tweets').insertOne(newTweet).then( function (result){ // gets the tweets collection, inserts the document newTweet; result equals newTweet; and has a callback to handle errors
          callback(null, true);
        });
      });
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      simulateDelay(() => {
        db.collection('tweets').find().sort({created_at: -1}).toArray(callback); // .find() makes it cursor, .sort() only works on cursors, toArray() makes into an array but since it takes the arguments of error and the result, we just put the variable callback because the varibale callback in tweets.js already refers error and tweets
      });
    }

  };
}
