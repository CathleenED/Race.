class Game {
  constructor(){}
  
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
      var playerCountref=await database.ref("playerCount").once ("value")
  if (playerCountref.exists()){
    playerCount=playerCountref.val()
    player.getCount();
  }
    
      form = new Form()
      form.display();
    }
    car1=createSprite(100,200)
    car1.addImage(car1Image)

    car2=createSprite(300,200)
    car2.addImage(car2Image)

    car3=createSprite(500,200)
    car3.addImage(car3Image)

    car4=createSprite(700,200)
    car4.addImage(car4Image)
    
    cars=[car1,car2,car3,car4]
  }
  play(){
form.hide()
textSize(30);
text("Game started.",120,100);
Player.getPlayerInfo()  
if (allPlayers !== undefined){
  background(75,75,75)
  image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
 // var displayPosition=130
  var index=0
  var x=200
  var y
 for (var plr in allPlayers){
   /* if (plr=="player"+player.index)
    fill ("Red")
    else 
    fill ("black")
  
  displayPosition+=20

  textSize(20)
  text (allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition) 
 */
 index= index+1
 x=x+200
 y= displayHeight-allPlayers[plr].distance
 cars[index-1].x=x
 cars[index-1].y=y
 if (index===player.index){
   cars[index-1].shapeColor="red"
  camera.position.x=displayWidth/2
  camera.position.y=cars[index-1].y
 }
}



}
if (keyDown(UP_ARROW) && player.index !== null){
  player.distance+=50
  player.update()
}
if (player.distance > 2800){
  gameState=2
}
drawSprites();
}
end(){
  alert("Game ended.")
}
}
