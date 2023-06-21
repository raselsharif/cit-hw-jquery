$(document).ready(function () {
    // ========== hide & show ==========
    $(".hide").click(function () {
        $(".hide_one").hide(1000);
    });
    $(".show").click(function () {
        $(".hide_one").show(2000);
    });
    $(".toggle").click(function () {
        $(".hide_one").toggle(1000);
    });

    // ========== fade effect ==========
    $(".fadeIn").click(function () {
        $(".fade").fadeIn(1000);
    });
    $(".fadeOut").click(function () {
        $(".fade").fadeOut(1000);
    });
    $(".fadeToggle").click(function () {
        $(".fade").fadeToggle(1000);
    });
    $(".fadeTo").click(function () {
        $(".fade").fadeTo(1000, 0.4);
    });

    // ========== slide effect ==========
    $(".slideUp").click(function () {
        $(".slide").slideUp("slow");
    });
    $(".slideDown").click(function () {
        $(".slide").slideDown("slow");
    });
    $(".slideToggle").click(function () {
        $(".slide").slideToggle("slow");
    });

    // ========== animation ==========
    $(".aniToRight").click(function () {
        $(".toRight").animate({
            right: "250px",
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
    });

    $(".sizeBig").click(function () {
        $(".toRight").animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'
        });
    });

    $(".sizeSmall").click(function () {
        $(".toRight").animate({
            left: '250px',
            height: '-=150px',
            width: '-=150px'
        });
    });

    $(".heightToggle").click(function () {
        $(".toRight").animate({
            height: 'toggle',
        });
    });

    $(".queue").click(function () {
        let div = $(".queueOne");
        div.animate({ height: '300px', opacity: '0.4' }, "slow");
        div.animate({ width: '300px', opacity: '0.8' }, "slow");
        div.animate({ height: '100px', opacity: '0.4' }, "slow");
        div.animate({ width: '100px', opacity: '0.8' }, "slow");
    });
    $(".queueFont").click(function () {
        let font = $(".queueFontDisplay");
        font.animate({ right: '100px' }, "slow");
        font.animate({ fontSize: '3em' }, "slow");
    });

    $("#stop").click(function () {
        $("#panel").stop();
    });
    $("#start").click(function () {
        $("#panel").slideDown(6000);
    });

    // ========== callback function ==========
    $(".callBack").click(function () {
        $(".slideCallBack").hide(1000, function () {
            $(".slideMsg").text("Your slide is hidden now.")
            $(".slideMsg").css("fontSize", "20px")
            $(".slideMsg").css("color", "red")
        });        
    });
    
});

// ========== callback function ==========
$(document).ready(function () {

    $(".chain").click(function () {
        $(".chaining").css("color", "red")
            .slideUp(1000)
            .slideDown(1000);
    });
});