var pic_yourssu;
var pic_ssandbox;
var pic_ingame;

var logo_status;

var SSANDBOX;
var YOURSSU;

function setup() {
    createCanvas(1280, 720);
    pic_yourssu = loadImage('yourssu.png');
    pic_ssandbox = loadImage('ssandbox.png');
    pic_ingame = loadImage('ingame.png');

    SSANDBOX = 1;
    YOURSSU = 2;

    logo_status = SSANDBOX;

    //var timer = new Timer(5000);
    //timer.start();
}

function draw() {
    // image(pic_ingame, 0, 0);
    /*
    if (timer.isFinished())
    {
        switch(logo_status)
        {
            case SSANDBOX : 
                logo_status = YOURSSU;
                break;
            case YOURSSU :
                logo_status = SSANDBOX;
                break;
            default :
                break;
        }
        timer.start();
    }
    switch(logo_status)
    {
        case SSANDBOX : 
            image(pic_ssandbox, 25, 100);
            break;
        case YOURSSU :
            image(pic_yourssu, 42, 100);
            break;
        default :
            break;
    }
    */
    image(pic_ssandbox, 25, 100);
    image(pic_yourssu, 125, 100);
}

function Timer(tempTotalTime) {

  var savedTime; // When Timer started
  var totalTime; // How var Timer should last

  this.totalTime = tempTotalTime;

  // Starting the timer
  this.start = function() {
    // When the timer starts it stores the current time in milliseconds.
    savedTime = millis();
  }

  // The function isFinished() returns true if 5,000 ms have passed. 
  // The work of the timer is farmed out to this method.
  this.isFinished = function() { 
    // Check how much time has passed
    var passedTime = millis()- savedTime;
    if (passedTime > totalTime) {
      return true;
    } else {
      return false;
    }
  }
}
