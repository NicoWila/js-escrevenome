let palavra;

function setup() {
  createCanvas(400, 400);
  let palavras = ['CaJú?', 'campo', 'GALINHA!'];
  palavra = random(palavras);
}
  
function draw() {
  background("black");
  textFont("courier new", 50);
  fill("palegreen");
  textAlign(CENTER, CENTER);
  
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
let parcial = palavra.substring(0,quantidade);
text(parcial,200,200);
  if (mouseX > 395){
    text('>', 40, 250);
  }
   
  
 describe('A text prompt from a game is written in a green, monospace font on a black background.');
}