var game = new Phaser.Game(854, 480, Phaser.AUTO, "", {preload: preload, create: create, update: update});

function preload() {
    game.load.image("ground", "dist/img/ground.png");
    game.load.image("sky", "dist/img/sky.png");
    game.load.image("player_square", "dist/img/player_square.png");
    game.load.image("ball", "dist/img/ball.png");
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
    player.body.gravity.y = 981;
    player.body.collideWorldBounds = true;

    // Ball
    ball = game.add.sprite(450, 217, "ball");
    game.physics.arcade.enable(ball);
    ball.body.bounce.y = 0.37;
    ball.body.bounce.x = 0.37;
    ball.body.gravity.y = 981;
    ball.body.collideWorldBounds = true;

    // Keyboard controls
    keys = game.input.keyboard.createCursorKeys();

}

function update() {
    // Collision detection
    var bootsOnGround = game.physics.arcade.collide(player, ground);
    var ballOnGround = game.physics.arcade.collide(ball, ground);
    var hitBall = game.physics.arcade.collide(player, ball);

    // Reset horizontal player speed
    player.body.velocity.x = 0;

    // Check for keypresses
    if (keys.right.isDown) {
        player.body.velocity.x += 137;
    }
    if (keys.left.isDown) {
        player.body.velocity.x += -137;
    }
    if (keys.up.isDown && bootsOnGround) {
        player.body.velocity.y = -450;
    }

    
}