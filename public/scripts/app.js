/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Test / driver code (temporary). Eventually will get this from the server.
// Fake data taken from tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];


function createTweetElement(tweetData){

  var currentdate = Date.now();
  var posttime = tweetData['created_at'];
  var result = Math.floor((((((currentdate - posttime)/1000)/60)/60)/24)/365);




    return $(`<article>

          <header> <img src= ${tweetData.user.avatars.small}>
           <div class='line'> <div class="name">${tweetData.user.name}</div> <div class="id">${tweetData.user.handle}</div></div>
          </header>

          <textarea>${tweetData.content.text}</textarea>

          <footer> ${result} years ago
            <span class="icon1"><i class="fas fa-flag"></i></span>
            <span class="icon2"><i class="fas fa-retweet"></i></span>
            <span class="icon3"><i class="fas fa-heart"></i></span>
          </footer>

        </article>`);

}


function renderTweets(data) {


  $(document).ready(function(){
    for(var obj of data) {
      var $tweet = createTweetElement(obj);
      $('#tweets-container').append($tweet);
    }
  });
}


renderTweets(data);


$(document).ready(function(){

  $( "#tweet" ).submit(function( event ) {

  event.preventDefault();

  $.ajax({
    url : '/tweets/',
    method: 'POST',
    data: $('#tweet').serialize()
  })
  .done( function(){
    location.reload();
  })
  .fail( function(){
    console.log("error");
  })

  });
});

