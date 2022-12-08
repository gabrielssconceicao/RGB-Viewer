function hex(num){
    let hex = parseInt(num).toString(16);
    
    hex = hex.length == 1 ? `0${hex}` : hex;
    return hex;
}

const input = document.querySelectorAll('input');
const hexdec = document.querySelector('#hex');
const rgb = document.querySelector('#rgb');;
const viewer = document.querySelector('#viewer');
const button = document.querySelector('button');

const rgbCode = () =>  `${input[0].value},${input[1].value},${input[2].value}`;

const hexCode = ()=> `#${hex(input[0].value)}${hex(input[1].value)}${hex(input[2].value)}`;

input.forEach(el => el.addEventListener('input', ()=>{
    el.nextElementSibling.innerHTML = el.value;

    viewer.style.background = `rgb(${rgbCode()})`;
    hexdec.innerHTML = hexCode();
    rgb.innerHTML = rgbCode();
}))


hexdec.innerHTML = hexCode();
rgb.innerHTML = rgbCode();