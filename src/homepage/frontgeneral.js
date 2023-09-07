/*---------------------------------------------------------------------*/
;
(function($){

    /*================= Global Variable Start =================*/		   
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    var IEbellow9 = !$.support.leadingWhitespace;
    var iPhoneAndiPad = /iPhone|iPod/i.test(navigator.userAgent);
    var isIE = navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0;
    function isIEver () {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
    }
		   
    var jsFolder = "js/";
    var cssFolder = "../public/css/frontendcss/";	
    var ww = document.body.clientWidth, wh = document.body.clientHeight;
    var mobilePort = 959, ipadView = 1024, wideScreen = 1600;

    //if (isIEver () == 8) {}
    /*================= Global Variable End =================*/	

    //css3 style calling 
    //document.write('<link rel="stylesheet" type="text/css" href="' + cssFolder +'animate.css">');	

    /*================= On Document Load Start =================*/	
    $(document).ready( function(){
        
        burstCache();
          
        $('body').removeClass('noJS').addClass("hasJS");
        $(this).scrollTop(0);
        getWidth();
	
        //Set Element to vertical center using padding
        $.fn.verticalAlign = function () {
            return this.css("padding-top", ($(this).parent().height() - $(this).height()) / 2 + 'px');
        };
	 
        setTimeout(function(){
            $('.vCenter').each(function () {
                $(this).verticalAlign();
            });
        }, 800);
	
			
        // Skip to Content - Home
        if($('.skipContent').length > 0){
            $('.skipContent').click(function(){
                $('html, body').animate({
                    scrollTop: $('#container').offset().top
                }, 350);
            });	   
        }
		
		
        
        if ($(".sliderBanner").length) {
            var owl = $(".sliderBanner");
            owl.owlCarousel({
                /*loop: true,
                autoplay: true,
                autoplayTimeout: 3000,
                smartSpeed: 1200,
                items: 1,
                nav: false,
                dots: false,
                mouseDrag: false,
                //animateOut:"owlFadeOut"*/
                loop:autoplay
                ,autoplay:true
                ,mouseDrag:autoplay
                ,autoplayTimeout:3000
                ,autoplaySpeed:800
                ,smartSpeed:1200
                ,nav:false	
                ,items : 1
                ,autoplayHoverPause: true
                ,dots : false
                /*animateOut: 'owlFadeOut'
    		,animateIn: 'owlFadeIn'*/
            });


            $('.customNext').click(function() {
                $('.owlPlay').hide();
                $('.owlStop').show();
                owl.trigger('next.owl.carousel');			
            });
            $('.customPrev').click(function() {
                $('.owlPlay').hide();
                $('.owlStop').show();
                owl.trigger('prev.owl.carousel', [300]);
            });
            $('.owlPlay').on('click',function(){
                $('.owlPlay').hide();
                $('.owlStop').show();
                owl.trigger('play.owl.autoplay', '3000');
            });
            $('.owlStop').on('click',function(){
                $('.owlStop').hide();
                $('.owlPlay').show();
                owl.trigger('stop.owl.autoplay');
            });
		
            $('.sliderBanner .item').each(function(){
                var src = $(this).find('img').attr('src');
                $(this).css('backgroundImage','url('+src+')');
            });
           
        }
       
        // Inner Banner Slider	
        if( $(".slider").length) {
            var owl2 = $(".slider");
            var autoplay;
            if (owl2.children().length == 1) {
                autoplay = false
            }
            else {
                autoplay = true
            }
		
            owl2.owlCarousel({
                loop:autoplay
                ,
                autoplay:autoplay
                ,
                mouseDrag:autoplay
                ,
                autoplayTimeout:3000
                ,
                autoplaySpeed:800
                ,
                smartSpeed:1200
                ,
                nav:autoplay
                ,
                dots:autoplay
                ,
                items : 1
                ,
                autoplayHoverPause: true
                //dots : false		
                ,
                onInitialized: function(event) {
                    if (owl2.children().length > 1) { 
                }
                }
            });		
		
        };
	
	
        if( $(".carouselBlock").length) {
            var owl3 = $('.carouselBlock');
            owl3.owlCarousel({
                loop:true
                ,
                autoplay:true
                ,
                autoplayTimeout:3000
                ,
                smartSpeed:1200
                ,
                margin:10
                ,
                nav:true
                ,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:5
                    }
                }
            })
        };
	
	
        /*Footer Logo Slider*/
        /*if ($(".footerLogoList").length > 0) {
		var owl4 = $('.footerLogoList');
		owl4.owlCarousel({
			loop: false,
			items: 5,
			nav: true,
			dots: false,
			autoplay: false,
			mouseDrag: true,
			//itemElement: 'li',
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					nav: true,
					loop: true,
					autoplay: true
				},
				568: {
					items: 2,
					nav: true,
					loop: true,
					autoplay: true
				},
				800: {
					items: 3,
					nav: true,
					loop: true,
					autoplay: true
				},
				1070: {
					items: 4,
					nav: true,
					loop: true,
					autoplay: true
				},
				1169: {
					items: 5,
					nav: false,
					loop: false,
					mouseDrag: false,
					//autoWidth:true
				}
			}
		});
	}*/
	
        // Custom Select Box
	if( $('.customSelectBox select').length){
		$('.customSelectBox select').wrap('<div class="selectBoxDiv"></div>');
		$('.customSelectBox select').customSelect();
	}
	
        if( $(".marqueeScrolling li").length > 1){
            var $mq = $('.marquee').marquee({
                speed: 25000
                ,
                gap: 0
                ,
                duplicated: true
                ,
                pauseOnHover: true
            });
            $(".btnMPause").toggle(function(){
                $(this).addClass('play');
                $(this).text('Play');
                $mq.marquee('pause');
            },function(){
                $(this).removeClass('play');
                $(this).text('Pause');
                $mq.marquee('resume');
                return false;
            });
        };
	
        // News & Updates Ticker  
        if( $(".newsUpdatesTicker").length){
            $('.newsUpdatesTicker').each(function(i){
                $(this).addClass('tickerDiv'+i).attr('id', 'ticker'+i);
                $('#ticker'+i).find('.tickerDivBlock').first().addClass('newsTikker'+i).attr('id', 'newsTikker'+i);
                $('#ticker'+i).find('a.playPause').attr('id', 'stopNews'+i)
                $('#newsTikker'+i).vTicker({
                    speed: 1E3, 
                    pause: 4E3, 
                    animation: "fade", 
                    mousePause: false, 
                    showItems: 1, 
                    height: 130, 
                    direction: 'up'
                })
                $("#stopNews"+i).click(function () {
                    if($(this).hasClass('stop')){
                        $(this).removeClass("stop").addClass("play").text("Play").attr('title', 'Play');
                    }else{
                        $(this).removeClass("play").addClass("stop").text("Pause").attr('title', 'pause');
                    }
                    return false;
                });
            });
        };
	
	
        // Multiple Ticker	
        if( $(".ticker").length){
            $('.ticker').each(function(i){
                $(this).addClass('tickerDiv'+i).attr('id', 'ticker'+i);
                $('#ticker'+i).find('.tickerDivBlock').first().addClass('newsTikker'+i).attr('id', 'newsTikker'+i);
                $('#ticker'+i).find('a.playPause').attr('id', 'stopNews'+i)
                $('#newsTikker'+i).vTicker({
                    speed: 1E3, 
                    pause: 4E3, 
                    animation: "fade", 
                    mousePause: false, 
                    showItems: 3, 
                    height: 245, 
                    direction: 'up'
                })
                $("#stopNews"+i).click(function () {
                    if($(this).hasClass('stop')){
                        $(this).removeClass("stop").addClass("play").text("Play").attr('title', 'Play');
                    }else{
                        $(this).removeClass("play").addClass("stop").text("Pause").attr('title', 'pause');
                    }
                    return false;
                });
            });
        };
	
	
	
        // Responsive Tabing Script
        if( $(".resTab").length) {
            $('.resTab').responsiveTabs({
                rotate: false
                ,
                startCollapsed: 'tab' //accordion
                ,
                collapsible: 'tab' //accordion
                ,
                scrollToAccordion: true
            });
        };
				
        if( $(".accordion").length){
            $('.accordion .accordDetail').hide();
            $(".accordion .accordDetail:first").show(); 
            $(".accordion .accTrigger:first").addClass("active");	
            $('.accordion .accTrigger').click(function(){
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    $(this).next().slideUp();
                } else {
                    if ($('body').hasClass('desktop')) {
                        $('.accordion .accTrigger').removeClass('active');
                        $('.accordion .accordDetail').slideUp();
                    }
                    $(this).addClass('active');			   
                    $(this).next().slideDown();
                }
                return false;
            });
        };
	
        if( $(".tableData").length > 0){
            $('.tableData').each(function(){
                $(this).find('tr').each(function(){
                    $(this).find('td:first').addClass('firstTd');
                    $(this).find('th:first').addClass('firstTh');
                    $(this).find('th:last').addClass('lastTh');
                });
                $(this).find('tr:last').addClass('lastTr');
                $(this).find('tr:even').addClass('evenRow');
                $(this).find('tr:nth-child(2)').find('th:first').removeClass('firstTh');
            });	
        };
	
        // Responsive Table
        if( $(".responsiveTable").length){
            $(".responsiveTable").each(function(){
                $(this).wrap('<div class="tableOut"></div>');
                $(this).find('td').removeAttr('width');
                //$(this).find('td').removeAttr('align');
                var head_col_count =  $(this).find('tr th').size();
                // loop which replaces td
                for ( i=0; i <= head_col_count; i++ )  {
                    // head column label extraction
                    var head_col_label = $(this).find('tr th:nth-child('+ i +')').text();
                    // replaces td with <div class="column" data-label="label">
                    $(this).find('tr td:nth-child('+ i +')').attr("data-label", head_col_label);
                }
            });
        };
	
        // Responsive Table
        if( $(".tableScroll").length){
            $(".tableScroll").each(function(){
                $(this).wrap('<div class="tableOut"></div>');
            });
        };
	
        // Back to Top function
        if( $("#backtotop").length){
            $(window).scroll(function(){
                if ($(window).scrollTop()>120){
                    $('#backtotop').fadeIn('250').css('display','block');
                }
                else {
                    $('#backtotop').fadeOut('250');
                }
            });
            $('#backtotop').click(function(){
                $('html, body').animate({
                    scrollTop:0
                }, '200');
                return false;
            });
        };
	
        // Get Focus Inputbox
        if( $(".getFocus").length){
            $(".getFocus").each(function(){
                $(this).on("focus", function(){
                    if ($(this).val() == $(this)[0].defaultValue) {
                        $(this).val("");
                    };
                }).on("blur", function(){
                    if ($(this).val() == "") {
                        $(this).val($(this)[0].defaultValue);
                    };
                });								  
            });
        };
	
        // For device checking
        if (isMobile == false) {
	
        };
	
        // Video JS
        if( $(".videoplayer").length){	
            $(".videoplayer").each(function(){
                var $this = $(this);
                var poster = $this.next("a").find("img").attr("src");
                var title = $this.next("a").find("img").attr("alt");	
                var videotype = $this.next("a").attr("rel");
                var video = $this.next("a").attr("href");
			
                projekktor($this, {
                    poster: poster
                    ,
                    title: title
                    ,
                    playerFlashMP4: '../videoplayer/jarisplayer.swf'
                    ,
                    playerFlashMP3: '../videoplayer/jarisplayer.swf'
                    ,
                    width: 640
                    ,
                    height: 385
                    ,
                    fullscreen:true
                    ,
                    playlist: [
                    {
                        0: {
                            src: video, 
                            type: videotype
                        }
                    }
                    ],
                    plugin_display: {
                        logoImage: '',
                        logoDelay: 1
                    }
                }, function(player) {} // on ready 
                    );
            })
        };
	
        // Google Map gmap3 
        if( $("#gmap").length){	
	
            var lang = 23.021666;
            var lati = 72.55464;
            var contentString = '<div id="content">'+
            '<strong>' + 'Silver Touch Technologies Limited' + '</strong>'+
            '<div id="bodyContent">'+ '2nd Floor, Saffron Towers,' + '<br/>' +
            'Near Panchwati Circle,' + '<br/>' +
            'Ahmedabad, Gujarat 380006'
            '</div></div>';
		
            var map = new google.maps.Map(document.getElementById('gmap'), {
                zoom: 15
                ,
                center: new google.maps.LatLng(lang , lati)
                ,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });	
		
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
            google.maps.event.addListener(map, 'click', function() {
                infowindow.close();
            });
            var marker = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(lang , lati)
            });
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map,marker);
            });
            infowindow.open(map,marker);
        };
	
        if( $(".litebox").length){	
            $('.litebox').liteBox();
        };	
	
        $('.equalHeights > div').equalHeight();
	
        setTimeout (function(){
            if( $(".fixedErrorMsg").length){					 
                $(".fixedErrorMsg").slideDown("slow");				 
                setTimeout( function(){
                    $('.fixedErrorMsg').slideUp();
                },5000 );
            }
            if( $(".fixedSuccessMsg").length){					 
                $(".fixedSuccessMsg").slideDown("slow");				 
                setTimeout( function(){
                    $('.fixedSuccessMsg').slideUp();
                },5000 );
            }
        },500);
		
