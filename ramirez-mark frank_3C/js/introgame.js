
var w = 360, h = 620;
var basicGame;
var bgAudio;
var game;
var platform, platforms;
var bg1, bg2, bg3, bg4, bg5, stick, sticks, scoreText, bestText, gameOverText, pauseText;
var btn, btn1;
var player2;
var score = 0;
var lives = 5;
var player, keyboard;
var start;
var soundeffects;
var explode;
var plaka,card;
game = new Phaser.Game(w, h, Phaser.CANVAS, '');

game.state.add('Menu', Menu);

/*// Adding the Game state.
game.state.add('Game', Game);*/

game.state.start('Menu');
/*var basicGame = function(){
}
*/
game.state.add('Game');
game.state.add('Game1');
game.state.add('Game2');
game.state.add('Game3');
game.state.add('Game4');
game.state.add('Game5');
game.state.add('Game6');
game.state.add('Game7');
game.state.add('Game8');
game.state.add('Game9');


/*var basicGame = function(){
}

*/