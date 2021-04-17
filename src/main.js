/*
For graders--
Mods:
Game Physics not tied to frame rate. Used a deltaTime to accomplish this. Approved by Nathan in discord, 10 points. 1 hour
Timer is shown. 10 points. 1.5 hours but only because I was foolishly stubborn and tried to do it a dumb way first



*/

let config =
{
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play],
    
}

let game = new Phaser.Game(config);

//set UI sizes
let borderUISize = game.config.height/15;
let borderPadding = borderUISize/3;

let starSpeed = config.width/160;

//reserve keyboard bindings
let keyF, keyR, keyLEFT, keyRIGHT;

