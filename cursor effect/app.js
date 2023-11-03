const cursor=document.querySelector('.cursor');
const navlinks=document.querySelectorAll('.navlinks')
window.addEventListener('mousemove',function(e){
cursor.style.top=e.pageY + "px";
cursor.style.left=e.pageX + "px";
console.log(e)

})
navlinks.forEach((element)=>{
    element.addEventListener('mousemove',function(){
        element.classList.add('dynamic')
        cursor.classList.add('dynamicCursor')
    })
    element.addEventListener('mouseout',function(){
element.classList.remove("dynamic")
cursor.classList.remove("dynamicCursor")
    })
})
