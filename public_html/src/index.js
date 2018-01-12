require('./jquery-color');
require('bootstrap');
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

$(document).ready(function () {

    setInterval(function () {
        $("#herobox #coding")
                .animate({top: "+=150px"}, 500)
                .delay(4500)
                .animate({top: "-=150px"}, 500)
                .delay(4500);

        $("#herobox #data")
                .animate({top: "-=150px"}, 500)
                .delay(4500)
                .animate({top: "+=150px"}, 500)
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
