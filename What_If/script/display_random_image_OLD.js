    function display_random_image()
    {
         var theImages = [{
            // Ajax call, everytime click a image, PHP.
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

        // only show one image once,


        var preBuffer = [];
        for (var i = 0, j = theImages.length; i < j; i++) {
            preBuffer[i] = new Image();
            preBuffer[i].src = theImages[i].src;
            preBuffer[i].width = theImages[i].width;
            preBuffer[i].height = theImages[i].height;
        }

    // create random image number
      function getRandomInt(min,max)
        {
          //  return Math.floor(Math.random() * (max - min + 1)) + min;

    imn = Math.floor(Math.random() * (max - min + 1)) + min;
        return preBuffer[imn];
        }

    // 0 is first image,   preBuffer.length - 1) is  last image

    var newImage = getRandomInt(0, preBuffer.length - 1);

    // remove the previous images
    var images = document.getElementsByTagName('img');
    var l = images.length;
    for (var p = 0; p < l; p++) {
        images[0].parentNode.removeChild(images[0]);
    }
    // display the image
    document.body.appendChild(newImage).className = 'randomimage';
    //document.getElementsByTagName(img).className = 'randomimage';
  //  object.style.paddingLeft;
    }

    //   document.body.appendChild(newImage).className = 'randomimage';
    // //document.getElementsByTagName(img).className = 'randomimage';
    // obj
