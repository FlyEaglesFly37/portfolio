$(document).ready(function() {
    if (screen-width > 800){

    
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 300){
            $('#about p').fadeIn(1400);
        } else {
            $('#about p').fadeOut();
        }
    });
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 300){
            $('#about h1').fadeIn(1400);
        } else {
            $('#about h1').fadeOut();
        }
    });
    } else {
        continue;
    }
});