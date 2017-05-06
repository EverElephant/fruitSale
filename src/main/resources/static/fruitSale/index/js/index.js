/**
 * 
 */
jQuery(function() {
	$(".alert_bg,.progress").height($(document).height());
	$(".weixin").on("click", function () {
	    $(".alert_box,.alert_bg").fadeIn(300);
	    //$("body").css("overflow", "hidden");
	});
	var winH = $(window).height();
    var winW = $(window).width();
    $(".alert_navbg").height(winH);
    if(winW<=768){
        $(".navbar-nav").height(winH);
    }
    $(".navbar-toggle").on("click", function () {
        if ($(".navbar_ul").is(":hidden")) {
            $(".alert_navbg").fadeIn();
            //$(".navbar_ul").animate({width: '2.8rem'}).fadeIn(100);
            $(".navbar_ul").fadeIn(100);
            $("body").css("overflow","hidden");
        } else {
            $(".navbar_ul").animate({width: '0'}).fadeOut(100);
        }
    });
    $(".alert_navbg").on("click", function () {
        $(this).fadeOut();
        $(".navbar_ul").fadeOut(100);
        $("body").css("overflow","scroll");

    });
    $(".alert_bg").on("click", function () {
        $(this).fadeOut();
        $(".alert_box").fadeOut();
        $("#weibo").fadeOut();
        $(".entrance").removeClass("click");

        $("body").css("overflow","scroll");

    });
	homepage();
});

function homepage() {
	jQuery(".navbar-nav > li").removeClass("active");
	jQuery("#home_index").addClass("active");
	
	jQuery.ajax({
		type : "POST",
		url : "homepage",
		success : function(data) {
			jQuery("#content_div").html(data);
		}
	});

}

function intro(obj) {
	jQuery(".navbar-nav > li").removeClass("active");
	jQuery("#intro_index").addClass("active");
	var prod = obj;
	var url = "introduce/"+prod;
	jQuery.ajax({
		type : "POST",
		url : url,		
		success : function(data) {
			jQuery("#content_div").html(data);
		}
	});

}
function toBuy(){
	jQuery(".navbar-nav > li").removeClass("active");
	jQuery("#buy_index").addClass("active");
	jQuery.ajax({
		type : "POST",
		url : "to_buy",		
		success : function(data) {
			jQuery("#content_div").html(data);
		}
	});
}
function aboutUs(){
	jQuery(".navbar-nav > li").removeClass("active");
	jQuery("#about_index").addClass("active");
	jQuery.ajax({
		type : "POST",
		url : "about_us",		
		success : function(data) {
			jQuery("#content_div").html(data);
		}
	});
}
function contactUs(){
	jQuery(".navbar-nav > li").removeClass("active");
	jQuery("#contact_index").addClass("active");
	jQuery.ajax({
		type : "POST",
		url : "contact_us",
		success : function(data) {
			jQuery("#content_div").html(data);
		}
	});
}