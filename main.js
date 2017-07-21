const canvasDiv = document.getElementById('canvasDiv');
canvas = document.createElement('canvas');
canvas.setAttribute('width', 1000);
canvas.setAttribute('height', 1000);
canvas.setAttribute('id', 'canvas');
canvasDiv.appendChild(canvas);
if(typeof G_vmlCanvasManager != 'undefined') {
	canvas = G_vmlCanvasManager.initElement(canvas);
}
ctx = canvas.getContext("2d");

const colorPurple = "#cb3594";
const colorGreen = "#659b41";
const colorYellow = "#ffcf33";
const colorBrown = "#986928";

let curColor= colorGreen
const clickColor = new Array()

$('#canvas').mousedown(function(e) {
  let mouseX = e.pageX - this.offsetLeft
  let mouseY = e.pageY - this.offsetTop

  paint = true
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop)
  redraw()
})
$('#canvas').mousemove(function(e) {
  if (paint) {
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true)
    redraw()
  }
})
$('#canvas').mouseup(function(e) {
  paint = false
})
$('#canvas').mouseleave(function(e) {
  paint = false
})
let clickX = new Array()
let clickY = new Array()
let clickDrag = new Array()
let paint

function addClick(x, y, dragging) {
  clickX.push(x)
  clickY.push(y)
  clickDrag.push(dragging)
  clickColor.push(curColor)
}

function redraw() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height) //clears canvas
  ctx.linejoin = 'round'
  ctx.lineWidth = 5

  for (let i=0; i<clickX.length; i++) {
    ctx.beginPath()
    if(clickDrag[i] && i){
      ctx.moveTo(clickX[i-1], clickY[i-1])
    }else{
      ctx.moveTo(clickX[i]-1, clickY[i])
    }
    ctx.lineTo(clickX[i], clickY[i])
    ctx.closePath()
    ctx.strokeStyle = clickColor[i]
    ctx.stroke()
  }
}
