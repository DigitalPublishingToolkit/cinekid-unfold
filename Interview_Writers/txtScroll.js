$(window).load(function(){
  var wHeight = $(window).height();
  var bHeight = $('#bar').outerHeight(true);
  var tMargin = wHeight - bHeight + 16;
  var maxScroll;
  var scrollLoopId;
  var scrolling = false;

  $('#content').css('margin-top', tMargin);
  $('#content').css('padding-bottom', bHeight + 12);

  maxScroll = $('#content').outerHeight(true) - wHeight + bHeight;

  var tPos = $(window).scrollTop();

  function incrementScroll() {

    tPos = $(window).scrollTop();
    //console.log('scrolling... ' +tPos + ' until ' + maxScroll + 'scrolling ' +scrolling);
     if(tPos < maxScroll ){
       scrolling = true;
       window.scrollBy(0, 3) ;
     }else{
       scrolling = false;
       stopScrollLoop();
     }
   }


   function startScrollLoop() {
       scrollLoopId = setInterval( incrementScroll, 100) ;
   }

   function stopScrollLoop() {
       scrolling = false;
       clearInterval( scrollLoopId ) ;
       scrollLoopId = false;
       //console.log('paused...')
   }

   //start scrolling when page is ready
   if(scrolling == false){
     startScrollLoop();
   }


   $('#restart').on('mouseover', function(){
    //startScrollLoop();
      if(scrolling == false){
       startScrollLoop();
     }
   });

   $('#pause').on('mouseover', function(){
    stopScrollLoop();
   });



  });
