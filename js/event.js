// ======== single click =============
$(document).ready(function(){
    $(".hideSingle").click(function(){
        $(".hide_one_one").hide();
    });
});
$(document).ready(function(){
    $(".showSingle").click(function(){
        $(".hide_one_one").show();
    });
});


// ======== double click =============
$(document).ready(function(){
    $(".hideDouble").dblclick(function(){
        $(".hide_one_two").hide();
    });
});
$(document).ready(function(){
    $(".showDouble").dblclick(function(){
        $(".hide_one_two").show();
    });
});

// ======== toggle click =============
$(document).ready(function(){
    $(".toggle").click(function(){
        $(".hide_one_three").toggle();
    });
});


// ======== mouse Enter =============
$(document).ready(function(){
    $(".hide_one_four").mouseenter(function(){
        $(this).css("background","blue");
    });
});
$(document).ready(function(){
    $(".hide_one_four").mouseleave(function(){
        $(this).css("background","violet");
    });
});

// ========= mouse down ========
$(document).ready(function(){
    $(".hide_one_five").mousedown(function(){
        $(this).css("background","black");
    });
});
// ========= mouse up ========
$(document).ready(function(){
    $(".hide_one_six").mouseup(function(){
        $(this).css("background","red");
    });
});
// ========= mouse hover ========
$(document).ready(function(){
    $(".hide_one_seven").hover(function(){
        $(this).css("background","red");
    },function(){
        $(this).css("background","blue");

    });
});
// ========= focus & blur ========
$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background", "yellow")
    });
    $("input").blur(function(){
        $(this).css("background", "red")            
    });
});

// ========= on method ========
$(document).ready(function(){
    $(".hide_multiple").one("click", function(){
        $(this).hide();
    });
});

$(document).ready(function(){
    $(".hide_one_ten").on({
        mouseenter: function(){
            $(this).css("background", "red")
        },
        click: function(){
            $(this).css("background", "yellow")
        },
        mouseleave: function(){
            $(this).css("background", "green")
        }
    });
});

$(document).ready(function(){
    $(".hide_one_ten").on({
        mouseleave: function(){
            $(this).css("color", "black")
            $(this).css("fontSize", "25px")
        }
    })
})