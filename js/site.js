var isTouch = window.DocumentTouch && document instanceof DocumentTouch;

function scrollHeader() {
    // Has scrolled class on header
    var zvalue = $(document).scrollTop();
    if ( zvalue > 75 ) {
        $("#header").addClass("scrolled");
        $(".headerlike").addClass("scrolled");
    } else {
        $("#header").removeClass("scrolled");
        $(".headerlike").removeClass("scrolled");
    }

}

function parallaxBackground() {
    $('.parallax').css('background-positionY', ($(window).scrollTop() * 0.3) + 'px');
}

jQuery(document).ready(function($){

    scrollHeader();

    // Scroll Events
    if (!isTouch){
        $(document).scroll(function() {
            scrollHeader();
            parallaxBackground();
        });
    };

    // Touch scroll
    $(document).on({
        'touchmove': function(e) {
            scrollHeader(); // Replace this with your code.
        }
    });

    //Smooth scroll to start
    $('#to-start').click(function(){
        var start_y = $('#start').position().top;
        var header_offset = parseInt($('#header').css('min-height'));
        window.scroll({ top: start_y - header_offset, left: 0, behavior: 'smooth' });
        return false;
    });

    //Smooth scroll to top
    $('#to-top').click(function(){
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        return false;
    });

    // Responsive Menu
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
        $('body').toggleClass('mobile-nav-open');
    });

    // Tree Menu
    $(".tree").treemenu({delay:300});


    // Combo Box Language Switcher
    $(function(){
        // bind change event to select
        $('.langswitcher-combo').on('change', function () {
            var url = $(this).val(); // get selected value
            if (url) { // require a URL
                window.location = url; // redirect
            }
            return false;
        });
    });

    // Navbar search bar
    $('.navsearch-btn').click(function() {
        var bar = $(".navsearch-bar");
        
        if (!bar.hasClass("active")) {
            bar.addClass("active");
            $(".navsearch").addClass("active");
            $('.navsearch-btn').addClass("active");
            bar.focus();
        } else {
            // $(".navsearch").removeClass("active");
            // $('.navsearch-btn').removeClass("active");
            // $('.navsearch-form').removeClass("active");
            $(".navsearch").trigger("submit");
        }
    });

    // $('.navsearch-form').submit(function() {
    //     $(".navsearch").removeClass("active");
    //     $('.navsearch-btn').removeClass("active");
    //     $('.navsearch-form').removeClass("active");
    // });
});
