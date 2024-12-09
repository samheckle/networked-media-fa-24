// variable that holds all of the sketch data
let mySketch = (s) => {
  s.setup = () => {
    s.createCanvas(window.innerWidth, window.innerHeight)

    s.background(147, 116, 219, 255)
  }

  s.draw = () =>{
    let d = document.getElementById('sketch1')
    // console.log(d.clientWidth)
    s.fill(194, 175, 237, 255)
    s.noStroke()
    s.rectMode(s.CENTER)
    s.rect(s.width/2, s.height/2, 50)
    // console.log('test')
    s.fill('black')
    s.circle(s.width/2, s.height/2, 20)
  }

  s.mouseDragged = () => {
    s.fill('cyan')
    s.rect(s.mouseX, s.mouseY, 50)
  }

  s.windowResized = () =>{
    s.resizeCanvas(window.innerWidth, window.innerHeight)
  }
}

let mySketch2 = (s) => {
  s.setup = () => {
    s.createCanvas(400, 400)
    s.background(42, 96, 245, 200)
    s.fill(111, 146, 242, 150)
    s.noStroke()
    s.rectMode(s.CENTER)
    s.rect(s.width/2, s.height/2, 50)
    console.log('test')
    s.fill('black')
    s.circle(s.width/2, s.height/2, 20)
  }
  s.mouseDragged = () => {
    s.fill('pink')
    console.log('drag canvas')
    s.circle(s.mouseX, s.mouseY, 50)
  }
}

// function setup() {
//   // createCanvas(window.innerWidth, window.innerHeight);
//   createCanvas(400, 400)
//   background(147, 116, 219, 255);
  
//   fill(194, 175, 237, 255)
//   noStroke()
//   rectMode(CENTER)
//   rect(width/2, height/2, 50)
//   console.log('test')
//   fill('black')
//   circle(width/2, height/2, 20)
// }

let p5Sketch1 = new p5(mySketch, 'sketch1')
let p5Sketch2 = new p5(mySketch2, 'sketch2')
