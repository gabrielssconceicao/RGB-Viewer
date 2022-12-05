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

inputR.addEventListener('input', ()=>{
    viewer.style.background = `rgb(${inputR.value},${inputG.value},${inputB.value})`
    inputR.nextElementSibling.innerHTML = inputR.value;

    hexdec.innerHTML = `#${hex(inputR.value)}${hex(inputG.value)}${hex(inputB.value)}`;
    rgb.innerHTML = `${inputR.value},${inputG.value},${inputB.value}`;
});

inputG.addEventListener('input', ()=>{
    viewer.style.background = `rgb(${inputR.value},${inputG.value},${inputB.value})`;
    inputG.nextElementSibling.innerHTML = inputG.value;

    hexdec.innerHTML = `#${hex(inputR.value)}${hex(inputG.value)}${hex(inputB.value)}`;
    rgb.innerHTML = `${inputR.value},${inputG.value},${inputB.value}`;
});

inputB.addEventListener('input', ()=>{
    viewer.style.background = `rgb(${inputR.value},${inputG.value},${inputB.value})`;
    inputB.nextElementSibling.innerHTML = inputB.value;

    hexdec.innerHTML = `#${hex(inputR.value)}${hex(inputG.value)}${hex(inputB.value)}`;
    rgb.innerHTML = `${inputR.value},${inputG.value},${inputB.value}`;
});


button.addEventListener('click', ()=>{
    navigator.clipboard.writeText( `rgb(${inputR.value},${inputG.value},${inputB.value})`);

    hexdec.innerHTML = `#${hex(inputR.value)}${hex(inputG.value)}${hex(inputB.value)}`
}) 

hexdec.innerHTML = `#${hex(inputR.value)}${hex(inputG.value)}${hex(inputB.value)}`
rgb.innerHTML = `${inputR.value},${inputG.value},${inputB.value}`;