$(document).ready(function() {
    (function() {
        [].slice.call(document.querySelectorAll('.tabs')).forEach(function(el) {
            new CBPFWTabs(el);
        });
    })();
    $('#main-nav').sidr();
    $('#fullpage').fullpage({
        'verticalCentered': true,
        'easing': 'easeInOutCirc',
        'css3': false,
        'scrollingSpeed': 900,
        'slidesNavigation': true,
        'slidesNavPosition': 'bottom',
        'easingcss3': 'ease',
        'navigation': true,
        'anchors': ['home','why', 'services','portfolio','team','contact'],
        'navigationPosition': 'left'
    });
    $('.screenshots-content, .clients-content').css('height', $(window).height());
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('body').addClass('browser-mobile');
    }
    $(document).mouseup(function(e) {
        if ($(".sidr-open ")[0]) {
            var container = $("#sidr");
            if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                $(".sidr-open #main-nav").click();
            }
        }
    });
});
jQuery(window).load(function() {
    // jQuery('#preloader').fadeOut();
});

$(document).on("ready",function(){
    $("body").particleground({
        dotColor: '#878892',
        lineColor: '#65666d',
        density:7500,
        parallax:true
    });             

    $('.carousel').carousel({fullWidth: true});


    // var data = ['#rnr-parallax1','#rnr-parallax2','#rnr-parallax3','#rnr-parallax4','#rnr-parallax5'];
    // $.each(data,function(i,v){
    //     console.log(v);
    //     var scene = $(v).get(0);
    //     var parallax = new Parallax(scene);
    // })


    // var scene = $('#rnr-parallax2').get(0);
    // console.log(scene);
    // var parallax = new Parallax(scene);
});