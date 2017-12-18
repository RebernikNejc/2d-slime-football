(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var game = new Phaser.Game(854, 480, Phaser.AUTO, "", {preload: preload, create: create, update: update});

function Slime2DFootballPhysicsEngine() {
    
    // Gravity coeficcient
    this.gravity = 9.91;
    
    // Physics objects
    this.playerOne = null;
    this.playerTwo = null;
    this.ball = null;
    this.ground = null;
    
    this.update = function() {
        console.log("Updating PhysX 2K17");
    }
    
}

var physics = new Slime2DFootballPhysicsEngine();

function preload() {
    game.load.image("ground", "dist/img/ground.png");
    game.load.image("sky", "dist/img/sky.png");
    game.load.image("player_square", "dist/img/player_square.png");
    game.load.image("player_half", "dist/img/player_half.png");
    game.load.image("ball", "dist/img/ball.png");
}

function create() {
    
    // Physics ENGINE *** VROOM VROOM ***
    physics = new Slime2DFootballPhysicsEngine();

    // Background
    ozadje = game.add.sprite(0, 0, "sky");

    // Ground
    ground = game.add.sprite(0, 384, "ground");

    // Player
    player = game.add.sprite(96, 100, "player_half");

    // Ball
    ball = game.add.sprite(450, 217, "ball");

    // Keyboard controls
    keys = game.input.keyboard.createCursorKeys();

}

function update() {
    // Check for keypresses
    if (keys.right.isDown) {
        player.x += 25;
    }
    if (keys.left.isDown) {
        player.x -= 25;
    }
    if (keys.up.isDown && bootsOnGround) {
        player.y = -60;
    }
    
    physics.update();
    

}
},{}]},{},[1]);
