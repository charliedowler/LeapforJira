console.log("LEAP FOR JIRA RUNNING");
$('body').append($('<div id="cursor" style="position: absolute;z-index:9999;display: block;width:20px;height:20px;background-color: black"></div>'));

var offsetX = 13;
var offsetY = 10;
var width = window.innerWidth / 2;
var height = window.innerHeight / 2;
var cursor = $('#cursor');
// Setup Leap loop with frame callback function
var controllerOptions = {enableGestures: true};
Leap.loop(controllerOptions, function(frame) {
    // Body of callback function
    if (typeof frame.fingers[0] != 'undefined') {
        var fingerx = frame.fingers[0].tipPosition[0] * offsetX;
        var fingery = frame.fingers[0].tipPosition[1] * offsetY;
        var y = (fingery - height) - $(document).scrollTop();
        var x = width + fingerx;
        var e = new $.Event('click');
        cursor.css('left', x);
        cursor.css('bottom', y);
        x = cursor.position().left;
        y = cursor.position().top;
        cursor.animate({
            backgroundColor: '#00FF00'
        }, 100, '', function() {
            console.log(x, y);
            $(document.elementFromPoint(x, y)).trigger(e);
        });
    }
});