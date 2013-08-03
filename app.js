console.log("LEAP FOR JIRA RUNNING");

var circle          = $('<div id="cursorContainer"></div>')
    .css({
        "position" : "absolute",
        "display" : "block",
        "z-index" : "9999",
        "width" : "20px",
        "height" : "20px",
        "padding" : "20px",
        "border" : "1px solid #000000",
        "border-radius" : "25px"
    });

var cursor          = $('<div id="cursor"></div>')
    .css({
    "display" : "block",
    "width" : "20px",
    "height" : "20px",
    "backgroundColor" : "#000000"
    });

circle.append(cursor);
$('body').append(circle);

var offsetX             = 13,
    offsetY             = 10,
    width               = window.innerWidth / 2,
    height              = window.innerHeight / 2,
    x                   = 0,
    y                   = 0,
    fingerX             = 0,
    fingerY             = 0,
    e                   = new $.Event('click'),
    controllerOptions   = {enableGestures: true};

Leap.loop(controllerOptions, function(frame)
{

    if (!_.isUndefined(frame.fingers[0]))
    {

        fingerX         = frame.fingers[0].tipPosition[0] * offsetX;
        fingerY         = frame.fingers[0].tipPosition[1] * offsetY;

        y               = (fingerY - height) - $(document).scrollTop();
        x               = width + fingerX;

        circle.css({'left' : x, 'bottom': y});

        x               = circle.position().left;
        y               = circle.position().top;

        //click where the user is pointing $(document.elementFromPoint(x, y)).trigger(e);

    }

});