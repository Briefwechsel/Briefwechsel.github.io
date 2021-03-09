

let img;
  let currentBriefmarkPos;
  let maxBriefmarke = 13;
function preload() {
  possible_briefmarke_images = ["media/stamps/stamp1.png", "media/stamps/stamp2.png", "media/stamps/stamp3.png", "media/stamps/stamp4.png", "media/stamps/stamp5.png", "media/stamps/stamp6.png", "media/stamps/stamp7.png", "media/stamps/stamp8.png", "media/stamps/stamp9.png", "media/stamps/stamp10.png", "media/stamps/stamp11.png", "media/stamps/stamp11.2.png", "media/stamps/stamp12.png"];
}

  function setup() {
    pixelDensity(3.0);
    createCanvas(windowWidth, windowHeight);
    imageMode (CENTER);
    currentBriefmarkPos = 0;
  }


  function drawImage(img){
    img.resize(550, 0)

  var w = img.width, h = img.height;
  w /= 4; h /= 4;
  img.width = w; img.height = h;
    image(img, mouseX, mouseY)
  }


function mouseClicked() {
  //currentBriefmarkPos = 0;
  currentBriefmarkPos++;
      if (currentBriefmarkPos == possible_briefmarke_images.length)
      currentBriefmarkPos = 0;
  
  //for (let currentBriefmarkPos = 0; currentBriefmarkPos < possible_briefmarke_images.length; currentBriefmarkPos++) { 
    loadImage(possible_briefmarke_images[currentBriefmarkPos], drawImage);
  
}
