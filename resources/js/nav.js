/**
 * Created by Administrator on 2017/11/15.
 */
/*??*/
//alert(11);

$(window).ready(function () {
var $w_nav_kc = $('#w_nav_kc');
var $sub_nav = $('.sub_nav');
var flg;

    
$w_nav_kc.click(function () {
   // console.log(111);
    if ($sub_nav.css('display')==='none'){
        flg ='false';
    }else {
        flg ='true';
    }
    if(flg =='true'){
        $(this).find('em >img').attr('src','resources/images/nav_down.png');
        $sub_nav.fadeOut('slow');
        $(this).removeClass('nav_active');
        flg ='false';
    }else {
        $(this).find('em >img').attr('src','resources/images/nav_up.png');
        $(this).addClass('nav_active');
        $sub_nav.fadeIn();
        flg ='true';
    }
});

if($(window).scrollTop() > 60){
    $sub_nav.css(
        {'position':'fixed',
            'top':0
        });
    $w_nav_kc.addClass('nav_active');
    $sub_nav.css({'display':'block'});
}

$(window).scroll(function () {
    if($(window).scrollTop() > 60){
        $sub_nav.css(
            {'position':'fixed',
                'top':0
            });
        $w_nav_kc.addClass('nav_active');
        $sub_nav.fadeIn();
    }else {
        $sub_nav.css(
            {'position':'absolute',
                'top':80+'px'
            });
        $sub_nav.fadeOut('slow');
        $w_nav_kc.removeClass('nav_active');
    }
});

});