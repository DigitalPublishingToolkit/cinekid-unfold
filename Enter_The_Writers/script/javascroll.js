(function () {
    // retrieved from http://stackoverflow.com/questions/34297214/inverse-scroll-two-divs and adapted

    $(window).load(function () {

        // Start off scrolled to the bottom
        var $divs = $('.scroll2');

        $divs.last().scrollTop($divs.last().get(0).scrollHeight);

        // console.log('should go to '+ $selects.last().get(0).scrollHeight);
        // console.log('first elem ' + $selects.first().get(0).scrollHeight)


        var sync = function (e) {

            var $other = $divs.not(this).off('scroll'),
                other = $other.get(0);

            //console.log($other.get(0)["id"], this);

            var percentage = this.scrollTop / (this.scrollHeight - this.offsetHeight);
            other.scrollTop = (1 - percentage) * (other.scrollHeight - other.offsetHeight);

            setTimeout(function () {
                $other.on('scroll', sync);
            }, 10);
        }
        $divs.on('scroll', sync);

    });

})();
