function getInputValue(inputFieldId){
    const inputField=document.getElementById(inputFieldId);
    const inputValue=parseFloat(inputField.value);
    return inputValue;
}

function setInnerText(elementId, area){
    const element=document.getElementById(elementId);
    element.innerText=area;
}

function calculateTriangleArea(){
    const b=getInputValue('tb');
    const h=getInputValue('th');
    const area=0.5*b*h;
    setInnerText('tarea', area);
}

function calculateRectangleArea(){
    const w=getInputValue('rw');
    const l=getInputValue('rl');
    const area=w*l;
    setInnerText('rarea', area);
}

// function calculateTriangleArea(){
//     const ParallelogramBaseInput=document.getElementById('pb');
//     const ParallelogramHeightInput=document.getElementById('ph');
//     const b=parseFloat(ParallelogramBaseInput.value);
//     const h=parseFloat(ParallelogramHeightInput.value);
//     const area=0.5*b*h;
// }

function calculateParallelogramArea(){
    const b=getInputValue('pb');
    const h=getInputValue('ph');
    const area=b*h;
    setInnerText('parea', area);
}

function calculateRhombusArea(){
    const d1=getInputValue('rd1');
    const d2=getInputValue('rd2');
    const area=0.5*d1*d2;
    setInnerText('rharea', area);
}
function calculatePentagonArea(){
    const p=getInputValue('pep');
    const b=getInputValue('peb');
    const area=0.5*p*b;
    setInnerText('pearea', area);
}
function calculateEllipseArea(){
    const a=getInputValue('ea');
    const b=getInputValue('eb');
    const area=Math.PI*a*b;
    setInnerText('earea', area);
}
