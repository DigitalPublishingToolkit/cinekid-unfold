(function() {
  // Start off scrolled to the bottom
  var $selects = $('.scroll2');
  $selects.last().scrollTop($selects.last().get(0).scrollHeight);

  var lastScroll = {
    whichEle: null,
    position: 0
  };
  
  // Wait until the scrollTop has applied itself (aka a repaint)
  window.requestAnimationFrame(function() {
    $selects.on('scroll', scrollOther);
  });
  
  function scrollOther() {
    var currPosition = $(this).scrollTop();

    if ($(this).is(lastScroll.whichEle)) {
      var positionDiff = currPosition - lastScroll.position;
     
      if(positionDiff === 0) { return; }

      var $other = $selects.not(this);
      
      $other.off('scroll'); // temporarily stop listening
      
      // Wait until the handler released itself (aka a repaint)
      window.requestAnimationFrame(function() {
        // Since scroll events happen so frequently, no need to animate (unless there's a debounce)
        $other.scrollTop($other.scrollTop() - positionDiff);
        
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
})();

