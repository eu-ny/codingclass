$(function () {
    //header menu--------------------------------------------------------
    $("header nav >ul").mouseenter(function () {
        $("ul.lv2").slideDown(800);
    });

    $("header nav >ul").mouseleave(function () {
        $("ul.lv2").stop().slideUp(500);
    });

    //slide---------------------------------------------------------------
    setInterval(function () {
        $(".slideWrap").animate({ "margin-top": "-300" }, function () {
            $(".slide:first").appendTo(".slideWrap");
            $(".slideWrap").css({ "margin-top": "0" });
        });
    }, 3000);

    //tab-----------------------------------------------------------------
    $(".tabMenu li").click(function () {
        var idx = $(this).index();

        $(".tabItem >*").hide().removeClass("on");
        $(".tabItem >*").eq(idx).show().addClass("on");

        $(".tabMenu li").removeClass("on");
        $(this).addClass("on");
    });

    //popUpBox---------------------------------------------------------
    $(".notice li:nth-child(1)").click(function () {
        $(".popUpBox").show();
    });

    $(".popUpBox button").click(function () {
        $(".popUpBox").hide();
    });
});
