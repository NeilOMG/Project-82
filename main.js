var mouseEvent = "";
var radius="" ;
var color= "";
var width= "";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


canvas.addEventListener("mousedown", mouseDown)
function mouseDown(){

mouseEvent="mouseDown"
radius= document.getElementById("radius").value;
 color= document.getElementById("color").value;
 width= document.getElementById("Width_of_line").value;
} 

canvas.addEventListener("mouseup", mouseUp)
function mouseUp(){

mouseEvent="mouseUp"
} 

canvas.addEventListener("mouseleave",mouseLeave)
function mouseLeave(){

mouseEvent="mouseLeave"
} 

canvas.addEventListener("mousemove", mouseMove);
function mouseMove(e){

    cp_of_x= e.clientX - canvas.offsetLeft
    cp_of_y= e.clientY - canvas.offsetTop

    if(mouseEvent=="mouseDown"){

   ctx.beginPath();
   ctx.strokeStyle=color;
   ctx.lineWidth=width;
   ctx.arc(cp_of_x,cp_of_y,radius,0,2*Math.PI);
   ctx.stroke();

    }

   


    
}
 