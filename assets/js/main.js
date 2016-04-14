$(function () {
    var viewwidth = $(window).width();

    var controller = new ScrollMagic.Controller();

    var wipeAnimation = new TimelineMax()

    .to("#innerwrapper", 1, {x: -(5364 - (viewwidth * 2)) + "px"})
    .to("#innerwrapper", 1, {x: -(5364 - viewwidth) + "px"})

    new ScrollMagic.Scene({
        triggerElement: "#wrapper",
        triggerHook: "onLeave",
        duration: "500%"
    })

    .setPin("#wrapper")
    .setTween(wipeAnimation)
    .addIndicators()
    .addTo(controller);

    // // change behaviour of controller to animate scroll instead of jump
    // controller.scrollTo(function (newpos) {
    //     TweenMax.to(window, 0.5, {scrollTo: {x: newpos}});
    // });

    // $(document).on("click", "a[href^='#']", function (e) {
    //     var id = $(this).attr("href");
    //     if ($(id).length > 0) {
    //         e.preventDefault();

    //         // trigger scroll
    //         controller.scrollTo(id);

    //             // if supported by the browser we can even update the URL.
    //         if (window.history && window.history.pushState) {
    //             history.pushState("", document.title, id);
    //         }
    //     }
    // });
});

