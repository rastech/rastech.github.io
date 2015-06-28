//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top >= $(window).height() ) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $("#logo").show();
        $("#joinbeta").hide();
    } else {//if($("#joinbeta").length == 0) {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        if($("#joinbeta").length == 0) {
            $("#logo").after( "<a href='#footer'><button id='joinbeta' type='button' class='btn btn-default joinbeta'> Get Early Access! </button></a>" );
            $("#joinbeta").hide();
        }
        $("#logo").hide();
        $("#joinbeta").show();

    //} else {
      //  $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }

});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});