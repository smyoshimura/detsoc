$(function () {
    var viewwidth = $(window).width();
    var viewheight = $(window).height();
    $("#wrapper").css("width", viewwidth + "px");

    $(window).resize(function() {
        viewwidth = $(window).width();
        viewheight = $(window).height();
        $("#wrapper").css("width", viewwidth + "px");
        $("#innerwrapper").css("width", (viewwidth * 3) + "px");
    });

    var controller = new ScrollMagic.Controller();

    if (viewheight > 768) {
        var wipeAnimation = new TimelineMax()
        .to("#innerwrapper", 1, {x: -(5364 - (viewwidth * 2)) + "px"})
        .to("#innerwrapper", 1, {x: -(5364 - viewwidth) + "px"})
    }
    else {
        var wipeAnimation = new TimelineMax()
        .to("#innerwrapper", 1, {x: -(3814 - (viewwidth * 2)) + "px"})
        .to("#innerwrapper", 1, {x: -(3814 - viewwidth) + "px"})
    }

    new ScrollMagic.Scene({
        triggerElement: "#wrapper",
        triggerHook: "onLeave",
        duration: "400%"
    })

    .setPin("#wrapper")
    .setTween(wipeAnimation)
    .addTo(controller);

    var $window = $(window);
    var scrollTime = 0.1;
    var scrollDistance = 100;

    $window.on("mousewheel DOMMouseScroll", function(event){

        if (viewheight <= 768) {
            event.preventDefault(); 

            var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
            var scrollTop = $window.scrollTop();
            var finalScroll = scrollTop - parseInt(delta*scrollDistance);

            TweenMax.to($window, scrollTime, {
                scrollTo : { y: finalScroll, autoKill:true },
                    //ease: Power1.easeOut,
                    overwrite: 5                            
                });
        }
    });
});