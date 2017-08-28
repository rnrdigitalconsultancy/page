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
        'anchors': ['why', 'services','portfolio','team','contact'],
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
    jQuery('#preloader').fadeOut();
});

$(document).on("ready",function(){
    $("#form_registration").validate({
        rules: {
            // field_name: {required: true,maxlength: 200},
            // field_email: {required: true,maxlength: 100,email:true},
            // field_phone: {required: true,maxlength: 20},
            // field_skill: {required: false},
            // field_address: {required: true,maxlength: 300},
            // field_dream: {required: true,maxlength: 1000},
        },
        errorElement : 'div',
        errorPlacement: function(error, element) {
            var placement = $(element).data('error');
            if(placement){
                $(placement).append(error)
            } 
            else{
                error.insertAfter(element);
            }
        },
        submitHandler: function (form) {
            var _form = $(form).serializeArray();
            var data = system.ajax('harmony/Process.php?set-leads',_form);
            data.done(function(data){
                console.log(data);;
                if(data == 1){
                    Materialize.toast('Saved.',4000);
                    system.clearForm();
                    App.handleLoadPage("#cmd=index;content=list_products");
                }
                else{
                    Materialize.toast('Cannot process request.',4000);
                }
            });
        }
    });

    $("body").particleground({
        dotColor: '#ccc',
        lineColor: '#ddd',
        density:10000,
        parallax:true
    });             
})

