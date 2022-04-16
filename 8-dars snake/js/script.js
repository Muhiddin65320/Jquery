$(function(){
    let snakeReal = $('.game__snake_real');
    let snakeNoReal =$('.game__snake_noReal');
    let snakeTwo =$('.game__snake');
    let snakeHead =$('.game__snake_head');
    let snakeDum = $('.game__snake_dum');
    let yesTil =$('.game__snake_real .game__snake_til');
    let noTil =$('.game__snake_noReal .game__snake_til');
    let ballArray =$('.ball__item');
    let redline =$('.game');
    let modal =$('.modal');
    let sum = 0
    /// funksiyalar ishlashi qoidalari
    function  ballEat(){
        sum++
        let score = $('.score__value');
        for(let i = 0 ; i<ballArray.length;i++){
            if(yesTil.offset().left >= $(ballArray[i]).offset().left){
                $(ballArray[i]).fadeOut();
                // score.text(`${(sum+1)*20}`)
                // snakeReal.css('width',`${((i+1)*20)+300}px`)
                // snakeNoReal.css('width',`${((i+1)*20)+300}px`)
            } 
            if(yesTil.offset().left >= 1650){
                $(ballArray[i]).fadeIn();
            }
            if(noTil.offset().left >= $(ballArray[i]).offset().left){
                $(ballArray[i]).fadeOut();
                // snakeReal.css('width',`${((i+1)*20)+300}px`)
                // snakeNoReal.css('width',`${((i+1)*20)+300}px`)
            }
            if(noTil.offset().left >=1650 ){
                $(ballArray[i]).fadeIn();
            }
        }
    }
    function showHide(){
        if(yesTil.offset().left >= 1650){
            snakeReal.hide();
             snakeReal.animate({
                 left:'-1200px'
             })
        }
        if(noTil.offset().left >= 1650){
         snakeNoReal.hide();
         snakeNoReal.animate({
             left:'0px'
            })
        }
     if(noTil.offset().left >= 1200){
         snakeReal.show()
     }
     if(yesTil.offset().left >=1200){
         snakeNoReal.show()
     }
    }
    function animateRight(){
        snakeTwo.animate({left:'+=100px'})
    }
    function animteTop(){
        snakeTwo.animate({top:'-=100px'})
    }
    function animateLeft(){
        snakeTwo.animate({left:'-=100px'})
    }
    function animateBottom(){
        snakeTwo.animate({top:'+=50px'})
    }
    function openModal(){
        let exit = $('.fa-window-close');
        if(yesTil.offset().left >= 1200 ){ 
            modal.addClass('modal__active');
            snakeHead.addClass('game__snake_head_active')}
        if(yesTil.offset().left <=300 ){ 
            modal.addClass('modal__active');
            snakeHead.addClass('game__snake_head_active')}
        exit.click(function(){
            modal.removeClass('modal__active');
            snakeHead.removeClass('game__snake_head_active')
            snakeTwo.css('transform','rotateY(0deg)').css('left','5px').css('top','50%');
        })
        $(window).click(function(){
            modal.removeClass('modal__active');
            snakeHead.removeClass('game__snake_head_active')
            snakeTwo.css('transform','rotateY(0deg)').css('left','5px').css('top','50%');
        })
    }
/// interval
const infinite=  setInterval(function (){
    ballEat();
    showHide();
    animateRight();
},500)
/// keybord 
snakeHead.click(function(){
    clearInterval(infinite)
    animateRight();
    ballEat();
    showHide();
})
snakeDum.click(function(){
    clearInterval(infinite)
    animateLeft();
    ballEat();
    showHide();
})
$(document).on('keydown',function(e){
    clearInterval(infinite);
    ballEat();
    showHide();
    /// right
    if(e.keyCode == 39){
        animateRight();
        openModal();
        snakeTwo.css('transform','rotateY(0deg)');
    }
    /// left
    if(e.keyCode == 37){
        animateLeft();
        openModal();
        snakeTwo.css('transform','rotateY(180deg)');
    }
    /// top
    if(e.keyCode == 38){
        animteTop();
        openModal();
        snakeTwo.css('transform','rotate(270deg)');
        // if(yesTil.offset().top <= 101){
        //     modal.addClass('modal__active');
        //     snakeHead.addClass('game__snake_head_active')
        // }
    }
    /// bottom
    if(e.keyCode == 40){
        animateBottom();
        openModal();
        snakeTwo.css('transform','rotate(90deg)');
        // if(yesTil.offset().top >= 581){
        //     modal.addClass('modal__active');
        //     snakeHead.addClass('game__snake_head_active')
        // }
    }
    })
})