/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(document).ready(function(){

	// MOUNT HOLYOKE
	$("#logo_mtholyoke").mouseover(function() { 
        $(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/color/Logo_MountHolyoke_withWords.png');
            $(this).fadeIn();
        });
	}).mouseout(function() {
		$(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/black/Logo_MountHolyoke_withWords.png');
            $(this).fadeIn();
	    });
	});
	
	// MASTERCARD
	$("#logo_mastercard").mouseover(function() { 
        $(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/color/Logo_MasterCard.png');
            $(this).fadeIn();
        });
	}).mouseout(function() {
		$(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/black/Logo_MasterCard.png');
            $(this).fadeIn();
	    });
	});

	// GOOGLE
	$("#logo_google").mouseover(function() { 
        $(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/color/Logo_Google.png');
            $(this).fadeIn();
        });
	}).mouseout(function() {
		$(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/black/Logo_Google.png');
            $(this).fadeIn();
	    });
	});

	// SGA
	$("#logo_sga").mouseover(function() { 
        $(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/color/Logo_SGA.png');
            $(this).fadeIn();
        });
	}).mouseout(function() {
		$(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/black/Logo_SGA.png');
            $(this).fadeIn();
	    });
	});

	// INTEL
	$("#logo_intel").mouseover(function() { 
        $(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/color/Logo_Intel.png');
            $(this).fadeIn();
        });
	}).mouseout(function() {
		$(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/black/Logo_Intel.png');
            $(this).fadeIn();
	    });
	});

	// JPM
	$("#logo_jpm").mouseover(function() { 
        $(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/color/Logo_JPM.png');
            $(this).fadeIn();
        });
	}).mouseout(function() {
		$(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/black/Logo_JPM.png');
            $(this).fadeIn();
	    });
	});

	// NSF
	$("#logo_nsf").mouseover(function() { 
        $(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/color/Logo_NSF.png');
            $(this).fadeIn();
        });
	}).mouseout(function() {
		$(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/black/Logo_NSF.png');
            $(this).fadeIn();
	    });
	});

	// MLH
	$("#logo_mlh").mouseover(function() { 
        $(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/color/Logo_MLH.png');
            $(this).fadeIn();
        });
	}).mouseout(function() {
		$(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/black/Logo_MLH.png');
            $(this).fadeIn();
	    });
	});

	// ESTIMOTE
	$("#logo_estimote").mouseover(function() { 
        $(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/color/Logo_Estimote.png');
            $(this).fadeIn();
        });
	}).mouseout(function() {
		$(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/black/Logo_Estimote.png');
            $(this).fadeIn();
	    });
	});

	// CIMPRESS
	$("#logo_cimpress").mouseover(function() { 
        $(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/color/Logo_Cimpress.png');
            $(this).fadeIn();
        });
	}).mouseout(function() {
		$(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/black/Logo_Cimpress.png');
            $(this).fadeIn();
	    });
	});

	// ADDTEQ
	$("#logo_addteq").mouseover(function() { 
        $(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/color/Logo_Addteq.png');
            $(this).fadeIn();
        });
	}).mouseout(function() {
		$(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/black/Logo_Addteq.png');
            $(this).fadeIn();
	    });
	});

	// SQUARE
	$("#logo_square").mouseover(function() { 
        $(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/color/Logo_Square.png');
            $(this).fadeIn();
        });
	}).mouseout(function() {
		$(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/black/Logo_Square.png');
            $(this).fadeIn();
	    });
	});

	// GITHUB
	$("#logo_github").mouseover(function() { 
        $(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/color/Logo_GitHub.png');
            $(this).fadeIn();
        });
	}).mouseout(function() {
		$(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/black/Logo_GitHub.png');
            $(this).fadeIn();
	    });
	});

	// HACKERRANK
	$("#logo_hackerrank").mouseover(function() { 
        $(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/color/Logo_HackerRank.png');
            $(this).fadeIn();
        });
	}).mouseout(function() {
		$(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/black/Logo_HackerRank.png');
            $(this).fadeIn();
	    });
	});

	// AIRBNB
	$("#logo_airbnb").mouseover(function() { 
        $(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/color/Logo_Airbnb.png');
            $(this).fadeIn();
        });
	}).mouseout(function() {
		$(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/black/Logo_Airbnb.png');
            $(this).fadeIn();
	    });
	});

	// TWITTER
	$("#logo_twitter").mouseover(function() { 
        $(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/color/Logo_Twitter.png');
            $(this).fadeIn();
        });
	}).mouseout(function() {
		$(this).fadeOut(function(){
            $(this).attr("src", 'img/sponsors/black/Logo_Twitter.png');
            $(this).fadeIn();
	    });
	});
});