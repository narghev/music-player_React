let canvas;
let ctx;
let canvasW;
let canvasH;
let depthDirection = 1;
let firstTime = true;

const initCanvas = () => {
  canvas = document.getElementById('backgroundWaves');
  ctx = canvas.getContext('2d');
  ctx.strokeStyle = '#bb1919';
  canvasH = canvas.height;
  canvasW = canvas.width;
  if (firstTime){
    ctxClearInterval = setInterval(()=>{
      ctx.clearRect(0,0,canvasW, canvasH);
    },50);
    depthChangeInterval = setInterval(()=>{
      depthDirection *= -1;
    },15000);
    firstTime = false;
  }
}

const drawOnCanvas = (depth) => {
  initCanvas();
  depth *= 5*depthDirection;
  ctx.beginPath();
  ctx.moveTo(0, canvasH/2);
  ctx.bezierCurveTo(canvasW/8, (canvasH/2)-depth, 3*canvasW/8, (canvasH/2)+depth, 4*canvasW/8, canvasH/2);
  ctx.bezierCurveTo(5*canvasW/8, (canvasH/2)-depth, 7*canvasW/8, (canvasH/2)+depth, canvasW, canvasH/2);
  ctx.stroke();
  ctx.closePath();
}
