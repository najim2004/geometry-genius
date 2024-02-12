function calculateTriangleArea(){
    const triangleBaseInput=document.getElementById('tb');
    const triangleHeightInput=document.getElementById('th');
    const b=parseFloat(triangleBaseInput.value);
    const h=parseFloat(triangleHeightInput.value);
    const area=0.5*b*h;
}

function calculateRectangleArea(){
    const rectangleWidthInput=document.getElementById('rw');
    const rectangleLengthInput=document.getElementById('rl');
    const w=parseFloat(rectangleWidthInput.value);
    const l=parseFloat(rectangleLengthInput.value);
    const area=w*l;
}
