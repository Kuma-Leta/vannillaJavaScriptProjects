const btn =document.querySelector('button')
const body=document.querySelector('body')
const paragraph=document.querySelector('.para')
btn.addEventListener('click',function(){
body.style.backgroundColor = `rgb(${Math.random() * 255},${
  Math.random() * 255
},${Math.random() * 255})`;
paragraph.innerHTML = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
  Math.random() * 255
)},${Math.floor(Math.random() * 255)}})`;
})