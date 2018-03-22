system.ini();
let idleTimerID = 0, timer = 0;
$(document).ready(function() {
    (function() {
        [].slice.call(document.querySelectorAll('.tabs')).forEach(function(el) {
            new CBPFWTabs(el);
        });
    })();
    // $('#main-nav').sidr();
    $('#fullpage').fullpage({
        'verticalCentered': true,
        'easing': 'easeInOutCirc',
        'css3': false,
        'scrollingSpeed': 900,
        'slidesNavigation': true,
        'slidesNavPosition': 'bottom',
        'easingcss3': 'ease',
        'navigation': true,
        'anchors': ['home','why', 'services','portfolio','contact','footer'],
        'navigationPosition': 'left',
        'scrollOverflow': true,
        'dragAndMove': true,
        'autoScrolling': true,
        'fitToSection': true,
    });
    $('.screenshots-content, .clients-content').css('height', $(window).height());
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('body').addClass('browser-mobile');
    }

});

let type = {
    ini:function(){
        $("#typed").trigger('load');
        let text = "YOUR GATEWAY TO DIGITAL SUCCESS", count = text.length;
        let c = 0;
        type.animate(c,text);
    },
    animate:function(show,text,sound){
        $("#typed").trigger('play');
        if(text.length>show){
            setTimeout(function(){
                $("#typing_animation").append(text[show]);
                show++;
                type.animate(show,text);
            },75);         
        }
        else{
        $("#typed").trigger('stop');
            type.show();
        }
    },
    show:function(){
        $('nav.load').slideDown( 300 ).delay( 1000 ).fadeIn( 400 ).animate({opacity:'1'});
        $('p.load').slideDown( 300 ).delay( 2000 ).fadeIn( 400 ).animate({opacity:'1'});

    }
}

let dot ={
    random:function () {
        timer = setTimeout(function(){
            dot.show();
            dot.random();
        },2000); /*2000*/
        return timer;
    },
    show:function(){
        let r, exists=[];
        do {
           r = Math.floor(Math.random()*5)+1;  
        } while (exists[r]);
        exists[r] = true;
        $(`tr`).removeClass('active');
        $(`tr:nth-child(${r})`).addClass('active');
    },
    hover:function () {
        $(`tr`).mouseenter(function(){
            $(`tr`).removeClass('active');
            let node = $(this).data('node');
            $(`tr:nth-child(${node})`).addClass('active');
        }).mouseleave(function(){
            let node = $(this).data('node');
            $(`tr:nth-child(${node})`).removeClass('active');
        });
    }
}
let _idle = {
    ini:function(){
        this.setup();
    },
    setup:function(){
        document.addEventListener("mousemove", _idle.reset);
        document.addEventListener("mousedown", _idle.reset);
        document.addEventListener("keypress", _idle.reset);
        document.addEventListener("DOMMouseScroll", _idle.reset);
        document.addEventListener("mousewheel", _idle.reset);
        document.addEventListener("touchmove", _idle.reset);
        document.addEventListener("MSPointerMove", _idle.reset);
     
        this.startTimer();            
    },
    startTimer:function(){
        idleTimerID = window.setTimeout(_idle.inactive, 2000);
    },
    reset:function(e){
        window.clearTimeout(idleTimerID);
        _idle.active(e);
    },
    inactive:function(){
        dot.show();
        dot.random();
    },
    // active:function(e){
    //     if(e.target.nodeName != "tr"){
    //     }
    //     window.clearTimeout(timer);
    //     window.clearTimeout(idleTimerID);
    //     this.startTimer();
    // }
}
let portfolio ={
    ini:function(){
        $("img#dglb").mouseover(function() {
            $("div.deegeelab").css({'opacity':'1'}).fadeIn(500);
        });
        $("img#dglb").mouseout(function() {
            $("div.deegeelab").css({'opacity':'0'}).fadeOut(500);
        });
    }
}

