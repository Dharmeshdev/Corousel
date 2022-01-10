const prev = document.getElementById('prev')
const next = document.getElementById('next')
let slides = document.getElementsByClassName('corousel-item')
let slidePosition = 0;
let totalSlide = slides.length

prev.addEventListener('click', () =>{
    moveToPrevSlide()
})

next.addEventListener('click', () =>{
    moveToNextSlide()
})

function hideAllSlides(){
    for(slide of slides){
    slide.classList.remove('corousel-item-visible')
    slide.classList.add('corousel-item-hidden')
    }
}


function moveToNextSlide(){
    hideAllSlides()

        if(slidePosition === totalSlide -1){       
            slidePosition = 0
        }
        else{
            slidePosition++;
        }
    slides[slidePosition].classList.add('corousel-item-visible');

}


function moveToPrevSlide(){
   hideAllSlides()
   
   if(slidePosition === 0){
        slidePosition = totalSlide -1
   }
   else{
       slidePosition--;
   }
   slides[slidePosition].classList.add('corousel-item-visible');
}

let whichSlide = document.getElementById('which-slide')

whichSlide.innerHTML = `You are on ${slidePosition }`

