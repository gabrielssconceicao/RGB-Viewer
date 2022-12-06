//const hex = num=> parseInt(num).toString(16);

function hex(num){
    let hex = parseInt(num).toString(16);
    
    hex = hex.length == 1 ? `0${hex}` : hex;
    return hex;
}


const input = document.querySelectorAll('input');
const [inputR, inputG, inputB] = input;
const hexdec = document.querySelector('#hex');
const rgb = document.querySelector('#rgb');;
const viewer = document.querySelector('#viewer');
const button = document.querySelector('button');

const rgbCode = () =>  `${inputR.value},${inputG.value},${inputB.value}`;

const hexCode = ()=> `#${hex(inputR.value)}${hex(inputG.value)}${hex(inputB.value)}`;

inputR.addEventListener('input', ()=>{
    viewer.style.background = `rgb(${rgbCode()})`;
    inputR.nextElementSibling.innerHTML = inputR.value;
    hexdec.innerHTML = hexCode();
    rgb.innerHTML = rgbCode();
});

inputG.addEventListener('input', ()=>{
    viewer.style.background = `rgb(${rgbCode()})`;
    inputG.nextElementSibling.innerHTML = inputG.value;

    hexdec.innerHTML = hexCode();
    rgb.innerHTML = rgbCode();;
});

inputB.addEventListener('input', ()=>{
    viewer.style.background = `rgb(${rgbCode()})`;
    inputB.nextElementSibling.innerHTML = inputB.value;

    hexdec.innerHTML =  hexCode();
    rgb.innerHTML = rgbCode();;
});
 

hexdec.innerHTML = hexCode();
rgb.innerHTML = rgbCode();