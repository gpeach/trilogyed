require('./jquery-color');
require('./bgswitcher');
import Parallax from 'parallax-scroll';


const parallaxBgInstance = new Parallax('.js-parallax-bg', {
    speed: 0.5 // Anything over 0.5 looks silly 
});

parallaxBgInstance.animate();

$('#herobox').bgswitcher({
    images: ["images/code_hero.jpg", "images/data_hero.jpg"],
    effect: "fade",
    interval: 5000
});

$('#learn2').bgswitcher({
    images: ["images/mobile/code_mobile_hero.jpg", "images/mobile/data_mobile_hero.jpg"],
    effect: "fade",
    interval: 5000
});



$(document).ready(function () {
//$("#learn2 #learntext1")
//                .css("opacity", '0');
    setInterval(function () {
        $("#learn2 #learntext1")
                .animate({opacity: "1"}, 500)
                .delay(4500)
                .animate({opacity: "0"}, 500)
                .delay(4500);

        $("#learn2 #learntext2")
                .animate({opacity: "0"}, 500)
                .delay(4500)
                .animate({opacity: "1"}, 500)
                .delay(4500);

//        $("#hero #learn2")
//                .css('background-image', 'url(images/mobile/code_mobile_hero.jpg)')
//                .delay(5000)
//                .css('background-image', 'url(images/mobile/data_mobile_hero.jpg)')
//                .delay(5000);

        $("#herobox #coding")
                .animate({top: "+=180px"}, 500)
                .delay(4500)
                .animate({top: "-=180px"}, 500)
                .delay(4500);

        $("#herobox #data")
                .animate({top: "-=180px"}, 500)
                .delay(4500)
                .animate({top: "+=180px"}, 500)
                .delay(4500);

        $("#codingheadline")
                .animate({color: "white"}, 500)
                .delay(4500)
                .animate({color: "#38bcdb"}, 500)
                .delay(4500);

        $("#dataheadline")
                .animate({color: "#38bcdb"}, 500)
                .delay(4500)
                .animate({color: "white"}, 500)
                .delay(4500);

        $("#codingline")
                .animate({backgroundColor: "white"}, 500)
                .delay(4500)
                .animate({backgroundColor: "#38bcdb"}, 500)
                .delay(4500);

        $("#dataline")
                .animate({backgroundColor: "#38bcdb"}, 500)
                .delay(4500)
                .animate({backgroundColor: "white"}, 500)
                .delay(4500);
    }, 5000);
});
