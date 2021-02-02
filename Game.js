class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
   
      
    car1 = createSprite(900,500);
    car1.addImage(cars1)
    car2 = createSprite(600,500);
    car2.addImage(cars2)
    car3 = createSprite(600,500);
    car3.addImage(cars3)
    car4 = createSprite(700,500);
    car4.addImage(cars4)
    
    car5 = createSprite(700,100);
    car5.addImage(cars5)
    
    cars = [car1, car2, car3, car4];
  }

  play(){
    form.hide();
    player.getCarsAtEnd()
    if(keyIsDown(UP_ARROW)){

      car5.y = car5.y-5;
    }
    
    if(keyIsDown(DOWN_ARROW)){
      car5.y = car5.y+5;
    }
    
    if(keyIsDown(LEFT_ARROW)){

      car5.x = car5.x-5;
    }
    
    if(keyIsDown(RIGHT_ARROW)){
      car5. x= car5.x+5;
    }

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      //var display_position = 100;
      //background(181,22,87)
      image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x ;
      var y;

      for(var plr in cars){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - cars[plr].distance;
        

        if (index === player.index){
          //fill("red")
          //stroke("white")
         // ellipse(x,y,60,60)
         // cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(keyIsDown(DOWN_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }



if(player.distance>10000){
gameState=2;
player.rank+=1
Player.updateCarsAtEnd(player.rank)
}

    drawSprites();
  }
  end(){
    console.log("gameEnded")
    console.log(player.rank)
  }
}
