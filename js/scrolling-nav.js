//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        if($("#joinbeta").length == 0) {
            $("#logo").after( "<a href='index.html#footer'><button id='joinbeta' type='button' class='btn btn-default joinbeta'> Join the Beta! </button></a>" );
            $("#joinbeta").hide();
        }
        $("#logo").hide();
        $("#joinbeta").show();
    } else {//if($("#joinbeta").length == 0) {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $("#logo").show();
        $("#joinbeta").hide();

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