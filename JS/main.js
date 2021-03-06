// JS p5 Game 
// by Victor Sonntag
//
console.log('hello')
const game = new Game();

function preload() {
  game.preload()
}

function setup() {

  let canvas = createCanvas(800, 600)
  // center the canvas
  const x = (windowWidth - width) / 2;
  const y = (windowHeight - height) / 2;
  canvas.position(x, y);
  game.setup()
  this.frameRate()
}

function draw() {

  game.draw()
  game.collision()

}
function mousePressed() {
  game.imageIndex++
  for (let i = game.targets.length - 1; i >= 0; i--) {

if (dist(game.targets[i].x, game.targets[i].y, mouseX - 30, mouseY - 30) < 40) {
      game.score++
      game.targets[i].image = game.scoredTargetImage[Math.floor(Math.random() * game.scoredTargetImage.length)].src
      this.increment = 0
      game.sounds.play()
      this.increment += 1
    }
  }
}