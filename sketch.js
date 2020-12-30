//Create variables here
var dog, happyDog, database, food, foodStock;
var dogImage;

function preload()
{
  //load images here
  dogImage=loadImage("images/dogImg.png");
  dogHappy=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  
  database=firebase.database();

  foodStock=database.ref('food');

  dog=createSprite(250,250,20,20);
  dog.addImage(dogImage);
  dog.scale=0.2;
}


function draw() {  

  background(46,139,87);

  drawSprites();

  if(keyDown(UP_ARROW)){
    writeStock(food);
    dog.addImage(dogHappy);
  }


  textSize(40);
  fill('pink');
  stroke();
  text("Note: Press UP_ARROW key to feed dog milk!" ,200,70);
  //add styles here

}

function readStock(){
  food=data.val();
}

function writeStock(){
  database.ref('/').update({

  })
}