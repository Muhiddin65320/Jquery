$(function(){
    let input= $('.input');
    let btn = $('.btn');
    let safe = $('.safe ol');
    let count =0;
    let all =0;

    btn.on('click',function(){
        let time = new Date();
        let kun = time.getDay();
        let oy = time.getMonth();
        let yil = time.getFullYear();
        let soat = time.getHours();
        let minut = time.getMinutes();
        let secund = time.getSeconds();
      
        if(kun < 10){
            kun='0'+kun
        }
        if(oy < 10){
            oy='0'+oy
        }
        if(soat < 10){
            soat ='0'+soat;
        }
        if(minut < 10){
            minut ='0'+minut
        }
        if(secund < 10){
            secund='0'+secund
        }

        let text=` <li class='menu'>${input.val()}<img class='exit' src="images/button.png" alt="x">
        <div class="time">
        <span class="date">${kun}.${oy}.${yil}</span>
        <span class="time-text">${soat}:${minut}:${secund}</span>
        </div></li>
        `
    if(input.val().length > 0){
        count++
        safe.append(text);
        input.val('');
        $('.title').hide()
    }
    $('.exit').on('click',function(){
        $(this).parent().remove();
   })
   setInterval(function(){
    if($('ol').children().length <=1){
        $('.title').show()
    }
    else{
        $('.title').hide()
    } 
   },10) 
    
})
  
})