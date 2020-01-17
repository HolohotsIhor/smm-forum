$(document).ready(function() {
    /* Burger */
    $(".toggle_mnu").click(function() {
        $(".sandwich").toggleClass("active");
    });
    /* Burger. Hover */
    $(".top_mnu ul a").click(function() {
        $(".top_mnu").fadeOut(600);
        $(".sandwich").toggleClass("active");
        $(".top_text").css("opacity", "1");
    });

    /* Burger. Open and close */
    $(".toggle_mnu").click(function() {
        if ($(".top_mnu").is(":visible")) {
            $(".top_text").css("opacity", "1");
            $(".top_mnu").fadeOut(600);
            $(".top_mnu li a").removeClass("fadeInUp animated");
        } else {
            $(".top_text").css("opacity", ".1");
            $(".top_mnu").fadeIn(600);
            $(".top_mnu li a").addClass("fadeInUp animated");
        };
    });

    /* More speakers */
    $(".more-speakers").click(function() {
        $(".command .item-box.hiden-item").css("display", "block");
        $(".btn-wrapp").css("display", "none");
    });
    

    /* Timer */
    var today = new Date();
            var tomorrow = new Date(today.getTime() + (72 * 60 * 60 * 1000));
            var dayTomorrow = tomorrow.getDate();
            var monthTomorrow = tomorrow.getMonth();
            var yearTomorrow = tomorrow.getFullYear();
            var arr=[
            'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'November',
                    'December',
            ];
            var finalMounth = arr[monthTomorrow];

            var now = new Date();
            $('.demo1').dsCountDown({
                endDate: new Date(finalMounth + " " + dayTomorrow + ", " + yearTomorrow + " 12:57:00")
            });

            $(".ds-element.ds-element-seconds").css("display", "none");

    /* Parallax 
    $('.parallax-window').parallax({imageSrc: 'img/background.jpg'}); */

    /* Resize
    function heightDetect(){
        $(".parallax-window").css("height", $(window).height());    
    }
    heightDetect();
    $(window).resize(function(){
        heightDetect();
    });
    */

    /* Scrool animation
    $(window).scroll(function() {

        $('.mov').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 600) {
                $(this).addClass('fadeIn animated');
                $(this).css('opacity', '1');
            }
        });

        $('.mov-left').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 600) {
                $(this).addClass('fadeInLeft animated');
                $(this).css('opacity', '1');
            }
        });

        $('.mov-right').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 600) {
                $(this).addClass('fadeInRight animated');
                $(this).css('opacity', '1');
            }
        });
    });*/
});