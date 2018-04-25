$( document ).ready(function() {

    $('.new-tweet').on('input', 'textarea', function(event){ // jquery selector to get the text input area

      var inputlength = event.target.textLength; // finds the user input length

      var result = 140 - inputlength; //Calculates the characters left

      var charactercounter = $(this).closest('form').find('.counter');

      if (result >= 0){
        charactercounter.text(result).removeClass('color');
      } else {
        charactercounter.text(result).addClass('color');
      }

      if (inputlength <= 140 && inputlength > 0) {
        $(this).closest('main').find('.err-message').slideUp(500);
      }

    });

});