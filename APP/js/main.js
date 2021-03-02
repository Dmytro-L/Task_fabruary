


$(document).ready(function() {
    $('.header-mobile__burger').click(function(event) {
        $('.header-mobile__burger').toggleClass('active');
        $('body').toggleClass('lock');
        $('.left-nav').toggleClass('menu');
        
    });
});


