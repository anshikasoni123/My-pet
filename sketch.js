//Create variables here
var dog, database;
var foodStock;
var dog1, dog2;

function preload()
{
	//load images here
  dog1 = loadImage("images/dogImg.png");
  dog2 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(800, 700);

  dog = createSprite(400, 600, 50, 50);
  dog.addImage(dog1);
  dog.scale = 0.2;

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  foodStock.set(20);
}


function draw() {  

  background("green");

  drawSprites();

  if(keyDown(UP_ARROW))
  {
    writeStock(foodS);
    dog.addImage(dog2);
  }

  if(keyWentUp(UP_ARROW))
  {
    dog.addImage(dog1);
  }

  if(foodS === 0)
  {
    foodS = 20;
  }
  //add styles here

  textSize(20);
  fill("red");
  text("Food Remaining = " + foodS, 300, 350)
  text("Note : Press UP_ARROW Key To Feed Drago Milk!", 170, 50)
}

function writeStock(x)
{
   if(x < 0)
   {
     x = 0;
   }

   else
   {
     x = x - 1
   }

   database.ref('/').set({

    Food : x

   })
}

function readStock(data)
{
   foodS = data.val()
}