const input = document.querySelectorAll('input');
const [inputR, inputG, inputB] = input;

const viewer = document.querySelector('#viewer');

inputR.addEventListener('input', ()=>{
    viewer.style.background = `rgb(${inputR.value},${inputG.value},${inputB.value})`
    inputR.nextElementSibling.innerHTML = inputR.value;
});

inputG.addEventListener('input', ()=>{
    viewer.style.background = `rgb(${inputR.value},${inputG.value},${inputB.value})`;
    inputG.nextElementSibling.innerHTML = inputG.value;
});

inputB.addEventListener('input', ()=>{
    viewer.style.background = `rgb(${inputR.value},${inputG.value},${inputB.value})`;
    inputB.nextElementSibling.innerHTML = inputB.value;
});
