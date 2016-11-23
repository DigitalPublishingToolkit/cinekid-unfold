$(document).ready(function(){

  //hides content first
  $('#content').hide();

  var setAnimDirection; //will be used to SEND the animation direction according with the link clicked (animates NEXT page content)
  var getAnimationDirection; //will be used to READ the animation direction according with the link clicked on previous page (animates THIS page content)

  /* Aimation directions can be:
  top-bottom
  right-left
  bottom-top
  left-right
  */

  var animations = [
    '#top-bottom',
    '#right-left',
    '#bottom-top',
    '#left-right'
  ];

  //READ animation and animate content
  setAnimDirection = window.location.hash;

  //read window width (will be used in positioning content offscreen)
  // var wWidth = $(window).width();
  var wWidth = $('#content').width();
  var wHeight = $(window).height();

  //if hash is one of the items inside animations array, go ahead and animate the content!
  if(animations.indexOf(setAnimDirection) != -1){

    //CASE1: TOP TO BOTTOM
    if(setAnimDirection == "#top-bottom"){
      //place content on the right of the screen
      $('#content').css({
        'margin-top': '-' + wHeight + 'px'
        //you could go for a different CSS property, of course. Like position: relative; top: wHeight + 'px' for example.
      });
      //show it (was hidden)
      $('#content').show(); //still offscreen though

      //animate it to the left-right
      $('#content').animate({
          'margin-top': 0
        }, 1200);
    }//end if animation #top-bottom

    //CASE 2: RIGHT TO LEFT
    if(setAnimDirection == "#right-left"){
      //place content on the right of the screen
      $('#content').css({
        'margin-left': wWidth + 'px'
      });
      //show it (was hidden)
      $('#content').show(); //still offscreen though

      //animate it to the left-right
      $('#content').animate({
          'margin-left': 0
        }, 1200);
    }//end if animation #right-left

    //CASE3: BOTTOM TO TOP
    if(setAnimDirection == "#bottom-top"){
      //place content on the right of the screen
      $('#content').css({
        'margin-top': wHeight + 'px'
      });
      //show it (was hidden)
      $('#content').show(); //still offscreen though

      //animate it to the left-right
      $('#content').animate({
          'margin-top': 0
        }, 1200);
    }//end if animation #bottom-top

    //CASE 4: LEFT TO RIGHT
    if(setAnimDirection == "#left-right"){
      //place content on the right of the screen
      $('#content').css({
        'margin-left': '-' + wWidth + 'px'
      });
      //show it (was hidden)
      $('#content').show(); //still offscreen though

      //animate it to the left-right
      $('#content').animate({
          'margin-left': 0
        }, 1200);
    }//end if animation #left-right

  }else{
    //no matching animation, show the hidden content
    $('#content').fadeIn();

  }

  //SEND animation to next page
  // $('a.gameNav').on('click', function(){
  //
  //   //add hash to the end of the URL
  //   var link = $(this).attr('href') + '#' + $(this).data('anim');
  //   $(this).attr('href', link);
  //
  // });//end .gameNav a click

  //SEND animation to next page
  $('a.gameNav').on('click', function(e){
    e.preventDefault();
    var link = $(this).attr('href') + '#' + $(this).data('anim');

    //fadesOut content before going to page
    $('#content').fadeOut('fast', function(){
      //fadeOut completed, do stuff

      //console.log('here' +link);

      //add hash to the end of the URL
      //$(e.target).attr('href', link);
      window.location.href=link;

    });

  });


});//end document.ready()
