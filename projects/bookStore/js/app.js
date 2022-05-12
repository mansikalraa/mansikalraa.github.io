let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

 document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.toggle('active');
 }

 document.querySelector('#close-login-btn').onclick = () =>{
   loginForm.classList.remove('active');
 }

window.onscroll = () =>{
    searchForm.classList.remove('active');
    if(window.scrollY > 80){
      document.querySelector('.header .header-2').classList.add('active');
    }else{
      document.querySelector('.header .header-2').classList.remove('active');
    }
  
  }
    window.onload = () =>{

    if(window.scrollY > 80){
      document.querySelector('.header .header-2').classList.add('active');
    }else{
      document.querySelector('.header .header-2').classList.remove('active');
    }

    fadeOut();
  
  }

  
function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 3000);
}
  
  // books section 

  var swiper = new Swiper(".books-slider", {
   loop:true,
   centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      
    },
  });

  // featured section 

  var swiper = new Swiper(".featured-slider", {
    spaceBetween: 15,
    loop:true,
    centeredSlides: true,
   autoplay: {
     delay: 4000,
     disableOnInteraction: false,
   },
     navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
     },
     breakpoints: {
       0: {
         slidesPerView: 1,
         
       },
       450: {
        slidesPerView: 2,
      },
       768: {
         slidesPerView: 3,
       },
       1024: {
         slidesPerView: 4,
       },
       
     },
   });

  //  arrivals section 

   var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 15,
    loop:true,
    centeredSlides: true,
   autoplay: {
     delay: 4000,
     disableOnInteraction: false,
   },
     breakpoints: {
       0: {
         slidesPerView: 1,
         
       },
       768: {
         slidesPerView: 2,
       },
       1024: {
         slidesPerView: 3,
       },
       
     },
   });

  //  review section 

   var swiper = new Swiper(".review-slider", {
    spaceBetween: 15,
    grabCursor: true,
    loop:true,
    centeredSlides: true,
   autoplay: {
     delay: 4000,
     disableOnInteraction: false,
   },
     breakpoints: {
       0: {
         slidesPerView: 1,
         
       },
       768: {
         slidesPerView: 2,
       },
       1024: {
         slidesPerView: 3,
       },
       
     },
   });


  //  blog setion 

   var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 15,
    grabCursor: true,
    loop:true,
    centeredSlides: true,
   autoplay: {
     delay: 5000,
     disableOnInteraction: false,
   },
     breakpoints: {
       0: {
         slidesPerView: 1,
         
       },
       768: {
         slidesPerView: 2,
       },
       1024: {
         slidesPerView: 3,
       },
       
     },
   });