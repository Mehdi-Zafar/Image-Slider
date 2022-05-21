let slideNumber = 1;
const slide1 = document.getElementById("1");
slide1.style.display = "block"; 

const next = document.querySelectorAll("button.next");
const prev = document.querySelectorAll("button.prev");

next.forEach((el)=>{
    el.addEventListener("click",function(){
        slideNumber +=1;
        if(slideNumber > 0 && slideNumber < 5){
            const prevSlide = document.getElementById(slideNumber-1);
            const nextSlide = document.getElementById(slideNumber);
            prevSlide.style.display = "none"; 
            nextSlide.style.display = "block";
        } else{
            slideNumber = 1;
            const prevSlide = document.getElementById(4);
            const nextSlide = document.getElementById(slideNumber);
            prevSlide.style.display = "none"; 
            nextSlide.style.display = "block";
        }
    })
})

prev.forEach((el)=>{
    el.addEventListener("click",function(){
        slideNumber -=1;
        if(slideNumber > 0 && slideNumber < 5){
            const prevSlide = document.getElementById(slideNumber+1);
            const nextSlide = document.getElementById(slideNumber);
            prevSlide.style.display = "none";
            nextSlide.style.display = "block";
        } else{
            slideNumber = 4;
            const prevSlide = document.getElementById(1);
            const nextSlide = document.getElementById(slideNumber);
            prevSlide.style.display = "none"; 
            nextSlide.style.display = "block";
        }
    })
})