function setVideoSize(){
    var h, w;
    h = $(window).height();
    w = $(window).width();
    
}



$(document).ready(function () {
   setVideoSize();
    $(window).resize(setVideoSize());
});