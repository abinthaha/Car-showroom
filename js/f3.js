function setVideoSize(){
    var h, w;
    h = $(window).height();
    w = $(window).width();
    $('.full-page-block').css("height",h);
}



$(document).ready(function () {
   setVideoSize();
    $(window).resize(setVideoSize());
    $("#pull-out-menu").hide();
    $("#drop-down-menu").click(function(){
        $("#pull-out-menu").slideDown();
    });
    $("#pull-out-menu").click(function(){
         $("#pull-out-menu").slideUp('slow');
    });
    $(".menu-button").click(function(){
        var todiv;
        todiv = "#"+$(this).data("id");
        $('html,body').animate({ scrollTop: $(todiv).offset().top }, 'slow');
       // $(window).scrollTop($(todiv).offset().top);
    });
});