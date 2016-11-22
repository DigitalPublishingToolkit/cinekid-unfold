<script type="text/javascript">
    function randomImg1(){
        var myImages1 = new Array ();
        myImages1[1] = "images/cinekid01.jpg";
        myImages1[2] = "images/cinekid02.jpg";
        // myImages1[3] = "images/who/3.jpg";
        var rnd = Math.floor(Math.random() * myImages1.length);
        if(rnd == 0{
            rnd = 1;
        }
        document.write(<img class="who" src="'+myImages1[rnd]);
    }
</script>