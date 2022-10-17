//this script is for penicl logic
let body = document.querySelector('body');
let toolsContainer=document.querySelector('.toolsContainer');
let pencil = document.querySelector('div.tools > .pencil');
let clickPencil = pencil.children[0];
let colorBox = document.querySelector('.colorBox');
let color = document.querySelectorAll('.color');
let isPencilClick = false;
let canvas = document.querySelector('canvas');
let canvasTop = canvas.getBoundingClientRect().top;
let canvasLeft = canvas.getBoundingClientRect().left;
let iX, iY, fX, fY;
//let height = window.innerHeight;
//let width = window.innerWidth;
const width = canvas.clientWidth;
const height = canvas.clientHeight;

// If it's resolution does not match change it
if (canvas.width !== width || canvas.height !== height) {
  canvas.width = width;
  canvas.height = height;
}
let drawTool = canvas.getContext("2d");
let drawMode;
//pencil icon click event occurs
clickPencil.addEventListener('click',() =>  {
    isPencilClick = !isPencilClick;
    if (isPencilClick) {
        colorBox.style.display = 'inline-block';
        pencil.style.color = 'blue';
    }
});
//if color change event occurs
color.forEach(function (colorNames) {
    colorNames.addEventListener('click', () => {
        let colorType = colorNames.classList[1];
        if (colorType == 'black') drawTool.strokeStyle = 'black';
        if (colorType == 'red') drawTool.strokeStyle = 'red';
        if (colorType == 'blue') drawTool.strokeStyle = 'blue';
        if (colorType == 'green') drawTool.strokeStyle = 'green';
        if (colorType == 'pink') drawTool.strokeStyle = 'pink';
        if (colorType == 'yellow') drawTool.strokeStyle = 'yellow';
    });
});
colorBox.addEventListener('mouseleave', () =>  {
    colorBox.style.display = 'none';
})
//starting of drawing event
body.addEventListener('mousedown', function (e) {
    drawMode = true;
    iX = e.clientX - canvasLeft;
    iY = e.clientY - canvasTop;
    drawTool.beginPath();
    drawTool.moveTo(iX, iY);
})
//finished drawing event
body.addEventListener('mouseup', () => {
    drawMode = false;
})
//while drawing event is happening
body.addEventListener('mousemove', function (e) {
    if (isPencilClick == true && drawMode == true) {
        fX = e.clientX - canvasLeft;
        fY = e.clientY - canvasTop;
        drawTool.lineTo(fX, fY);
        drawTool.stroke();
        iX = fX;
        iY = fY;
    }
});
// to check if user selects other options...
toolsContainer.addEventListener('click',function(e){
    let isClick = pencil.contains(e.target);
    if (isClick == true) return;

    colorBox.style.display = 'none';
    pencil.style.color = 'black';
    isPencilClick = false;
 
});