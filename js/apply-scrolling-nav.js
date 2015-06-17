//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        if($("#joinbeta").length == 0) {
            $("#logo").after( "<a href='mailto:careers@meta.sc?Subject=Working%20On%20Meta&body=I%20am%20interested%20in%20learning%20more%20about%20your%20career%20opportunities.%0D%0A%0D%0AThank%20you,''><button id='joinbeta' type='button' class='btn btn-default joinbeta'> Join Us, Apply! </button></a>" );
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

