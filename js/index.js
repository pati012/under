"use strict";


//burger menu

 const burger = document.querySelector('#burger');
  const bodyMenuBurger = document.querySelector('.header__body');
  burger.addEventListener('click', function (e){
   burger.classList.toggle('openBurger');
    bodyMenuBurger.classList.toggle('OpenBodyMenu');
     if(burger.classList.contains('openBurger')){
       document.body.style.overflow = 'hidden';
     }
     else{
      document.body.style.overflow = 'visible';
     }
  });


 //ленивая подгрузка

  const allImage = document.querySelectorAll('img[data-src]');
   const clientHeight = document.documentElement.clientHeight;
  
   let imageArray = [];
    if(allImage.length > 0){
      allImage.forEach((item) => {
        imageArray.push(item.getBoundingClientRect().top + pageYOffset);
      });
      lazyLoading();
    }

   window.addEventListener('scroll', function (e){
     if(document.querySelectorAll('img[data-src]').length > 0){
       lazyLoading();
     }
   })

    function lazyLoading(){
      let arrayImageIndex = [];
       imageArray.forEach((item, index) => {
         if(pageYOffset > item - clientHeight){
           arrayImageIndex.push(index);
         }
         arrayImageIndex.forEach(item => {
           if(allImage[item].dataset.src){
             allImage[item].src = allImage[item].dataset.src;
            allImage[item].removeAttribute('data-src');
           }
           delete arrayImageIndex[item];
         });
       })
    }













  


