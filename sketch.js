var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var ground,track;
var cars, car1, car2, car3, car4,car5;

function preload(){
  track=loadImage("track.jpg")
  cars1=loadImage("g.png")
  
  cars2=loadImage("a.png")
 
  cars3=loadImage("c.png")
  
  cars4=loadImage("cu.png")
 
cars5=loadImage("m.png")


ground=loadImage("ground.png")


}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 1){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

if(gameState===2){
  game.end()
}

}
