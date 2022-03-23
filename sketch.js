let tempText = true;

//quicksand dash font
let qsd;
let qsb;

//arrays for words, faces, memes, and sounds
let words = ["Is this your meme?", "No?", "How about now?", "Ya feeling this meme?", "Like this meme?", "Hilarious.", "*Laughing on the inside*", "This one's pretty good.", "Do not like it?", "Click for another!", "So how's your day?", "HAHAHAHAHAHAHA!", "owo", "uwu", ">w>", ":P", ":D", "IwI", "ouo", "^u^", "Memes to cleanse the soul", "It's meme time!", "Memes are a cure for sadness", "Pizza time?"];

let sounds = [];
let faces = [];
let memes = [];

//button creation
let button;

let img;
function preload() {
  //set up fonts
  qsd = loadFont("Quicksand_Dash.otf");
  qsb = loadFont("Quicksand-Bold.otf");

  //set up images
  let trollFace = loadImage("troll-face-meme-595.jpg");
  let dogMeme = loadImage("internetdog.jpeg");
  let cryingNo = loadImage("I_are_crying_cuz_I_no_understand_ze_zoke.jpg");
  let databaseJoke = loadImage("4834015.jpg");
  let blowDry = loadImage(
    "funny-memes-person-wtf-is-he-blow-drying-his-thoughts.jpeg"
  );
  let goat = loadImage("goat-meme-with-a-grass-craving-goat.jpeg");
  let notAmused = loadImage("images.jpeg");
  let motherGod = loadImage("mother-of-god-meme-589.jpg");
  let angryFace = loadImage("1317604469.png"); 
  let choices = loadImage("16210376438_087808e535.jpg");
  let socialDistance = loadImage("physical-distancing-champion-covid-19-meme-07789f-640.jpg");
  let taxes = loadImage('Popular_"Taxation_is_Theft"_meme..png');
  let hmmm = loadImage('Unknown.png');
  let catMeme = loadImage('Cat_Meme.jpg');

  memes = [trollFace, dogMeme, cryingNo, databaseJoke, blowDry, goat, notAmused, motherGod, angryFace, choices, socialDistance, taxes, hmmm, catMeme];

  //program doesn't run if I kept it at 6 different sounds (might be an overloading issue?)
  //set up sounds
  sounds.push(loadSound("Duck.mp3"));
  sounds.push(loadSound("Flop.mp3"));
  sounds.push(loadSound("Slap.mp3"));
  // sounds.push(loadSound("Duck Squeak.mp3"));
  // sounds.push(loadSound("Throw.mp3"));
  // sounds.push(loadSound("Squeak.mp3"));
  
  let face1 = loadImage('randomizer.png');
  let face2 = loadImage('randomizer 1.png');
  let face3 = loadImage('randomizer 2.png');
  let face4 = loadImage('randomizer 3.png');
  let face5 = loadImage('randomizer 4.png');
  let face6 = loadImage('randomizer 5.png');
  
  faces = [face1, face2, face3, face4, face5, face6];
}

function setup() {
  createCanvas(600, 600);
  background(220);
  
  let button = createButton("Click for meme!");
  button.style('color', 'rgb(0,150,200)');
  button.style('backgroundColor', 'rgb(0,255,0)');
  button.style('borderColor', 'rgb(250,255,0)');
  button.style('fontSize', 'large');
  button.position(235, 500);
}

function draw() {
  textSize(70);
  fill(0);
  textAlign(CENTER, CENTER);
  textFont(qsb);
  if(tempText){
    text("IT'S MEME TIME!!!", 295, 300);
  }
  titleText();
}

function mousePressed() {
  background(color(random(150, 255), random(150, 255), random(150, 255)));
  //sets random pic generator
  tempText = false;
  fill("#ffffff");
  square(125, 125, 350, 20);
  imageMode(CENTER);
  let randomImg = random(memes);
  randomImg.resize(300, 300);
  image(randomImg, width / 2, height / 2);
  
  //random sound
  let randomSound = random(sounds);
  randomSound.play();
  
  //random face & words
  randomFace();
  wordRandom();
}

function wordRandom() {
  //random phrase generator
  let word = random(words);
  textSize(30);
  fill(0);
  textFont(qsb);
  textAlign(CENTER);
  text(word, random(200, 400), random(50, 500));
}

function randomFace() {
  let randface = random(faces);
  // randface.resize(300, 300);
  image(randface, random(100, 500), random(50, 600));
}

function titleText() {
  textSize(40);
  fill(0);
  textAlign(CENTER);
  textFont(qsd);
  text("What do you meme?", 300, 40);
}
