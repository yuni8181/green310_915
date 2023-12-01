$(function(){
    // html에소스를 추가하는방법
var imgs=''
    for(var a= 0; a<200; a++){

        imgs +="<img src=img/pic"+a+".jpg>"
        console.log(imgs)



    }
    $('section').html(imgs)


    $('body').mousemove(function(e){
        var x =e.pageX
        var wd =$(window).width()
        var xNum = Math.floor((x/wd)*200)
        $('h1').text(xNum)

        // 속성값을 변경하는방식 메서드 attr()
        // $('section img').attr({'src':'img/'+xNum+'.jpg'})

    
// 지정된 숫자만 보여라
$('section img').hide()
$('section img').eq(xNum).show()




    })
})