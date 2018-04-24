$( document ).ready(function() {

    $('.new-tweet').on('keyup', 'textarea', function(event){ // jquery selector to get the text input area

      var inputlength = event.target.textLength; // finds the user input length

      var result = 140 - inputlength; //Calculates the characters left

      var charactercounter = $(this).closest('form').find('.counter');

      if (result >= 0){
        charactercounter.text(result);
      } else {
        charactercounter.text(result).css('color', 'red');
      }

    });

});