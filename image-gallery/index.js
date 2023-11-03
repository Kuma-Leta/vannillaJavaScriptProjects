const images=document.querySelectorAll('.gallery-element')
const dynamicImages=document.querySelector('.dynamic-img')
const dynamicContainer=document.querySelector('.dynamic-container')
images.forEach((element)=>{
    element.addEventListener('click',function(e){
        dynamicContainer.classList.add("dContainer")
        dynamicImages.classList.add("d-img")
        // console.log(e.target.src)
        // const elementsrc=e.target.src
      const imageAtr=element.getAttribute("alt")
       
     dynamicImages.src= `img/full/${e.target.alt}.jpg`;
        
        
    })
 
   
})
dynamicContainer.addEventListener('click',function(e){
    if(e.target.classList.contains('dContainer')){
        dynamicContainer.classList.remove("dContainer")
        dynamicImages.classList.remove('.d-img')
    }
    })

