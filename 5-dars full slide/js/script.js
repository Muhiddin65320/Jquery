$(function(){
    let sliderArray =$.makeArray($('.slider__item'));
    let dotsArray =$.makeArray($('.dots__item'));
    let sliderInterVal =setInterval(sliderInt,2000);
// next button 
$('.arrows-next').click(function(){
    let sliderItem = $(`.slider__item`);
    let silderActive = $(`.slider__item_active`);
    clearInterval(sliderInterVal);
    if(sliderItem.last().hasClass("slider__item_active")){
        sliderItem.last().removeClass('slider__item_active');
        sliderItem.first().addClass('slider__item_active');
    }
    silderActive.removeClass('slider__item_active');
    silderActive.next().addClass('slider__item_active');
/// dots clickable || next ||
for(let i = 0; i < sliderArray.length; i++ ){
    if($(sliderArray[i]).hasClass('slider__item_active')){
        /// slider indexlarni dotlarga o'zlash tirish
        let sliderDotsActive = sliderArray.indexOf(sliderArray[i]);
        $('.dots__item').removeClass('dots__item_active');
        /// dot elementi bosilsa  ayan shu indexdagi sliderga class qo'shiladi
        $(dotsArray[sliderDotsActive]).addClass('dots__item_active');
}
}
})
// prev button 
$('.arrows-prev').click(function(){
    let sliderItem = $(`.slider__item`);
    let silderActive = $(`.slider__item_active`);
    clearInterval(sliderInterVal);

    if(sliderItem.first().hasClass("slider__item_active")){
        sliderItem.first().removeClass('slider__item_active');
        sliderItem.last().addClass('slider__item_active');
    }
    silderActive.removeClass('slider__item_active');
    silderActive.prev().addClass('slider__item_active');
    
/// prev dots
/// let sliderArray =$.makeArray($('.slider__item'));
/// let dotsArray =$.makeArray($('.dots__item'));
for(let i = 0; i < sliderArray.length; i++ ){
    if($(sliderArray[i]).hasClass('slider__item_active')){
        let sliderDotsActive = sliderArray.indexOf(sliderArray[i]);
        $('.dots__item').removeClass('dots__item_active');
        $(dotsArray[sliderDotsActive]).addClass('dots__item_active');
}
}
})
for(let d = 0; d < dotsArray.length; d++){
    $(dotsArray[d]).click(()=>{
        clearInterval(sliderInterVal);
        $('.dots__item').removeClass('dots__item_active');
        $(dotsArray[d]).addClass('dots__item_active');
        let dotsActive = dotsArray.indexOf(dotsArray[d]);
        $('.slider__item').removeClass('slider__item_active')
        $(sliderArray[dotsActive]).addClass('slider__item_active')
    })
}
function sliderInt(){
    let sliderItem = $(`.slider__item`);
    let silderActive = $(`.slider__item_active`);
    
    if(sliderItem.last().hasClass("slider__item_active")){
        sliderItem.last().removeClass('slider__item_active');
        sliderItem.first().addClass('slider__item_active');
    }
    silderActive.removeClass('slider__item_active');
    silderActive.next().addClass('slider__item_active');
/// dots next
for(let i = 0; i < sliderArray.length; i++ ){
    if($(sliderArray[i]).hasClass('slider__item_active')){
        let sliderDotsActive = sliderArray.indexOf(sliderArray[i]);
        $('.dots__item').removeClass('dots__item_active');
        $(dotsArray[sliderDotsActive]).addClass('dots__item_active');
        }
    }
    }

})