$(document).ready(function(){

  /* variables */

var theImages = [{
     src: "./images/whatif000.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif001.png",
     width: "350",
     height: "450"
 }, {
        src: "./images/whatif002.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif003.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif004.png",
     width: "350",
     height: "450/"
 }, {
         src: "./images/whatif005.png",
     width: "350",
     height: "450"
 }, {
  src: "./images/whatif006.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif007.png",
     width: "350",
     height: "450"
 }, {
        src: "./images/whatif008.png",
     width: "350",
     height: "450"
 }, {
        src: "./images/whatif009.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif010.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif011.png",
     width: "350",
     height: "450"
 }, {
        src: "./images/whatif012.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif013.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif014.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif015.png",
     width: "350",
     height: "450"
 }, {
   src: "./images/whatif016.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif017.png",
     width: "350",
     height: "450"
 }, {
        src: "./images/whatif018.png",
     width: "350",
     height: "450"
 }, {
        src: "./images/whatif019.png",
     width: "350",
     height: "450"
 }, {
       src: "./images/whatif020.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif021.png",
     width: "350",
     height: "450"
 }, {
        src: "./images/whatif022.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif023.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif024.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif025.png",
     width: "350",
     height: "450"
 }, {
     src: "./images/whatif026.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif027.png",
     width: "350",
     height: "450"
 }, {
        src: "./images/whatif028.png",
     width: "350",
     height: "450"
 }, {
        src: "./images/whatif029.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif030.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif031.png",
     width: "350",
     height: "450"
 }, {
        src: "./images/whatif032.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif033.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif034.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif035.png",
     width: "350",
     height: "450"
 }, {
   src: "./images/whatif036.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif037.png",
     width: "350",
     height: "450"
 }, {
        src: "./images/whatif038.png",
     width: "350",
     height: "450"
 }, {
        src: "./images/whatif039.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif040.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif041.png",
     width: "350",
     height: "450"
 }, {
        src: "./images/whatif042.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif043.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif044.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif045.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif046.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif047.png",
     width: "350",
     height: "450"
 }, {
        src: "./images/whatif048.png",
     width: "350",
     height: "450"
 }, {
        src: "./images/whatif049.png",
     width: "350",
     height: "450"
 }, {
       src: "./images/whatif050.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif051.png",
     width: "350",
     height: "450"
 }, {
        src: "./images/whatif052.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif053.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif054.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif055.png",
     width: "350",
     height: "450"
  }, {   src: "./images/whatif056.png",
     width: "350",
     height: "450"
 }, {
         src: "./images/whatif057.png",
     width: "350",
     height: "450"
 }, {
        src: "./images/whatif058.png",
     width: "350",
     height: "450"
 }, {
        src: "./images/whatif059.png",
     width: "350",
     height: "450"
 }, {
       src: "./images/whatif060.png",
     // width: "350",
     // height: "450"


 }];

 var numImages = theImages.length;

 / functions */

 // generates a random number between 0 and the number of images in the array (theImages)
 function randomNumberFromRange(min,max){

   var randomNumber = Math.floor(Math.random()*(max-min+1)+min);
   return randomNumber;

 }//end function randomNumberFromRange

 // shows a random image in the #randImage div (as img src)
 function showRandomImage(){

   //n is a random number
   var n = randomNumberFromRange(0, numImages - 1);

   //uses the random number to select an image from the array and use in the src attribute (html)
    $('#randImage img').attr('src', theImages[n].src);

 }//end function showRandomImage

 /* events */

 /* when page loads, call function and populate the image with a random src file */
 showRandomImage();

  /* when blue element #jsstyle is clicked, call function showRandomImage */
  $('#jsstyle').on('click', function(){
    showRandomImage();
    //console.log('random number -> ' +randomNumberFromRange(0, numImages - 1));
  });



});
