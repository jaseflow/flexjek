$(document).ready(function() {
    var s = $("body");
    var pos = s.position();                    
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        //$("#header_left").html("Distance from top:" + pos.top + "<br />Scroll position: " + windowpos);
        if (windowpos >= 20) {
            s.addClass("minimal");
        } else {
            s.removeClass("minimal"); 
        }
    });

    $(".back-up").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });

});