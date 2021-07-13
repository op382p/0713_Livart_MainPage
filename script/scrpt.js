/* eslint-disable */

$(function () {

    $("li.mainLi").mouseover(function () {
        $("ul.subMenu").stop().slideDown(500);
        $("div#gnbBG").stop().slideDown(500);
    });
    $("li.mainLi").mouseout(function () {
        $("ul.subMenu").stop().slideUp(500);
        $("div#gnbBG").stop().slideUp(500);
    });
    
    setInterval(fnSlide, 3000);

    function fnSlide() {
        $("div#shuttleFrame").animate({
                "margin-left": "-1200px"
            },
            3000,
            function () {
                $("#shuttleFrame>a:nth-child(1)")
                    .insertAfter("#shuttleFrame>a:nth-child(3)");
                $("#shuttleFrame").css({
                    "margin-left": "0"
                });
            }
        );


    }


});
