// JavaScript Document

$(window).load(function() {    

	var theWindow        = $(window),
	    $bg              = $("#bg"),
	    aspectRatio      = $bg.width() / $bg.height();
	    			    		
	function resizeBg() {
		
		if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
		    $bg
		    	.removeClass()
		    	.addClass('bgheight');
		} else {
		    $bg
		    	.removeClass()
		    	.addClass('bgwidth');
		}
					
	}
	                   			
	theWindow.resize(resizeBg).trigger("resize");

});


var  mn = $(".main-nav");
    mns = "main-nav-scrolled";
    hdr = $('header').height();
	bgh = $('bg').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > bgh ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});



$(function() {
    $(window).scroll( function(){
    
       
        $('.sticky').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            bottom_of_window = bottom_of_window + 200;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1000);
                    
            }
        }); 
    
    });
});




tiles = $("#whatisg p").fadeTo(0,0);

$(window).scroll(function(d,h) {
    tiles.each(function(i) {
        a = $(this).offset().top + $(this).height();
        b = $(window).scrollTop() + $(window).height();
        if (a < b) $(this).fadeTo(800,1);
    });
});


(function($){$.fn.craftyslide=function(options){var defaults={"width":800,"height":400,"pagination":true,"fadetime":350,"delay":5000};var options=$.extend(defaults,options);return this.each(function(){var $this=$(this);var $slides=$this.find("ul li");$slides.not(':first').hide();function paginate(){$this.append("<ol id='pagination' />");var i=1;$slides.each(function(){$(this).attr("id","slide"+i);$("#pagination").append("<li><a href='#slide"+i+"'>"+i+"</a></li>");i++;});$("#pagination li a:first").addClass("active");}function captions(){$slides.each(function(){$caption=$(this).find("img").attr("title");if($caption!==undefined){$(this).prepend("<p class='caption'>"+$caption+"</p>");}$slides.filter(":first").find(".caption").css("bottom",0);});}function manual(){var $pagination=$("#pagination li a");$pagination.click(function(e){e.preventDefault();var $current=$(this.hash);if($current.is(":hidden")){$slides.fadeOut(options.fadetime);$current.fadeIn(options.fadetime);$pagination.removeClass("active");$(this).addClass("active");$(".caption").css("bottom","-37px");$current.find(".caption").delay(300).animate({bottom:0},300);}});}function auto(){setInterval(function(){$slides.filter(":first-child").fadeOut(options.fadetime).next("li").fadeIn(options.fadetime).end().appendTo("#slideshow ul");$slides.each(function(){if($slides.is(":visible")){$(".caption").css("bottom","-37px");$(this).find(".caption").delay(300).animate({bottom:0},300);}});},options.delay);}$this.width(options.width);$this.find("ul, li img").width(options.width);$this.height(options.height);$this.find("ul, li").height(options.height);if(options.pagination===true){paginate();}else{auto();}captions();manual();});};})(jQuery);






tiles2 = $("#header2 h1").fadeTo(0,0);

$(window).scroll(function(d,h) {
    tiles2.each(function(i) {
        a = $(this).offset().top + $(this).height();
        b = $(window).scrollTop() + $(window).height();
        if (a < b) $(this).fadeTo(800,1);
    });
});

tiles3 = $("#whatisg h1").fadeTo(0,0);

$(window).scroll(function(d,h) {
    tiles3.each(function(i) {
        a = $(this).offset().top + $(this).height();
        b = $(window).scrollTop() + $(window).height();
        if (a < b) $(this).fadeTo(800,1);
    });
});

tiles4 = $("#news h1").fadeTo(0,0);

$(window).scroll(function(d,h) {
    tiles4.each(function(i) {
        a = $(this).offset().top + $(this).height();
        b = $(window).scrollTop() + $(window).height();
        if (a < b) $(this).fadeTo(800,1);
    });
});

tiles5 = $("#creator h1").fadeTo(0,0);

$(window).scroll(function(d,h) {
    tiles5.each(function(i) {
        a = $(this).offset().top + $(this).height();
        b = $(window).scrollTop() + $(window).height();
        if (a < b) $(this).fadeTo(800,1);
    });
});










;(function(){
  function id(v){ return document.getElementById(v); }
  function loadbar() {
    var ovrl = id("overlay"),
        prog = id("progress"),
        stat = id("progstat"),
        img = document.images,
        c = 0;
        tot = img.length;

    function imgLoaded(){
      c += 1;
      var perc = ((100/tot*c) << 0) +"%";
      prog.style.width = perc;
      stat.innerHTML = "Loading "+ perc;
      if(c===tot) return doneLoading();
    }
    function doneLoading(){
      ovrl.style.opacity = 0;
      setTimeout(function(){ 
        ovrl.style.display = "none";
      }, 1200);
    }
    for(var i=0; i<tot; i++) {
      var tImg     = new Image();
      tImg.onload  = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src     = img[i].src;
    }    
  }
  document.addEventListener('DOMContentLoaded', loadbar, false);
}());



$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});




$('.burger').on('click', function(){
  if( $(this).is('.expand')){
    $('nav').fadeOut('fast');
    $(this).delay(100).queue(function(){
      $(this).removeClass('expand').dequeue();
    });
  } else{
    $(this).delay(100).queue(function(){
      $(this).addClass('expand').dequeue();
    });
    $('nav').delay(200).fadeIn('fast');
  }
});


jQuery(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});

/***************************************************ABOUT*************************************************************/

$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});


/***************************************************CONTACT*************************************************************/


$("#faqs dd").hide();
    $("#faqs dt").click(function () {
        $(this).next("#faqs dd").slideToggle(500);
        $(this).toggleClass("expanded");
    });


var url = 'http://tutorialzine.com/2014/08/cool-share-jquery-plugin/';

var options = {

    twitter: {
        text: 'Check out this awesome jQuery Social Buttons Plugin! ',
        via: 'Tutorialzine'
    },

    facebook : true,
    googlePlus : true
};

$('.socialShare').shareButtons(url, options);


new Share(".share-button", {
  networks: {
    facebook: {
      app_id: "abc123"
    }
  }
});

var share = new Share(".share-button");

share.toggle(); // toggles the share button popup
share.open();   // open the share button popup
share.close();  // closes the share button popup
share.config;   // exposes the configurations lis








 
