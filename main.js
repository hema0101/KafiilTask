const profimg=document.querySelector('.profimg');
const drop=document.querySelector('.drop');
const burger=document.querySelector('.burger');
const icons=document.querySelector('nav .icons');
const arrow=document.querySelector('.arrow');
const aside=document.querySelector('aside');
const contaiiner=document.querySelector('.layout .contaiiner');
const circle=document.querySelectorAll('.circle');
const reviewBtn=document.querySelector('.reviewBtn button');
const textarea=document.querySelector('.writeReview textarea');
const reviews=document.querySelector('.reviews');
const heartt=document.querySelectorAll('.heartt');
const hearttIcon=document.querySelector('.heartt i');
 

let arrHeart=new Array(...heartt)
arrHeart.map((item)=>{
 
  
  item.addEventListener('click',(e)=>{
    let a= item.firstElementChild ;

    console.log(hearttIcon);
    if(a.classList.contains('fa-regular')){
      a.classList.add('fa-solid','red');
      a.classList.remove('fa-regular');
    }
    else{
      
      a.classList.add('fa-regular');
      a.classList.remove('fa-solid','red');
    }
     
    
    })
})


 let x=new Array(...circle)
 
x.map((item)=>{

  item.addEventListener('click',(e)=>{
  
    
    if(item.innerHTML=="")
    {
 
      item.innerHTML=`<i class="fa-solid fa-check"></i>`
      item.classList.add("bgGreen")
    }
    else{
      item.innerHTML=""
      item.classList.remove("bgGreen")
    }
  
  })

})
 


profimg.addEventListener('click',(e)=>{

 drop.classList.toggle("disHide")
     
 


})

burger.addEventListener('click',(e)=>{

 icons.classList.toggle("disHide")

})

arrow.addEventListener('click',(e)=>{
// contaiiner.style.griTemplateAreas = "main main main main main main main main main main main main main main" ;
aside.classList.toggle("disHide")

})
//  *********************************************************


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


reviewBtn.addEventListener('click',(e)=>{
let content=textarea.value;
// console.log(content);
let rev=`
<div class=" review flex">
<div class="avatar">
    <img src="./images/PosterAvatar.png" alt="">
</div>
<div class="reviewText">
    <h3>Jane Smith</h3>
    <div class="fiveStar">
        <i class="fa-solid fa-star star"></i>
        <i class="fa-solid fa-star star"></i>
        <i class="fa-solid fa-star star"></i>
        <i class="fa-solid fa-star star"></i>
        <i class="fa-regular fa-star star"></i>
        <span>30m</span>
    </div>
    <p>${content}</p>
</div>

      </div>`
      let dv=document.createElement('div');
      dv.innerHTML=rev
reviews.appendChild(dv);
textarea.value=""
 
 })