$(document).on("ready",function(){
    type.ini();
    dot.hover();
    _idle.ini();
    // portfolio.ini();
    $('#modal_services').modal({
        ready:function(e){
            $.fn.fullpage.setMouseWheelScrolling(false);
            $.fn.fullpage.setAllowScrolling(false);
        },
        complete:function(e){
            $.fn.fullpage.setMouseWheelScrolling(true);
            $.fn.fullpage.setAllowScrolling(true);
        }
    });

    $("body").particleground({
        dotColor: '#878892',
        lineColor: '#65666d',
        density:18000,
        parallax:false,
        particleRadius: 5,
        lineWidth: .5
    });

    $('.carousel').carousel({fullWidth: true});

    $("a[data-cmd='prev']").on('click',function(){
        $('.carousel').carousel('prev');
        console.log("xxx");
    });

    $("a[data-cmd='next']").on('click',function(){
        $('.carousel').carousel('next');
    });

    var services = {
        "web-creation-and-maintenance":{
            "description":"We provide web maintenance services such as:",
            "state":"service",
            "image":"webcreation.png",
            "services":{
                "service1":"Updates to meet your market needs. ",
                "service2":"Overall site performance update",
                "service3":"Product Services/ Ecommerce, and interactive site conversion.",
            }
        },
        "software-solution":{
            "description":"We offer software solutions that can help your organization be more efficient and help minimize your manual labor cost.",
            "state":"solution",
            "image":"software.png",
            "process":{
                "service1":"Review current system and present ideas for improvement, including cost benefit analysis",
                "service2":"Analyze and specify user requirements",
                "service3":"Produce detailed specifications",
                "service1":"Develop software system for the required solution and test the software solution thoroughly",
                "service2":"Prepare user training materials, train users, and present software solution to users",
                "service3":"Install, implement and maintain the software system",
            }
        },
        "digital-marketing-consultancy":{
            "description":"We offer a complete package for Digital Marketing Plan from Website Creation, Social Media Management to SEO link building. ",
            "state":"service",
            "image":"digital.png",
            "services":{
                "service1":"Brand Building",
                "service2":"Website Creation",
                "service3":"Marketing Plan for the next 6 months",
                "service3":"Social Media Management",
                "service3":"SEO",
            }
        },
        "seo":{
            "description":"We provide SEO service to help you improve your website ranking in any search engine.",
            "state":"service",
            "image":"seo.png",
            "services":{
                "service1":"Web server and on-page analysis & reporting",
                "service2":"Keyphrase research and selection",
                "service3":"Meta tags (Title & description)",
                "service3":"Google Analytics traffic analysis",
            }
        },
        "social-media-management":{
            "description":"We offer a complete package for Digital Marketing Plan from Website Creation, Social Media Management to SEO link building. ",
            "state":"service",
            "image":"social.png",
            "services":{
                "service1":"Brand Building",
                "service2":"Website Creation",
                "service3":"Marketing Plan for the next 6 months",
                "service3":"Social Media Management",
                "service3":"SEO",
            }
        }
    }

    $('#modal_services').modal({
        ready:function(e){
            $.fn.fullpage.setMouseWheelScrolling(false);
            $.fn.fullpage.setAllowScrolling(false);
        },
        complete:function(e){
            $.fn.fullpage.setMouseWheelScrolling(true);
            $.fn.fullpage.setAllowScrolling(true);
        }
    });

    $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
    });

    $('.carousel').carousel({fullWidth: true});

    $("a[data-cmd='prev']").on('click',function(){
        $('.carousel').carousel('prev');
        console.log("xxx");
    });

    $("a[data-cmd='next']").on('click',function(){
        $('.carousel').carousel('next');
        console.log("xxx");
    });

    $("a[data-cmd='services']").on('click',function(){
        var data = $(this).data('node');
        var titleContent = "";
        var descriptionContent = "";
        var imageContent = "";
        console.log(data);

        $('#modal_services').modal('open');

        $("#modal_services .modal-content").height("400px").perfectScrollbar({
            suppressScrollX: true,
            wheelPropagation:true
        });

        $("#modal_services").particleground({
            dotColor: '#ccc',
            lineColor: '#eee',
            density:7500,
            parallax:true
        });

        titleContent = $(this).data('services');
        if(services[data].state == "service"){
            $.each(services[data].services,function(i,v){
                descriptionContent += "<li><i class='material-icons'>check_box</i> <span>"+v+"</span></li>";
            })
            imageContent = "<img src='assets/images/services/"+services[data].image+"' width='200'>";
            descriptionContent = services[data].description+"<ul>"+descriptionContent+"</ul>";
        }
        else{
            $.each(services[data].process,function(i,v){
                descriptionContent += "<li><i class='material-icons'>check_box</i> <span>"+v+"</span></li>";
            })
            imageContent = "<img src='assets/images/services/"+services[data].image+"' width='200'>";
            descriptionContent = services[data].description+"<ul>"+descriptionContent+"</ul>";
        }

        $("#modal_services .title").html(titleContent);
        $("#modal_services .image").html(imageContent);
        $("#modal_services .description").html(descriptionContent);
    });

    $("a[data-cmd='processes']").on('click',function(){
        var descriptionContent = "";
        var imageContent = "";
        $('#modal_services').modal('open');

        $("#modal_services .modal-content").height("400px").perfectScrollbar({
            suppressScrollX: true,
            wheelPropagation:true
        });
        imageContent = "<img src='assets/images/rnrdigitalconsultancy2.png' width='300' class='logo'>";
        descriptionContent = "<ul class='contents'>"+
                                "<li>Step 1: Information Gathering"+
                                "   <ul>"+
                                "       <p><i class='material-icons'>fiber_manual_record</i>Set goals for your website</p>"+
                                "       <p><i class='material-icons'>fiber_manual_record</i>Define your target market</p>"+
                                "   </ul>"+
                                "</li>"+
                                "<li>Step 2: Planning"+
                                "   <ul>"+
                                "       <p><i class='material-icons'>fiber_manual_record</i>Create a Sitemap sketch</p>"+
                                "       <p><i class='material-icons'>fiber_manual_record</i>Create a wireframe/mock up site</p>"+
                                "       <p><i class='material-icons'>fiber_manual_record</i>Select Technology to be used (Framework, CMS, Programming Language)</p>"+
                                "   </ul>"+
                                "</li>"+
                                "<li>Step 3: Design"+
                                "   <ul>"+
                                "       <p><i class='material-icons'>fiber_manual_record</i>Create page layouts</p>"+
                                "       <p><i class='material-icons'>fiber_manual_record</i>Review the layouts</p>"+
                                "       <p><i class='material-icons'>fiber_manual_record</i>Get client’s feedback on the layouts</p>"+
                                "   </ul>"+
                                "</li>"+
                                "<li>Step 4: Content Writing and Assembly"+
                                "   <ul>"+
                                "       <p><i class='material-icons'>fiber_manual_record</i>Create new content</p>"+
                                "       <p><i class='material-icons'>fiber_manual_record</i>Get content ready for migration</p>"+
                                "   </ul>"+
                                "</li>"+
                                "<li>Step 5: Coding"+
                                "   <ul>"+
                                "       <p><i class='material-icons'>fiber_manual_record</i>Build and deploy</p>"+
                                "       <p><i class='material-icons'>fiber_manual_record</i>Add special features and interactivity</p>"+
                                "       <p><i class='material-icons'>fiber_manual_record</i>SEO for the website</p>"+
                                "   </ul>"+
                                "</li>"+
                                "<li>Step 6: Testing, Review and Launch"+
                                "   <ul>"+
                                "       <p><i class='material-icons'>fiber_manual_record</i>Test the created website</p>"+
                                "       <p><i class='material-icons'>fiber_manual_record</i>Upload the website to go on live</p>"+
                                "   </ul>"+
                                "</li>"+
                                "<li>Step 7: Maintenance and Regular Updating"+
                                "   <ul>"+
                                "       <p><i class='material-icons'>fiber_manual_record</i>Add user report system</p>"+
                                "       <p><i class='material-icons'>fiber_manual_record</i>Fix bugs asap</p>"+
                                "       <p><i class='material-icons'>fiber_manual_record</i>Keep website up to day</p>"+
                                "   </ul>"+
                                "</li>"+
                             "</ul>";

        $("#modal_services .title").html("Our processes in making brand online");
        // $("#modal_services .image").html(imageContent);
        $("#modal_services .description").html(descriptionContent);
    });

    $("button[data-cmd='portfolio']").on('click',function(){
        var data = $(this).data('site');
        var win = window.open(data,'_blank');
    });

    $("#form_query").validate({
        rules: {
            field_name: {required: true,maxlength: 200},
            field_lastname: {required: true,maxlength: 20},
            field_email: {required: true,maxlength: 100,email:true},
            field_message: {required: true,maxlength: 1000},
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
            console.log(_form);
            var data = system.ajax('assets/harmony/Process.php?set-leads',_form);
            data.done(function(data){
                if(data == 1){
                    Materialize.toast('Thank you. your message has been sent.',2000);
                    system.clearForm();
                    setTimeout(function(){
                        window.location.reload(true);
                    },2000);
                }
                else{
                    Materialize.toast('Cannot process request.',4000);
                }
            });
        }
    });

    $("#form_newsletter").validate({
        rules: {
            field_name: {required: true,maxlength: 200},
            field_email: {required: true,maxlength: 100,email:true},
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
            console.log(_form);
            var data = system.ajax('assets/harmony/Process.php?set-member',_form);
            data.done(function(data){
                console.log(data);
                if(data == 1){
                    Materialize.toast('Thank you subscribing to our newsletter.',2000);
                    system.clearForm();
                    // setTimeout(function(){
                    //     window.location.reload(true);
                    // },2000);
                }
                else{
                    Materialize.toast('Cannot process request.',4000);
                }
            });
        }
    });
    
    // var data = ['.rnr-parallax1','.rnr-parallax2','.rnr-parallax3','.rnr-parallax4','.rnr-parallax5','.rnr-parallax6'];
    // $.each(data,function(i,v){
    //     var scene = $(v).get(0);
    //     var parallax = new Parallax(scene);
    // });
});