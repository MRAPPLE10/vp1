var database; 
var dog, sadDog, happyDog, foodS, foodStock;
var fedTime, lastFed, feed, addFood, foodObj;
function preload()
{
  sadDog = loadImage("images/dogImg1.png");
  happyDog = loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,300,150,150);
  dog.addImage(sadDog);
  dog.scale = 0.35;
  foodStock = database.ref('food');
  foodStock.on("value", readStock);
  
}


function draw() {  
background(46,139,87);
  
  //add styles here
 if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(happyDog);
 }
 
 drawSprites();
 fill(255,255,254);
 stroke("black");
 text("Food Remaining "+foodS, 180,450);
}
function readStock(data) {
  foodS = data.val();

}
function writeStock (x) {
  if(x<=0 ){
    x = 0;
  }
else{
  x = x-1;
}
database.ref('/'). update({
  food:x
})
}

