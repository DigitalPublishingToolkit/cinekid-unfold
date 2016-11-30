(function() {
  // retrieved from http://stackoverflow.com/questions/34297214/inverse-scroll-two-divs and adapted

  $(window).load(function(){

  // Start off scrolled to the bottom
  var $selects = $('.scroll2');

  $selects.last().scrollTop($selects.last().get(0).scrollHeight);

  // console.log('should go to '+ $selects.last().get(0).scrollHeight);
  // console.log('first elem ' + $selects.first().get(0).scrollHeight)

  var lastScroll = {
    whichEle: null,
    position: 0
  };

  // Wait until the scrollTop has applied itself (aka a repaint)
  window.requestAnimationFrame(function() {
    $selects.on('scroll', scrollOther);
  });

  function scrollOther() {
    var $other = $selects.not(this);

    var currPosition = $(this).scrollTop() ;
    // var maxPosition = $(this).get(0).scrollHeight;
    // var maxPositionOther = $other.get(0).scrollHeight;
    // var factor = maxPosition / maxPositionOther; //proportion between 2 heights
    // console.log('factor '+ factor);

    if ($(this).is(lastScroll.whichEle)) {
      var positionDiff = currPosition - lastScroll.position;

      var maxPosition = $(this).get(0).scrollHeight;
      var maxPositionOther = $other.get(0).scrollHeight;
      var factor = maxPosition / maxPositionOther; //proportion between 2 heights
      console.log('factor '+ factor);

      console.log('max ' + maxPosition );
      console.log('maxOther ' + maxPositionOther );

      if(positionDiff === 0) { return; }

      // var $other = $selects.not(this); //moved to outside the function

      $other.off('scroll'); // temporarily stop listening

      // Wait until the handler released itself (aka a repaint)
      window.requestAnimationFrame(function() {
        // Since scroll events happen so frequently, no need to animate (unless there's a debounce)
          //$other.scrollTop($other.scrollTop() - positionDiff);
          $other.scrollTop($other.scrollTop() - (positionDiff / factor));
          console.log('scrolling '+ (positionDiff / factor));

        // Wait until the scrollTop has applied itself (aka a repaint)
        window.requestAnimationFrame(function() {
          $other.on('scroll', scrollOther); // restart listening
        });
      });
    } else {
      // Just started scrolling a new div
      lastScroll.whichEle = $(this);

      // Since there is no direction figured out yet, do nothing more than record for this event
    }

    lastScroll.position = currPosition;
  }

  });

})();
