let possible_briefmarke_images;
let img;
let currentBriefmarkPos;
function preload() {
  possible_briefmarke_images = ["media/stamps/stamp1.png", "media/stamps/stamp2.png", "media/stamps/stamp3.png", "media/stamps/stamp4.png", "media/stamps/stamp5.png", "media/stamps/stamp6.png", "media/stamps/stamp7.png", "media/stamps/stamp8.png", "media/stamps/stamp9.png", "media/stamps/stamp10.png", "media/stamps/stamp11.png", "media/stamps/stamp11.2.png", "media/stamps/stamp12.png"];
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  pixelDensity(3.0);
  imageMode (CENTER);
  currentBriefmarkPos = 0;
}

function mouseClicked() {
  printNextBriefmark();
}

function drawImage(img){
  img.resize(550, 0);
  var w = img.width, h = img.height;
  w /= 2; h /= 2;
  img.width = w; img.height = h;
  image(img, mouseX, mouseY);
}

function printNextBriefmark() {
  currentBriefmarkPos++;
  if (currentBriefmarkPos == possible_briefmarke_images.length)
    currentBriefmarkPos = 0;
  loadImage(possible_briefmarke_images[currentBriefmarkPos], drawImage);
}
