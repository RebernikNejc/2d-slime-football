var game = new Phaser.Game(854, 480, Phaser.AUTO, "", {preload: preload, create: create, update: update});

function preload() {
    game.load.image("ground", "dist/img/ground.png");
    game.load.image("sky", "dist/img/sky.png");
    game.load.image("player_square", "dist/img/player_square.png");
}

function create() {
    // Enable physics
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // Background
    game.add.sprite(0, 0, "sky");

    // Ground
    ground = game.add.group();
    ground.enableBody = true;
    var gg = ground.create(0, 384, "ground");
    gg.body.immovable = true;

    // Player
    player = game.add.sprite(96, 0, "player_square");
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.0;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

}

function update() {
    // Collision detection
    var bootsOnGround = game.physics.arcade.collide(player, ground);
    
}