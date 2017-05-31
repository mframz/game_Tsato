var Menu = {

    preload : function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.pageAlignHorizontally = true;
            game.scale.pageAlignVertically = true;
            game.stage.backgroundColor = 'blue'; 
        // Loading images is required so that later on we can create sprites based on the them.
        // The first argument is how our image will be refered to, 
        // the second one is the path to our file.
        game.load.image('start', 'assets/playbtn.png');
        game.load.image('menu', 'assets/background.png');
    },

    create: function () {
        // Add a sprite to your game, here the sprite will be the game's logo
        // Parameters are : X , Y , image name (see above) 
        menu = game.add.sprite(-9,0,"menu");
            menu.scale.x=.31;
            menu.scale.y=.35;
        //this.add.sprite(100, 220, 'menu');
             this.add.button(100, 220, 'start', this.startGame, this);
    },

    startGame: function () {

        // Change the state to the actual game.
        this.state.start('Game');

    }


};