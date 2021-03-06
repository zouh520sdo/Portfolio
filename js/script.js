var menuHeight;

$(document).ready(function () {
    
    menuWidth = $("#logo").width();
    menuHeight = $("#menu").height();
    $("#menu").css("width", menuWidth).css("top", -menuHeight);
    
    $("#habbit img").hover(function () {
        $(this).siblings().animate({
            opacity: "1",
            bottom: "0px",
        });
    }, function () {
        $(this).siblings().animate({
            opacity: "0",
            bottom: "20px",
        })
    });

    $("#role img").hover(function () {
        $(this).siblings().animate({
            opacity: "1",
            bottom: "0px",
        });
    }, function () {
        $(this).siblings().animate({
            opacity: "0",
            bottom: "20px",
        })
    });

    /*
    $("#habbit #badminton img").hover(function () {
        $("#habbit #badminton img").fadeTo("medium", 0.8);
    }, function () {
        $("#habbit #badminton img").fadeTo("medium", 1.0);
    });

    $("#habbit #brainstorm img").hover(function () {
        $("#habbit #brainstorm img").fadeTo("medium", 0.8);
    }, function () {
        $("#habbit #brainstorm img").fadeTo("medium", 1.0);
    });
    */
    
    $("#portrait #text").hide();
    $("#portrait #img").addClass("col-sm-offset-3").click(function () {
        if ($(this).hasClass("slidable")) {
            $(this).slideUp(700, function () {
                $(this).removeClass("col-sm-offset-3");
                $("#portrait #img p").hide();
                $(this).slideDown(700);
                $("#portrait #text").slideDown(700);
                $("#portrait #img").removeClass("slidable");
            });
        }
    });
});

$(window).mousemove(function(e) {
    
    if (e.clientY < menuHeight) {
        $("#menu").css("top", 0);
    }
    else {
        $("#menu").css("top", -menuHeight);
    }
});

$(window).resize(function() {
    menuWidth = $("#logo").width();
    $("#menu").css("width", menuWidth);
});