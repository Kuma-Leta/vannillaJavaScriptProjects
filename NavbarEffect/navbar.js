const navbarElement=document.querySelectorAll('.navbar-element')
const first =document.querySelector('.first');
const second=document.querySelector('.second');
const third=document.querySelector('.third');
const fourth=document.querySelector('.fourth');
navbarElement.forEach((element)=>{
    element.addEventListener('mouseover',function(e){
        if(e.target.className=="cat"){
            first.classList.add("fir")
            second.classList.remove("sec")
        } 
        else if(e.target.className=='birabiro'){
            first.classList.remove("fir")
            second.classList.add("sec")
            third.classList.remove("thir")
        }
        else if(e.target.className=="birds"){
            second.classList.remove('sec')
            third.classList.add("thir")
            fourth.classList.remove("four")
        }
        else {
            if(e.target.className="ducks"){
                third.classList.remove('thir')
                fourth.classList.add("four") 
            }
        }
    })
})
