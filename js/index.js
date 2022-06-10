$(document).ready(function(){
    
    /* $(".carousel").swipe({

        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
      
          if (direction == 'left') $(this).carousel('next');
          if (direction == 'right') $(this).carousel('prev');
      
        },
        allowPageScroll:"vertical"
      
      }); */
    /* $('.carousel-announcements__indicator ').click(()=>{
        $('.carousel-announcements__indicator ').addClass('_active-slide')
        console.log($('.carousel-announcements__indicator'))
        console.log($(this))
        $('.carousel-announcements__indicator, active').not($(this)).removeClass('_active-slide')
    }) */

    //lock body
    console.log($('.btn__burger[aria-expanded=false]'));
    $('.btn__burger').click(()=>{
        $(document.body).toggleClass('_lock')
    })
    

    //header & scroll-appear
    const headerInitialPos = $('.header').offset().top

    $(window).scroll(function(){
        const scrolled = $(this).scrollTop()

        if(document.documentElement.clientWidth > 768){
            if(headerInitialPos + 108 < scrolled){
                $('.header').addClass('_header__scroll')
                $('.btn__burger__wrapper').addClass('_header__scroll')
            } else{
                $('.header').removeClass('_header__scroll')
                $('.btn__burger__wrapper').removeClass('_header__scroll')
            }

            
        }

        if(document.documentElement.clientWidth > 587){
            if(scrolled > 600){
                $('._scroll-to-top').addClass('_scroll-appear')
            } else{
                $('._scroll-to-top').removeClass('_scroll-appear')
            }
        }
        if(document.documentElement.clientWidth <= 587){
            if(scrolled > 400){
                $('._scroll-to-top').addClass('_scroll-appear')
            } else{
                $('._scroll-to-top').removeClass('_scroll-appear')
            }
        }
        


        
    })

    //main additional function for accordion
    $(`.main-section .main__picture__container .accordion-collapse#imgOne`).parent().addClass('show')
    $('.main-section .accordion-header').click(function (e) { 
        e.preventDefault();

        const attribute = $(this).attr('dopAttr')
        console.log('parent:', $(`.main-section .main__picture__container .accordion-collapse#${attribute}`).parent());
        console.log('current:', $(`.main-section .main__picture__container .accordion-collapse#${attribute}`));
         
        const changedPic = $(`.main-section .main__picture__container .accordion-collapse#${attribute}`)
         
        console.log('ATTRIBUTE', attribute);
         $(`.main-section .main__picture__container .accordion-collapse#${attribute}`).parent().toggleClass('show')

         
         $(`.main-section .main__picture__container .accordion-collapse`).not(changedPic).parent().removeClass('show')
     });

    //workforce
    $(`.workforce .main__picture__container .accordion-collapse#workforceImgOne`).parent().addClass('show')
    $('.workforce .accordion-header').click(function (e) { 
        e.preventDefault();

        const attribute = $(this).attr('dopAttr')
        console.log('parent:', $(`.workforce .main__picture__container .accordion-collapse#${attribute}`).parent());
        console.log('current:', $(`.workforce .main__picture__container .accordion-collapse#${attribute}`));
         
        const changedPic = $(`.workforce .main__picture__container .accordion-collapse#${attribute}`)
         
        console.log('ATTRIBUTE', attribute);
         $(`.workforce .main__picture__container .accordion-collapse#${attribute}`).parent().toggleClass('show')

         
         $(`.workforce .main__picture__container .accordion-collapse`).not(changedPic).parent().removeClass('show')
     });
})