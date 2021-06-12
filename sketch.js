//Create variables here
var dog,happyDog,database,foodS,foodStock;
foodS = 20;
function preload()
{
	//load images here
dogImg = loadImage("images/dogImg.png");
dogHappy = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
    console.log(database);
	createCanvas(700, 700);
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
 dog =  createSprite(350,350,50,50);
 dog.addImage(dogImg); 
 dog.scale = 0.5;
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dogHappy);

}

  drawSprites();
  //add styles here
  strokeWeight(5)
stroke("black")
  textSize(20)
  fill("blue");
text("Note: Press UP_ARROW Key to feed Drago Milk",20,40)
text("Food remaining : " + foodS,250,100);
}

function readStock(data){

foodS = data.val();

}

function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x = x-1
  }
  
database.ref('/').update({
  Food: x
})

}