$('a').not(".litebox, .w3cLogos a, .videoPopupLink, .gall-img a").filter(function() {
		return this.hostname && this.hostname !== location.hostname;
	  }).click(function(e) {  
	   e.preventDefault();
	  	var url = $(this).attr("href");		 
		 smoke.confirm("You are about to proceed to an external website. Unique Disability ID  has no control over the content of this site. Click OK to proceed.", function(e){
			if (e){ 
				 window.open(url, "_blank");		
			}else{ 
				return false; 
			}
	}, {
		ok: "Yes",
		cancel: "No",
		classname: "custom-class",
		reverseButtons: true
	}); 
		  
		 /*  if(!confirm("You are about to proceed to an external website.  The IFR has no control over the content of this site. Click OK to proceed."))
		   {
				// if user clicks 'no' then dont proceed to link.
				e.preventDefault();
		   };*/
  });		
	
        /*================= On Document Load and Resize Start =================*/
        $(window).on('resize', function () {
									 
            ww = document.body.clientWidth; 
            wh = document.body.clientHeight;		
		
            $('.vCenter').each(function () {
                $(this).verticalAlign();
            });	
		
            if($("body").hasClass("mobilePort")){
                $("body").removeClass("wob");
            }
		
        //$('.container').resize(function(){});
		
        }).trigger('resize');
        /*================= On Document Load and Resize End =================*/
	
        /*Navigation */
        if( $("#nav").length) {
            if($(".toggleMenu").length == 0){
                $("#mainNav").prepend('<a href="#" class="toggleMenu"><span class="mobileMenu">Menu</span><span class="iconBar"></span></a>');	
            }
            $(".toggleMenu").click(function() {
                $(this).toggleClass("active");
                $("#nav").slideToggle();
                return false;
            });
            $("#nav li a").each(function() {
                if ($(this).next().length) {
                    $(this).parent().addClass("parent");
                };
            })
            $("#nav li.parent").each(function () {
                if ($(this).has(".menuIcon").length <= 0) $(this).append('<i class="menuIcon">&nbsp;</i>')
            });
            dropdown('nav', 'hover', 1);
            adjustMenu();	
        };
		
		// Menu iPad  href # add
		if (navigator.userAgent.match(/iPad/i) != null){
			$('#nav > li.parent > a').each(function(){
				$(this).attr('href', '#');
			});
		}

        // Message on Cookie Disabled
        $.cookie('cookieWorked', 'yes', {
            path: '/'
        });
        if ($.cookie('cookieWorked') == 'yes') {
        }
        else{
            if( $("div.jsRequired").length == 0){
                $("body").prepend(
                    '<div class="jsRequired">Cookies are not enabled on your browser. Need to adjust this in your browser security preferences. Please enable cookies for better user experience.</div>'
                    );	
            }
        }
	
    // Search Slide Up Down
    /*if( $(".searchIcon").length){
		$('.searchIcon').click(function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				$('.searchBlock').slideUp();
			} else {
				$(this).addClass('active');
				$('.searchBlock').slideDown();				
			}			
		});
		
		$(document).bind('mousedown touchstart', function(e) {	
			if(ww < 959){
				if ($(e.target).closest('.headSearch').length === 0) {
					$('.searchIcon').removeClass('active');
					$('.searchBlock').slideUp();
				}
			}
		});		
	}*/
	
	
    });
    /*================= On Document Load End =================*/

    /*================= On Window Resize Start =================*/	
    $(window).bind('resize orientationchange', function() {
        getWidth();												
        adjustMenu();
        $('.vCenter').each(function () {
            $(this).verticalAlign();
        });
    });

    /*================= On Window Resize End =================*/	

    /*================= On Window Load Start =================*/
    $(window).load(function() {
						
        });
    /*================= On Document Load End =================*/


    function getWidth() {
        ww = document.body.clientWidth;
        if(ww>wideScreen){
            $('body').removeClass('device').addClass('desktop widerDesktop');
        }
        if(ww>mobilePort && ww<=wideScreen){
            $('body').removeClass('device widerDesktop').addClass('desktop');
        }
        if(ww<=mobilePort) {
            $('body').removeClass('desktop widerDesktop').addClass('device');
        }
        if(ww > 767 && ww < 1025){
            $('body').addClass('ipad');
        }
        else {
            $('body').removeClass('ipad');
        }	
    }

})(jQuery);


function validate() {
    return false;
};

function burstCache() 
{
    var basePath = document.getElementById('basepath').value;
    if (!navigator.onLine) 
    {
        //document.body.innerHTML = 'Loading...';
        //window.location = basePath;
        window.location = 'http://localhost/udid/trunk/sources/error/error';
    }
}
function selectBoxCust(){
    // Custom Select Box
    if( $('select').length){
        $('select').trigger('render');
        
//      $('.selArrow').on("click", function(){
//         $('select').trigger('change');
//       });
    }
}