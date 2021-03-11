
// Start by making sure the page is ready...

$(document).ready(function(){

    // ===============
    // Bounce the bouncy ball around the box...
    // --------------------------------------------------------------------------------------------------

    var court = $('#squashcourt'); // only make this once for performance, store in variable
    var ball = $('#bouncy_ball');

    // init the direction of travel: r -> u -> l -> d
    // dictates the CSS property change
    // r = bottom --, left ++
    // u = bottom ++, left ++
    // l = bottom ++, left --
    // d = bottom --, left --
    var nextbounce = 'r';

    //get the 'sides' of the court to be the max values for movement
    var courtTop = parseInt( court.css('height'), 10 );
    var courtMaxLeft = parseInt( court.css('width'), 10 );

    // tick the ball to a new position every 200 ms

    setInterval(function(){

        var ballCurrentBottom = parseInt( ball.css('bottom'),10 );
        var currentLeft = parseInt( ball.css('left'),10 );

        //is still in bounds?
        // have to subtract the ball's width since it's position is
        // being read at the bottom left corner above
        if( ballCurrentBottom > 1
            &&  ballCurrentBottom < courtTop - 25
            &&  currentLeft > 1
            &&  currentLeft < courtMaxLeft - 22 ){

            // do ball move
            if(nextbounce == 'r'){
                ballCurrentBottom --;
                currentLeft ++;
                ball.animate({
                    bottom: ballCurrentBottom,
                    left: currentLeft
                }, 2, 'linear');
            }
            else if(nextbounce == 'u'){
                ballCurrentBottom ++;
                currentLeft ++;
                ball.animate({
                    bottom: ballCurrentBottom,
                    left: currentLeft
                }, 2, 'linear');
            }
            else if(nextbounce == 'l'){
                ballCurrentBottom ++;
                currentLeft --;
                ball.animate({
                    bottom: ballCurrentBottom,
                    left: currentLeft
                }, 2, 'linear');
            }
            else if(nextbounce == 'd'){
                ballCurrentBottom --;
                currentLeft --;
                ball.animate({
                    bottom: ballCurrentBottom,
                    left: currentLeft
                }, 2, 'linear');
            }

            //log position in console
            //console.log("Nextbounce: " + nextbounce);
            //console.log("Bottom: " + ballCurrentBottom);
            //console.log("Left: " + currentLeft);
            //console.log(" - - - - - - - - - - - -");
        }else{
            // ball hit a wall, so change direction
            if(nextbounce == 'r'){
                nextbounce = 'u';

                ballCurrentBottom ++;
                currentLeft ++;
                ball.animate({
                    bottom: ballCurrentBottom,
                    left: currentLeft
                }, 2, 'linear');
            }else if (nextbounce == 'u') {
                nextbounce = 'l';
                ballCurrentBottom ++;
                currentLeft --;
                ball.animate({
                    bottom: ballCurrentBottom,
                    left: currentLeft
                }, 2, 'linear');
            }else if (nextbounce == 'l') {
                nextbounce = 'd';
                ballCurrentBottom --;
                currentLeft --;
                ball.animate({
                    bottom: ballCurrentBottom,
                    left: currentLeft
                }, 2, 'linear');
            }else if (nextbounce == 'd') {
                nextbounce = 'r';
                ballCurrentBottom --;
                currentLeft ++;
                ball.animate({
                    bottom: ballCurrentBottom,
                    left: currentLeft
                }, 2, 'linear');
            }
        }

    }, 30); // this is the end of the interval timer

    // ===============
    // Control the car with WSAD
    // --------------------------------------------------------------------------------------------------

    var lot = $('#parkinglot'); // only make this once for performance, store in variable
    var car = $('#speedcar');
    var delta = 10; // how far to move the car
    var log = ""; // create this up here so we can update it in the 'if' below

    //get the 'sides' of the parkinglot to be the max values for movement
    var lotTop = parseInt( lot.css('height'), 10 );
    var lotMaxLeft = parseInt( lot.css('width'), 10 );

    $(document).keydown(function(e){
        var carCurrentBottom = parseInt( car.css('bottom'), 10 );
        var carCurrentLeft = parseInt( car.css('left'), 10 );

        // figure out what key was pressed
        //  codes are here: https://css-tricks.com/snippets/javascript/javascript-keycodes/

        if(e.keyCode == 87) {
            e.preventDefault(); // this line stops the key's normal behaviour, i.e. reporting a letter
            // W
            // move car "up" / bottom ++
            if(carCurrentBottom + delta < lotTop - 50){
                // if car has room to move, adjust variable for move
                carCurrentBottom += delta;
            }
            log = "up";
        }
        if(e.keyCode == 83) {
            e.preventDefault(); // this line stops the key's normal behaviour, i.e. reporting a letter
            // S
            // move car "down" / bottom --
            if(carCurrentBottom - delta > 0){
                carCurrentBottom -= delta;
            }
            log = "down";
        }
        if(e.keyCode == 68) {
            e.preventDefault(); // this line stops the key's normal behaviour, i.e. reporting a letter
            // D
            // move car "right" / left ++
            if(carCurrentLeft + delta < lotMaxLeft - 50){
                carCurrentLeft += delta;
            }
            log = "right";
        }
        if(e.keyCode == 65) {
            e.preventDefault(); // this line stops the key's normal behaviour, i.e. reporting a letter
            // A
            // move car "left" / left --
            if(carCurrentLeft - delta > 0){
                carCurrentLeft -= delta;
            }
            log = "left";
        }

        //move the car
        car.animate({
            bottom: carCurrentBottom,
            left: carCurrentLeft
        }, 2, 'linear');

        //log move in console
        //console.log("=======================")
        //console.log("Car moved " + log);
        //console.log("=======================")

    }); // end of keydown

    // ===============
    // Scroll the Rainbow
    // --------------------------------------------------------------------------------------------------

    var thesky = $('#thesky'); // get this just once

    $(window).bind('mousewheel', function(e){

        console.log (e.originalEvent.wheelDelta);
        // get the current CSS background colour
        // it will look like this: "rgba(#, #, #, #)"
        var currentColour = thesky.css("backgroundColor");

        // split the colour value into it's numbers

        currentColour = currentColour.slice( currentColour.indexOf('(') + 1, currentColour.indexOf(')')); // "100, 0, 255, 0.5"

        // save each number in a slot of an array variable
        var colorArray = currentColour.split(','),
        //red: colorArr[0]
        //green: colorArr[1]
        //blue: colorArr[2]

        // go through array and change strings to integers for math-doing
        i = colorArray.length;
        while (i--) {
            colorArray[i] = parseInt(colorArray[i], 10);
        }

        // get a radnom number 1 or 2 for colour change
        function randomNum(){
            return Math.round(Math.random()) * 10 - 1;
        }
        // get a -1 or a 1
        function randomUpDown(){
            return (Math.random() - 0.5) * 2 ;
        }

        if(colorArray[0] <= 255 && colorArray[0] > 30){
            //add to red
            colorArray[0] = colorArray[0] + (randomNum() * randomUpDown() );
        }
        if(colorArray[1] <= 255 && colorArray[1] > 30){
            // add to green
            colorArray[1] = colorArray[1] +  (randomNum() * randomUpDown() );
        }
        if(colorArray[2] <= 255 && colorArray[2] > 30){
            // add to blue
            colorArray[2] = colorArray[2] +  (randomNum() * randomUpDown() );
        }

        // construct a string of the new colour in rgba format for CSS
        var newcolour = "rgba(" + colorArray[0] + ", " + colorArray[1] + ", " + colorArray[2] + ", 1)";

        //set the new colour with jQ
        thesky.css("backgroundColor", newcolour);
    });

    // ===============
    // Cursor is a Spacetime Cat
    // --------------------------------------------------------------------------------------------------
    var nyspace = $('#nyspace');

    nyspace.hover(function(){
        // this function run when curson enters the space box
        console.log('NYANize!');

        //add cat element to document, is positioned absolute
        $('body').append('<div id="cat">');

        // create a jQ of the new element so the move
        // event dosen't have to creat one each time
    }, function(){
        // this function run when curson leaves the space bo
        console.log('deNYANiaze!')

        // destroy cat image
        $('#cat').remove();
    });


    $('#nyspace').mousemove(function(e){
        console.log('meow');

        // position the cat where the hidden mouse is
        // mouse is hidden by CSS inside the space box
        $('#cat').css("top", e.pageY + 5 ); // add 5px so cursor does not hit #cat and 'leave' the space box
        $('#cat').css("left", e.pageX + 5 );

    });

});
