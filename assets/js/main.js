$(function () {

    var viewwidth = $(window).width();

    var controller = new ScrollMagic.Controller();

    var wipeAnimation = new TimelineMax()

    .to("#innerwrapper", 1, {x: "-33.33%"})
    .to("#innerwrapper", 1, {x: "-66.66%"})

    new ScrollMagic.Scene({
        triggerElement: "#wrapper",
        triggerHook: "onLeave",
        duration: "400%"
    })

    .setPin("#wrapper")
    .setTween(wipeAnimation)
    .addIndicators()
    .addTo(controller);
});