$(document).ready(function(){

    // Select and loop the container element of the elements you want to equalise
    $('.enforce-jumbotron-height').each(function(){

      // Cache the highest
      var highestBox = 0;

      // Select and loop the elements you want to equalise
      $('.jumbotron', this).each(function(){

        // If this box is higher than the cached highest then store it
        if($(this).height() > highestBox) {
          highestBox = $(this).height();
        }

      });

      // Set the height of all those children to whichever was highest
      $('.jumbotron',this).height(highestBox);

    });

});

$(window).resize(function () {
  // Select and loop the container element of the elements you want to equalise
  $('.enforce-jumbotron-height').each(function(){

    // Cache the highest
    var highestBox = 0;

    // Select and loop the elements you want to equalise
    $('.jumbotron', this).each(function(){

      // If this box is higher than the cached highest then store it
      if($(this).height() > highestBox) {
        highestBox = $(this).height();
      }

    });

    // Set the height of all those children to whichever was highest
    $('.jumbotron',this).height(highestBox);

  });

});
