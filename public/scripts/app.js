/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function createTweetElement(tweetData){

  var result = calculatetime(tweetData);

    return $(`<article>

          <header>
            <div class = "flex">
              <div class='line'>
                <img src= ${tweetData.user.avatars.small}>
                <div class="name">${tweetData.user.name}</div>
              </div>
              <div class='handleid'>
                <div class="id">${tweetData.user.handle}</div>
              </div>
            </div>
          </header>

          <textarea>${tweetData.content.text}</textarea>

          <footer> ${result}
            <span class="icon">
              <i class="fas fa-flag"></i>
              <i class="fas fa-retweet"></i>
              <i class="fas fa-heart"></i>
            </span>
          </footer>

        </article>`);

}


function renderTweets(data) {


  $('#tweets-container').empty(); //removes the container of tweets

    for(var obj of data) {
      var $tweet = createTweetElement(obj);
      $('#tweets-container').append($tweet); //readds with the new tweets
    }

}


// Ajax request that listens for submit, prevents the default behaviour, sends the data of user input to the path and the method

$(document).ready(function(){

  $( "#tweet" ).submit(function( event ) {

    event.preventDefault();

    var $counter = $('#tweet span');


    var $new = $('#tweet textarea');
    var inputlength = $new['0'].value.length;

    if (inputlength === 0){

      if ($(this).closest('main').find('.err-message:first').is(':hidden')) {
            $(this).closest('main').find('.err-message').text('Please write something before posting.').slideDown(500);
      }

    } else if (inputlength > 140) {

      if ($(this).closest('main').find('.err-message:first').is(':hidden')) {
            $(this).closest('main').find('.err-message').text('Please stay within the character limit.').slideDown(500);
      }

    } else {

      $.ajax({
        url : '/tweets/',
        method: 'POST',
        data: $('#tweet').serialize()
      })
      .done( function(){
        loadTweets();
      })
      .fail( function(){

      });

      $new['0'].value = "";
      $counter['0'].innerText = 140;
    }
  });
});

// Ajax request that handles get request to get the databse

function loadTweets(){

  $.ajax({
    url : '/tweets',
    method: 'GET',
  })
  .done( function(data){
    renderTweets(data);
  })
  .fail( function(){
    console.log("error");
  })

}


$(document).ready(function(){

    loadTweets();
});


function calculatetime(tweetdata) {

  var currentdate = Date.now();
  var posttime = tweetdata['created_at'];
  var durationofpost = currentdate - posttime;

  if (Math.floor(durationofpost/1000/60/60/24/365) > 0) {
    return Math.floor(durationofpost/1000/60/60/24/365) + " years ago";
  } else if (Math.floor(durationofpost/1000/60/60/24/30.416666) > 0) {
    return Math.floor(durationofpost/1000/60/60/24/30.416666) + " months ago";
  } else if (Math.floor(durationofpost/1000/60/60/24) > 0) {
    return Math.floor(durationofpost/1000/60/60/24) + " days ago";
  } else if (Math.floor(durationofpost/1000/60/60) > 0) {
    return Math.floor(durationofpost/1000/60/60) + " hours ago";
  } else if(Math.floor(durationofpost/1000/60) > 0 ) {
    return Math.floor(durationofpost/1000/60) + " minutes ago";
  } else if (Math.floor(durationofpost/1000) > 0) {
    return Math.floor(durationofpost/1000) + " seconds ago";
  } else {
    return "0 seconds ago";
  }

}

$(document).ready(function(){

  $('button.compose-bar').on('click', function() {

    console.log($(this).closest('#nav-bar').find('section.new-tweet'));

    $('section.new-tweet').slideToggle(500);
    $('section.new-tweet form textarea').focus();
  });

});
