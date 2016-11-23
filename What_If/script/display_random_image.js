$(document).ready(function(){

  /* variables */

var theImages = [{
     src: "./images/02850.png",
     // width: "350",
     // height: "450"
 }, {
      src: "./images/02891.png",
     // width: "350",
     // height: "450"
 }, {
     src: "./images/02905.png",
     //  width: "350",
     // height: "450"
 }, {
     src: "./images/02911.png",
     // width: "350",
     // height: "450"
 }, {
     src: "./images/02913.png",
    // width: "350",
    //  height: "450"
 }, {
     src: "./images/02930.png",
    // width: "350",
    //  height: "450"
 }, {
     src: "./images/02988.png",
     // width: "350",
     // height: "450"
 }, {
     src: "./images/03574.png",
     // width: "350",
     // height: "450"
 }, {
     src: "./images/03594.png",
    // width: "350",
    //  height: "450"
 }, {
     src: "./images/03595.png",
    // width: "350",
    //  height: "450"
 }, {
     // src: "http://www.mediasmarties.nl/media/uploads/dsc04764.jpg",
     // width: "600",
     // height: "350"
 }];

 var numImages = theImages.length;

 /* functions */

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
