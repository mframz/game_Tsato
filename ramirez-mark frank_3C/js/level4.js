var text;
var Game3 = {
 preload: function() {
 
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.pageAlignHorizontally = true;
            game.scale.pageAlignVertically = true;

            game.load.image("bg1","assets/bundok.png");
            game.load.image("bg2","assets/burol.png");
           	game.load.image("bg3","assets/ulap2.png");
            game.load.image("bg4","assets/puno2.png");
            game.load.image("bg5","assets/daan4.png");


            game.load.image("platform","assets/platform.png");
            game.load.image("plaka", 'assets/plaka.png');
            game.load.image("hole","assets/hole.png");
            game.load.image("hole1","assets/butas.png");
            game.load.image("stick","assets/stick.png");
            game.load.image("level4", 'assets/level4.png');
            game.load.image("door", 'assets/door2.png',process.start3);
            //game.load.image("bg", 'assets/sky.png');
            game.load.image("btn","assets/buttonLeft.png");
            game.load.image("btn1","assets/buttonRight.png");
            game.load.image("restart", "assets/restart.png");
            game.load.spritesheet("button1","assets/btnpause.png",200,100);
            game.load.spritesheet("player2","assets/player2.png",459,929);
            game.load.spritesheet("taya","assets/tayasprite.png",300,600);
            game.load.spritesheet("explode","assets/ex2.png",70,70);
            //game.load.audio("bgMusic", 'music/tsatoMusic.mp3');

            

},
 create: function() {
            game.physics.startSystem(Phaser.Physics.ARCADE);
            game.stage.backgroundColor = "#ddd";
            //game.world.setBounds(0,0,bounds,0);

            bg1 = game.add.tileSprite(0,
            	(game.height - game.cache.getImage("bg1").height)-400,
            	game.width,
            	game.cache.getImage("bg1").height,
            	'bg1');

            bg2 = game.add.tileSprite(0,
            	(game.height - game.cache.getImage("bg2").height)-400,
            	game.width,
            	game.cache.getImage("bg2").height,
            	'bg2');

            bg3 = game.add.tileSprite(0,
            	(game.height - game.cache.getImage("bg3").height)-550,
            	game.width,
            	game.cache.getImage("bg3").height,
            	'bg3');

            bg4 = game.add.tileSprite(0,
            	(game.height - game.cache.getImage("bg4").height)-400,
            	game.width,
            	game.cache.getImage("bg4").height,
            	'bg4');

            bg5 = game.add.tileSprite(0,
            	(game.height - game.cache.getImage("bg5").height)-.10,
            	game.width,
            	game.cache.getImage("bg5").height,
            	'bg5');


            bg = game.add.sprite(-9,0,"bg");
            bg.scale.x=.31;
            bg.scale.y=.35;
            hole = game.add.sprite(50,230,"hole");
            hole.scale.x=.09;
            hole.scale.y=.09;
            hole1 = game.add.sprite(3,240,"hole1");
            hole1.scale.x=.1;
            hole1.scale.y=.1;
            player = game.add.sprite(0,470,"player2");
        	player.scale.x = .12;
        	player.scale.y = .15;
            platform = game.add.sprite(0,610,"platform");
            //bgAudio = game.add.audio("bgMusic");
            //bgAudio.play();
            //process.audio(15000);

            btn = game.add.button(280,180,"door",process.start3);
            btn.fixedToCamera = true;

            text = game.add.image(180,10, "level4");
            text.fixedToCamera = true;

            taya = game.add.sprite(500,120,"taya");
            taya.animations.add('stay',[0,1,2,3,4], 5, true);
            taya.scale.x = .20;
        	taya.scale.y = .20;

            player.animations.add('walk-right',[4,5,6,7],7,true);
            player.animations.add('walk-left',[8,9,10,11],7,true);

            process.createPlakas(3500);
            plaka = game.add.group();
            plaka.enableBody = true;


            process.createSticks(4000);
            stick = game.add.group();
            stick.enableBody = true;
            //stick.animations.add('falling',[0,1,2], 3, true);

            //game.add.sprite(0, 0, 'sky'); 

             keyboard = game.input.keyboard.createCursorKeys();

             btn = game.add.button(160,0,"btn",process.walkLeft);
             btn.scale.x = -5;
             btn.scale.y = 23;
             btn1 = game.add.button(190,300,"btn1",process.walkRight);
             btn1.scale.x = 9;
             btn1.scale.y = 10;
             button1 = game.add.button(248,1,"button1",process.pause, this,1,0);
             button1.scale.x = .8;
             button1.scale.y = .8;
             btn = game.add.button(290,90,"restart",process.restart);
             btn.fixedToCamera = true;
             btn.scale.x = .2;
             btn.scale.y = .2;

            game.physics.arcade.enable(platform);
            platform.body.immovable = true;
            platform.scale.x = 2;

            game.physics.arcade.enable(player);
            player.body.collideWorldBounds = true;
            player.body.gravity.y = 0;
            player.body.gravity.x = 0;

            game.physics.arcade.enable(taya);
            taya.body.collideWorldBounds = true;

            scoreText = game.add.text(10,8,"Score: 0/140",{fill:"gray", font:'25px Cooper Black', stroke: 'black', strokeThickness:4});
            bestText = game.add.text(10,35,"Best: "+process.getData() ,{fill:"black", font:'25px Cooper Black', stroke: 'white', strokeThickness:2});
            gameOverText = game.add.text((w/2)-120,210, "",{font:'33px Snap ITC', stroke: 'red', strokeThickness:4});
            livesText = game.add.text(10,60, "Lives: 5",{fill:"brown",font:'25px Cooper Black', stroke: 'black', strokeThickness:4});
            livesText.scale.x=.9;
            livesText.scale.y=.9;

        
},
update: function() {
	       game.physics.arcade.collide(player,platform);
           game.physics.arcade.overlap(player,stick,process.killStick);
           game.physics.arcade.overlap(stick,platform,process.killPlayer);


	        taya.animations.play("stay");
	        taya.body.velocity.x = 74;
	        taya.body.velocity.x = -74;
	        taya.body.bounce.x = 0.2;

            if(keyboard.left.isDown){
                player.animations.play("walk-left");
                player.body.velocity.x = -800;
                bg1.tilePosition.x += 0.3;
                bg2.tilePosition.x += 0.6;
                bg3.tilePosition.x += 0.9;
                bg4.tilePosition.x += 0.8; 
                bg5.tilePosition.x += 0.6;   
            }
            else if(keyboard.right.isDown){    
                player.animations.play("walk-right");
                player.body.velocity.x = 800;
                bg1.tilePosition.x -= 0.3;
                bg2.tilePosition.x -= 0.6;
                bg3.tilePosition.x -= 0.9;
                bg4.tilePosition.x -= 0.8;
                bg5.tilePosition.x -= 0.6;
            }
            else{
                player.body.velocity.x = 0;
                player.animations.stop();
            }
},
};
game.state.add("Game3" ,Game3, false);