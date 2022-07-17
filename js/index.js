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
    //console.log($('.btn__burger[aria-expanded=false]'));
    $('.btn__burger').click(()=>{
        $(document.body).toggleClass('_lock')
    })
    
    //lock when search
    if(document.documentElement.clientWidth > 1199){
        $('.btn__search__appear').click(function(e){
            $(document.body).toggleClass('_lock')
        })

        $('.search-form__close').click(function(e){
            $('.btn__search__appear').attr('aria-expanded', 'false')
            $(document.body).removeClass('_lock')

            $('.search-form').removeClass('collapse')
            $('.search-form').addClass('collapsing')
            $('.search-form').removeClass('show')
            setTimeout(() => {
                $('.search-form').removeClass('collapsing')
                $('.search-form').addClass('collapse')

            }, 300);
        })
    }

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

    $('._scroll-to-top').click(function(e){
        e.preventDefault()
        $('html, body').animate({scrollTop:0}, '300');
    })

    //navigation hide

    if(document.documentElement.clientWidth <= 990){

        $('.phoenix-navigation__list').slideUp(300)

        let currentHeight = Math.round($('.colored-navigation__nav').innerHeight())
        let currentMargin = Math.round($('.colored-navigation__nav').outerHeight(true) - $('.colored-navigation__nav').innerHeight())

        //setTimeout(() => {
            //currentHeight = Math.round($('.colored-navigation__nav').innerHeight())
            document.documentElement.style.setProperty('--navHeight', currentMargin + 'px')
            //console.log(1, $('.colored-navigation__nav').outerHeight(true));
    
        //}, 300);


        $('.phoenix-navigation__title').click(function(e){
            $(this).toggleClass('_active-navigation')
            $('.phoenix-navigation__title span').toggleClass('_active-navigation')

            if( $(this).hasClass('_active-navigation')){
                document.documentElement.style.setProperty('--navHeight', currentHeight + currentMargin + 'px')
            }else{
                document.documentElement.style.setProperty('--navHeight', currentMargin + 'px')
            }
            $('.phoenix-navigation__list').slideToggle(300)

            

            //setTimeout(() => {
               // currentHeight = Math.round($('.colored-navigation__nav').innerHeight())
                
                //console.log(2, $('.colored-navigation__nav').outerHeight(true));
        
            //}, 300);
        })
    }
    

    //navigation is empty
    let navLi = document.querySelector('.phoenix-navigation__list li')
    let navigation = document.querySelector('.phoenix-navigation')
    let navTitle = document.querySelector('.phoenix-navigation__title')
    //console.log(document.querySelector('.phoenix-navigation__list li'))

    if(navLi == null){
        if(navigation && navTitle){
            $(navigation).addClass('_empty-navigation')
            $(navTitle).addClass('_empty-navigation')
        }
        
    }

    //custom select
    $('select').each(function() {
        // Cache the number of options
        var $this = $(this),
        numberOfOptions = $(this).children('option').length;

        // Hides the select element
        $this.addClass('s-hidden');

        // Wrap the select element in a div
        $this.wrap('<div class="select"></div>');

        // Insert a styled div to sit over the top of the hidden select element
        $this.after('<div class="styledSelect"></div>');

        // Cache the styled div
        var $styledSelect = $this.next('div.styledSelect');

        // Show the first select option in the styled div
        $styledSelect.text($this.children('option').eq(0).text());

        // Insert an unordered list after the styled div and also cache the list
        var $list = $('<ul />', {
            'class': 'options'
        }).insertAfter($styledSelect);

        // Insert a list item into the unordered list for each select option
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

         // Cache the list items
        var $listItems = $list.children('li');

        // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.styledSelect.active').each(function() {
            $(this).removeClass('active').next('ul.options').hide();
            });
            $(this).toggleClass('active').next('ul.options').toggle();
        });

        // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
        // Updates the select element to have the value of the equivalent option
        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            /* alert($this.val()); Uncomment this for demonstration! */
        });

        // Hides the unordered list when clicking outside of it
        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });
    })


    //separate accordion
    $('.separate-accordion__body').slideUp(300)

    $('.separate-accordion__item').click(function(e){
        $(this).toggleClass('_active-accordion')
        $(this).children('.separate-accordion__body').slideToggle(300)
        $('.separate-accordion__item').not($(this)).removeClass('_active-accordion')
        $('.separate-accordion__item').not($(this)).children('.separate-accordion__body').slideUp(300)
    })
    

    //slider-video click
    $('.separate-slider__video').click(function(e){
        $(this).children('video').attr('controls', 'true')
        $(this).children('video')[0].play()
        $(this).children('.video__btn__play').css('display', 'none')
    })

    //slider announcements
    let announcementsSwiper = new Swiper('.swiper.carousel-announcements', {
        slidesPerView: 1,
        spaceBetween: 30,
        //autoHeight: true,
        loop: false,
        pagination: {
            
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class= "carousel-announcements__indicator ${className} "></span>`;
            }
        },
        breakpoints: {
            750:{
                slidesPerView: 2,
            },
            910:{
                slidesPerView: 3,
            },
        }
    })
    let separateSwiper = new Swiper('.swiper.separate-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        //autoHeight: true,
        loop: false,
        pagination: {
            
            el: '.separate-slider__pagination__container',
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class= "separate-slider__pagination ${className} "></span>`;
            }
        },
        navigation: {
            nextEl: '.separate-slider__btns__container .swiper-button-next',
            prevEl: '.separate-slider__btns__container .swiper-button-prev',
        },
    })


    //picture accordion
    $('.main-section .main__picture__container .accordion-pictures__img.imgOne').parent().addClass('show-accordion-picture')
    $('.workforce .main__picture__container .accordion-pictures__img.imgOne').parent().addClass('show-accordion-picture')

    $(`.main-section .accordion-header.firstItem`).css('pointer-events', 'none')
    $(`.main-section .accordion-header.firstItem`).attr('aria-expanded', 'true')
    $(`.workforce .accordion-header.firstItem`).css('pointer-events', 'none')
    $(`.workforce .accordion-header.firstItem`).attr('aria-expanded', 'true')

    $('.main-section .accordion-header').click( function(e) {
        
        togglePicAccordion.apply(this, ['.main-section'])
    })

    $('.workforce .accordion-header').click( function(e) {
        
        togglePicAccordion.apply(this, ['.workforce'])
    })

    function togglePicAccordion(section){
        //event.preventDefault();
        const attribute = $(this).attr('dopAttr')
        // console.log('attribute', attribute);
        // console.log('parent:', $(`${section} .main__picture__container .accordion-pictures__img.${attribute}`).parent());
        // console.log('current:', $(`${section} .main__picture__container .accordion-pictures__img.${attribute}`));

        const firstTextItem = $(`${section} .accordion-header.firstItem`)
        const firstItem = $(`${section} .main__picture__container .accordion-pictures__img.imgOne`).parent()
        const changedItem = $(`${section} .main__picture__container .accordion-pictures__img.${attribute}`).parent()

        //unclosed sections
        $(`${section} .accordion-header`).css('pointer-events', 'unset')
        if($(this).attr('aria-expanded') === 'true'){

            //text
            $(this).css('pointer-events', 'none')

            //console.log('unclosed sections', this);
            // return
        }

        // if(attribute === 'imgOne'){
        //     $(firstTextItem).css('pointer-events', 'none')
        // }


        //unused logic
    //     if(changedItem.hasClass('show-accordion-picture')){
    //         text
    //         $(firstTextItem).css('pointer-events', 'none')
    //         $(firstTextItem).attr('aria-expanded', 'true')
    //         $(firstTextItem).addClass('collapsed')

    //         console.log('hui', $(firstTextItem).children('.accordion-info__title__btn'));
            
    //         $(firstTextItem).children('.accordion-info__title__btn').attr('aria-expanded', "true")
    //         $(firstTextItem).children('.accordion-info__title__btn').addClass('collapsed')
    //         $(firstTextItem).next().addClass('show')
    //         $(firstTextItem).prev().addClass('show')


    //         picture
    //         firstItem.addClass('show-accordion-picture')
    //         $(`${section} .main__picture__container .accordion-pictures__img`).parent().not(firstItem).removeClass('show-accordion-picture')
    //         return
    //     }


        $(changedItem).addClass('show-accordion-picture')
        $(`${section} .main__picture__container .accordion-pictures__img`).parent().not(changedItem).removeClass('show-accordion-picture')

       
    }

    //accordion`s timer

    addEventListener('load', function() {
        let elements = Array.from($(`.main-section .accordion-header`))
        let currentItem //= elements[0]
        let nextItem //= elements[1]
        let indexArr = -1

        function autoToggleSlide(){
            indexArr++
            if(indexArr > elements.length - 1){
                indexArr = 0
                //currentItem = elements[indexArr]
            }
            if(indexArr > elements.length - 2){
                nextItem = elements[0]
            }
            else{
                nextItem = elements[indexArr+1]
            }
            currentItem = elements[indexArr]
            
            
            changeItemOnTimer(currentItem, nextItem)
            togglePicAccordion.apply(nextItem, ['.main-section'])
            //console.log(elements);
        }

        let autoTransition = setInterval(autoToggleSlide, 8000);

        $(`.main-section .accordion-header`).click(function (e) { 
            //e.preventDefault();
            elements.forEach((item, index)=>{
                if(item === this){
                    indexArr = index -1
                }
            })

            clearInterval(autoTransition);
            autoTransition = setInterval(autoToggleSlide, 8000);
        });
        
    })
    addEventListener('load', function() {
        let elementsWorkforce = Array.from($(`.workforce .accordion-header`))
        let currentItemWorkforce //= elements[0]
        let nextItemWorkforce //= elements[1]
        let indexArrWorkforce = -1

        function autoToggleSlideWorkforce(){
            indexArrWorkforce++
            if(indexArrWorkforce > elementsWorkforce.length - 1){
                indexArrWorkforce = 0
                //currentItem = elements[indexArr]
            }
            if(indexArrWorkforce > elementsWorkforce.length - 2){
                nextItemWorkforce = elementsWorkforce[0]
            }
            else{
                nextItemWorkforce = elementsWorkforce[indexArrWorkforce+1]
            }
            currentItemWorkforce = elementsWorkforce[indexArrWorkforce]
            
            
            changeItemOnTimer(currentItemWorkforce, nextItemWorkforce)
            togglePicAccordion.apply(nextItemWorkforce, ['.workforce'])
            //console.log(elementsWorkforce);
        }

        let autoTransitionWorkforce = setInterval(autoToggleSlideWorkforce, 8000);

        $(`.workforce .accordion-header`).click(function (e) { 
            //e.preventDefault();
            elementsWorkforce.forEach((item, index)=>{
                if(item === this){
                    indexArrWorkforce = index -1
                }
            })

            clearInterval(autoTransitionWorkforce);
            autoTransitionWorkforce = setInterval(autoToggleSlideWorkforce, 8000);
        });
        
    })

    

    function changeItemOnTimer(currentItem, nextItem){

        $(currentItem).attr('aria-expanded', "false")
        $(currentItem).css('pointer-events', 'unset')
        $(currentItem).removeClass('collapsed')
        $(currentItem).children('.accordion-info__title__btn').attr('aria-expanded', "false")
        $(currentItem).children('.accordion-info__title__btn').removeClass('collapsed')
        $(currentItem).next().removeClass('show')
        $(currentItem).prev().removeClass('show')
    
        $(currentItem).parent().removeClass('current-to-show')
    
            $(nextItem).attr('aria-expanded', 'true')
            $(nextItem).css('pointer-events', 'none')
                
            $(nextItem).addClass('collapsed')
            $(nextItem).children('.accordion-info__title__btn').attr('aria-expanded', "true")
            $(nextItem).children('.accordion-info__title__btn').addClass('collapsed')
            $(nextItem).next().addClass('show')
            $(nextItem).prev().addClass('show')
    
            $(nextItem).parent().addClass('current-to-show')

        //console.log('elements', currentItem, nextItem);
        // return [currentItem, nextItem]
    }

    // function infinityCollapse(counter){
    //     if(counter > 20){
    //         counter = 0
    //         console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    //         createProgressbar(`.main-section .accordion-info .accordion-item .accordion-header[aria-expanded="true"] .progressbar`, '1s', function(){
    //             changeItemOnTimer('.main-section')

    //             //$(`.main-section .accordion-info .accordion-item .accordion-header .progressbar .inner`).remove()

    //             return infinityCollapse(counter)
    //         })
    //         return
    //     }else{
    //         createProgressbar(`.main-section .accordion-info .accordion-item .accordion-header[aria-expanded="true"] .progressbar`, '1s', function(){
    //             changeItemOnTimer('.main-section')

    //             //$(`.main-section .accordion-info .accordion-item .accordion-header .progressbar .inner`).remove()

    //             return infinityCollapse(counter++)
    //         })
    //     }
    // }

    //main additional function for accordion
    // $(`.main-section .main__picture__container .accordion-collapse#imgOne`).parent().addClass('show')
    // $('.main-section .accordion-header').click(function (e) { 
    //     e.preventDefault();

    //     const attribute = $(this).attr('dopAttr')
    //     console.log('parent:', $(`.main-section .main__picture__container .accordion-collapse#${attribute}`).parent());
    //     console.log('current:', $(`.main-section .main__picture__container .accordion-collapse#${attribute}`));
         
    //     const changedPic = $(`.main-section .main__picture__container .accordion-collapse#${attribute}`)
         
    //     console.log('ATTRIBUTE', attribute);
    //      $(`.main-section .main__picture__container .accordion-collapse#${attribute}`).parent().toggleClass('show')

         
    //      $(`.main-section .main__picture__container .accordion-collapse`).not(changedPic).parent().removeClass('show')
    //  });

    // //workforce
    // $(`.workforce .main__picture__container .accordion-collapse#workforceImgOne`).parent().addClass('show')
    // $('.workforce .accordion-header').click(function (e) { 
    //     e.preventDefault();

    //     const attribute = $(this).attr('dopAttr')
    //     console.log('parent:', $(`.workforce .main__picture__container .accordion-collapse#${attribute}`).parent());
    //     console.log('current:', $(`.workforce .main__picture__container .accordion-collapse#${attribute}`));
         
    //     const changedPic = $(`.workforce .main__picture__container .accordion-collapse#${attribute}`)
         
    //     console.log('ATTRIBUTE', attribute);
    //      $(`.workforce .main__picture__container .accordion-collapse#${attribute}`).parent().toggleClass('show')

         
    //      $(`.workforce .main__picture__container .accordion-collapse`).not(changedPic).parent().removeClass('show')
    //  });
})