const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height= 700;

ctx.strokeStyle = '##2c2c2c';
ctx.lineWidth = 2.5;


let painting = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}


function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    }else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

/*Painting의 값은 계속 변화게 설정되어 있어. 만약 False가 들어온는 경유라면(기본적으로 default는 다 False) 경로만 계속 따라가면서 보이지 않는 선을 계속 트래킹해야해 
만약에 Painting이 True값을 받게 된다면 그 좌표를 한번 읽고 거기서 부터 Stroke를 해야하는 거야 
결국 시작이 False-그림을 그리지 않는다 이기 때문에 이렇게 반대로 뒤틀어줘야함*/

function onMouseDown(event){
    startPainting();
}

function onMouseUp(event){
    stopPainting();
}




if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

