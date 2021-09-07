class Game{

constructor(){}


getState(){
var gameStateref=database.ref('gameState')
gameStateref.on("value",function(data)
{
    gameState=data.val()
})
}

update(state){
database.ref('/').update({
    gameState:state
})
}


async start(){
    
    
if(gameState===0){
    player= new Player()
    var playerCountref=await database.ref('playerCount').once("value")
    if(playerCountref.exists()){
        playerCount=playerCountref.val();
        player.getCount();
    }
  form= new Form()
    form.display()}

        tank1=createSprite(900,250,50,50)
        tank1.addImage(tank1_img);
        tank1.scale=0.3;
        tank2=createSprite(100,250,50,50)
        tank2.addImage(tank2_img);
        tank2.scale=1.2;
    }

play(){
    form.hide()
    Player.getPlayerInfo()
}



end(){
    console.log("End");
}













}