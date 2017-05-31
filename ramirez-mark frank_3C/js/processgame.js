var process = function(){
    "use strict";
    return{

    createPlakas : function(time) {
    setInterval(function() {
    card= plaka.create(Math.random()*900,500, "plaka");
    card.body.gravity.y = 60;
    card.body.collideWorldBounds = false;
    },time);
    }, 

    createSticks: function(time){
    setInterval(function(){
    sticks = stick.create(Math.random()*w,-100,"stick");
    sticks.body.gravity.y = 150;
    sticks.body.collideWorldBounds = false;
    },time);
    },

    killStick: function(player,stick){
    score = score + 5;
    stick.kill();
    soundeffects.play();

     explode = game.add.sprite((stick.position.x),(stick.position.y+30),"explode");
    explode.animations.add('explosion',[0,1,2,3,4],5,false);
    explode.animations.play('explosion');
    setTimeout(function(){
        explode.animations.stop();
        explode.scale.x = 0;
        explode.scale.y = 0;
        explode.kill();
    },400)

    if(process.getData()<=score){
        process.saveData(score);
        bestText.text = "Best: "+score;
        console.log("x");
    }
    else{
        console.log("x");
    }

    scoreText.text = "Score: "+score;
    }, 

    killPlayer: function(stick, player){
    lives = lives + (-1);
    player.kill();

    livesText.text = "Lives: " + lives;
    if (lives == 0){
    game._paused = true;
    gameOverText.text = "Game Over \nBest: "+process.getData()+"\nScore: "+score;
    setTimeout(function(){
        //btn.frame = 0
        game._paused = false;
    }, 3000)
    game._paused = true;
    game._paused = true;
    lives = 5;
    }
    },

    saveData: function(score){
    localStorage.setItem("gameData",score);
    },

    getData: function(){
    return (localStorage.getItem("gameData") == null || localStorage.getItem("gameData") == "")?0:localStorage.getItem("gameData");
    },

    walkRight: function(){
    console.log("x");
     player.animations.play("walk-right");
    player.body.velocity.x = 3500;
    bg1.tilePosition.x += 0.3;
    bg2.tilePosition.x += 0.6; 
    bg3.tilePosition.x += 0.9;
    bg4.tilePosition.x += 0.12; 
    bg5.tilePosition.x += 0.6; 

    btn1.frame = 0;
    },
    walkLeft: function (){
    console.log("x");
     player.animations.play("walk-left");
    player.body.velocity.x = -3500;
    bg1.tilePosition.x -= 0.3;
    bg2.tilePosition.x -= 0.6; 
    bg3.tilePosition.x -= 0.9;
    bg4.tilePosition.x -= 0.12;
    bg5.tilePosition.x -= 0.6;  

    btn.frame = 0;
},
pause: function(){
    this.game.paused = true;
    var pauseText = this.add.text((w/2)-130, 250, "Game Paused\nTap to Resume",{fill:"gray", font:'35px Cooper Black', stroke: 'black', strokeThickness:4});
    this.input.onDown.add(function(){
        pauseText.destroy();
        this.game.paused = false;
    }, this);
},
restart: function(){
    game.state.start(game.state.current);
},
audio : function(time){
    setInterval(function(){
        bgAudio.play();
        },time)
},
start : function(){
    game.state.start("Game1");
    console.log("x");
},
start1 : function(){
    game.state.start("Game2");
    console.log("x");
},
start2 : function(){
    game.state.start("Game3");
    console.log("x");
},
start3 : function(){
    game.state.start("Game4");
    console.log("x");
},
start4 : function(){
    game.state.start("Game5");
    console.log("x");
},
start5 : function(){
    game.state.start("Game6");
    console.log("x");
},
start6 : function(){
    game.state.start("Game7");
    console.log("x");
},
start7 : function(){
    game.state.start("Game8");
    console.log("x");
},
start8 : function(){
    game.state.start("Game9");
    console.log("x");
},
start9 : function(){
    game.state.start("Game10");
    console.log("x");
},

}
}();
/*var process = function() {
	   "use strict";
        return {

 unpause : function(event){
        // Only act if paused
   game.paused = false;
},

 createStars : function(time) {
    setInterval(function() {
        stars= star.create(Math.random()*3000, -100, "star");
        stars.body.gravity.y = 60;
 

        stars.body.collideWorldBounds = true;
    },time);
}, 
 createAnons : function(time) {
    setInterval(function() {
        anons= anon.create(Math.random()*3000, -600, "anon");
        anons.body.gravity.y = 2000;



        anons.body.collideWorldBounds = false;
    },time);   
   
},
 collectStar : function(player, star) {
    
    // Removes the star from the screen
    star.kill();
    score += 500;

    if(process.getScore()<=score){
        process.saveScore(score);
        bestScoreText.text= "Best Game Score:  "+score;
    }
    
    scoreText.text = 'Game Score: ' + score;

},
 collectAnon : function (player, anon) {
    
    // Removes the star from the screen
    player.kill();
   setTimeout(function(){
        btn.frame = 0
        game._paused = false;
    }, 5000)
    game._paused = true;
     messageText.text = 'WASTED!\nClick Restart to Try Again\nHIGHSCORE:'+ score;
},
 saveScore : function(score){
    localStorage.setItem("gameScore",score);
},
 getScore : function(){
    return (localStorage.getItem("gameScore") == null || localStorage.getItem("gameScore") == "")?0:localStorage.getItem("gameScore");
},
 goRight : function(){
  	player.body.velocity.x = 600;
    player.animations.play('right');
 },
 goLeft : function(){
      player.body.velocity.x = -600;
        player.animations.play('left');
 },
 goJump : function(){
     player.body.velocity.y = -350;
},
stop : function(){
    game.paused = true;
},
 play : function(){
    game.paused = false;
},
restart : function(){
    game.state.start(game.state.current);
    },
}
}();*/