//selecting canvas element from HTML code
//Object c provides methods and properties for drawing on the canvas
var drawingCanvas = document.getElementById('drawing_board');
var cdraw = drawingCanvas.getContext('2d');

//drawing tool ---> circle created as mouse hovers
function Circle (x, y, color, radius){
  this.color = color;
  this.radius = radius;
  this.x = x;
  this.y = y;

  this.draw = function(){
    cdraw.beginPath();
    cdraw.arc(this.x, this.y,this.radius, 0 , Math.PI * 2, false);
    cdraw.fillStyle = this.color;
    cdraw.fill();
  }
}

//setting width and height of the drawing canvas
drawingCanvas.width = 700;
drawingCanvas.height = 400;
// drawingCanvas.translate(500, 500);

drawingCanvas.addEventListener('mousemove', function(event) {
  if(click == 1)
    return new Circle(event.offsetX, event.offsetY , "#D05237", 5).draw();
});


//clearing the canvas

document.getElementById("btn").onclick = function (){
  cdraw.clearRect(0,0,drawingCanvas.width, drawingCanvas.height);
};
