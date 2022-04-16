$(()=>{
    ////
    let box_text = $('.box-text');
    $('.add_btn').on('click',()=>{
    let interval = setInterval(timer,10);
    let input =$('.input').val();
    let li = $('<li type=1></li>');
    let image =$('<img src="images/button.png">').click(function(){
        li.remove();
    })
    let milsecond = 100;
    let second = 20;
    function timer(){
        milsecond--;
        if(milsecond >= 0){
            li.text(`${input} ${second}:${milsecond}`).append(image)}
        if(milsecond == 0){
            if(second > 0 ){
                milsecond = 100;
                li.text(`${input} ${second-=1}:${milsecond}`).append(image)
                if(milsecond ==  0 || second == 0){
                    milsecond = 0
                    li.fadeOut(1000);  
                }
            }     
        }
    }
    box_text.append(li)
    $('.input').val('')
    })

/////
$('.input').on('keyup',function(e){
    if(e.keyCode == 13 && $('.input').val() !=''){
    let interval = setInterval(timer,10);
    let box_text = $('.box-text');
    let input =$('.input').val();
    let li = $('<li type=1></li>');
    let image =$('<img src="images/button.png">').click(()=>{
        li.remove();
    })

    let milsecond = 100;
    let second = 20;
    function timer(){
        milsecond--;
        if(milsecond >= 0){li.text(`${input} ${second}:${milsecond}`).append(image)}
        if(milsecond == 0){
            if(second > 0 ){
                milsecond = 100;
                li.text(`${input} ${second-=1}:${milsecond}`).append(image)
                if(milsecond ==  0 || second == 0){
                    li.fadeOut(1000);  
                }
            }     
        }
    }
    box_text.append(li)
    $('.input').val('')
    }

})
})