(function() {
    function detectDevice() {
        window.device = {isMobile: false,isTab: false,isDesktop: false};
        var width = window.innerWidth || document.documentElement.clientWidth;
        if (width < 768) {
            device.isMobile = true;
        }
        else if (width >= 768 && width < 960) {
            device.isTab = true
        }
        else if (width >= 960) {
            device.isDesktop = true
        }
    }
    window.detectDevice = detectDevice;
    detectDevice();
    setInterval(detectDevice, 1);
    $(window).on('resize orientationchange', detectDevice);
})();
$(function() {
    (function() {
        var mainContainer = $('#main'), mainNav = mainContainer.find('#main-nav'), menuBtn = mainNav.find('#menu-btn'), navWrap = mainNav.find('#nav-wrap'), nav = mainNav.find('#topnav'), navLinkTop = navWrap.find('.accessible-megamenu-top-nav-item > h2 a'), navSecondLvlWrap = navWrap.find('.accessible-megamenu-panel'), navSecondLvl = navWrap.find('.accessible-megamenu-panel-group h3'), navThirdLvlWrap = navWrap.find('.accessible-megamenu-lvl3'), leftNavContainer = $('#leftNavContainer'), leftNavWrap = $('#leftNavWrap'), headLft = $('.head'), subMenuLft = $('.sub-menu'), subSubMenu = $('.sub-sub-menu'), leftNav = $('#leftNav'), menuBtnClose = $('#menu-btn-close'), navContainer = $('#nav-container'), mobNavActive = false;
        function adjustNav() {
            if (!device.isDesktop) {
                navWrap.prependTo('body');
                closeMobNav();
            }
            else {
                navWrap.appendTo(mainNav);
            }
        }
        adjustNav();
        function adjustLeftNav() {
            if (!device.isDesktop) {
                leftNav.prependTo(navWrap);
                leftNav.hide();
            }
            else
                leftNav.appendTo(leftNavWrap);
        }
        adjustLeftNav();
        function openMobNav() {
            mainContainer.animate({'left': '85%'}, 0);
            navWrap.animate({'width': '85%'}, 0);
            mobNavActive = true;
        }
        function closeMobNav() {
            mainContainer.animate({'left': '0'}, 0);
            navWrap.animate({'width': '0'}, 0);
            mobNavActive = false;
        }
        menuBtn.on('click touchstart', function(e) {
            if (!mobNavActive) {
                openMobNav();
            }
            else {
                closeMobNav();
            }
            e.preventDefault();
            e.stopPropagation();
        });
        menuBtn.on('touchstart', function(e) {
            e.preventDefault();
            e.stopPropagation();
        });
        mainContainer.on('click touchstart', function(e) {
            closeMobNav();
            leftNav.hide();
        });

        ( $(window).width() > 1024 ) && $("#nav-container").accessibleMegaMenu();

        $('#nav-wrap .accessible-megamenu-top-nav-item > h2 a').on('click', function(e) {

            if (device.isDesktop) {
				location.href = this.href
			}
			else {
				e.preventDefault();

                if ($(this).hasClass('active')) {
                    $(this).removeClass('active').parent().next('.accessible-megamenu-panel').slideUp(200);
                }
                else {
                    navLinkTop.removeClass('active').parent().next('.accessible-megamenu-panel').slideUp(200);
                    $(this).addClass('active').parent().next('.accessible-megamenu-panel').slideDown(200);
                }

				$('.accordion > li.active')
					.removeClass('active')
					.find('> a span')
						.first()
						.empty()
							.append('<img src="../img/closed.png" title="Closed Arrow" alt="Closed Arrow">')
							.parents('a')
					.next('.sub-menu')
					.slideUp(200);
            }
        });
        navSecondLvl.on('click', function(e) {
            if (!device.isDesktop) {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active').next('.accessible-megamenu-lvl3').slideUp(200);
                }
                else {
                    navSecondLvl.removeClass('active').next('.accessible-megamenu-lvl3').slideUp(200);
                    $(this).addClass('active').next('.accessible-megamenu-lvl3').slideDown(200);
                }
                e.preventDefault();
            }
        });
        $('#close-nav').on('click', function() {
            $("#leftNav").toggle();
            closeMobNav();
        });
        $("#sitemapup").on("click", function(e) {
            e.stopPropagation();
            $("#leftNav").toggle();
            if (!device.isDesktop && !mobNavActive) {
                openMobNav();
            }
            else {
                closeMobNav();
            }
        });
        $("#sitemapup").on("touchstart", function(e) {
            e.stopPropagation();
        });
        if (!('ontouchstart' in window)) {
            $(window).on('resize', adjustDevice);
        }
        else
        {
            $(window).on('resize', adjustDevice);
        }
        function adjustDevice() {
            window.detectDevice();
            adjustNav();
            adjustLeftNav();
            if (!device.isMobile) {
                mobNavActive = false;
                mainContainer.css({'left': '0'});
                navSecondLvlWrap.removeAttr('style');
                navSecondLvlWrap.removeClass('open');
                navSecondLvlWrap.removeClass('hover');
                navThirdLvlWrap.removeAttr('style');
                navLinkTop.removeClass('active');
                navSecondLvl.removeClass('active');
             /* headLft.removeClass('active');
                subMenuLft.removeAttr('style');
                subSubMenu.removeAttr('style');  */
                menuBtnClose.removeClass('active');
                navContainer.removeAttr('style');
                navSecondLvlWrap.hide();
                navThirdLvlWrap.hide();
                navLinkTop.removeClass('open');
                navLinkTop.removeClass('focus');
            }
            else {
                navSecondLvlWrap.removeClass('open');
                navLinkTop.removeClass('open');
            }
            ( $(window).width() > 1024 ) && $("#nav-container").accessibleMegaMenu();
        }
    })();
    (function() {
        var footer = $('#footer'), footerTop = footer.find('.top-level'), footerLink = footer.find('.ftrcls');
        footerTop.on('click', function(e) {
            if (!device.isDesktop) {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active').next('.ftrcls').slideUp(300);
                }
                else {
                    footerTop.removeClass('active').next('.ftrcls').slideUp();
                    $(this).addClass('active').next('.ftrcls').slideDown(300);
                }
            }
        });
        footerTop.eq(0).trigger('click');
        $('#connect').css('display', 'block');
        $('.connect h4').addClass('active');
    })();
    $("#mainContact-btn").on("click", function() {
        toogleSearch1();
        return false;
    });
    $("#search-btn").bind("click", function() {
        toogleSearch3();
        return false;
    });
    $("#mainLocator-btn").bind("click", function() {
        toogleSearch4();
        return false;
    });
    $("#menu-btn-close").on("click", function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').next('.nav-container-close').slideUp(300);
        }
        else {
            $('#menu-btn-close').removeClass('active').next('.nav-container-close').slideUp();
            $(this).addClass('active').next('.nav-container-close').slideDown(300);
        }
    });
    heathSideBar();
    miamiSideBar();
    miamiSideBar1();
    adjustAddressWidget()
    adjustResourceWidget()
    adjustConnectWidget()
    $(window).resize(function() {
        heathSideBar();
        miamiSideBar1();
        adjustAddressWidget();
        adjustResourceWidget()
        adjustConnectWidget()
    });
});
function toogleSearch1() {
    if ($('#main-contact').css("display") == "block") {
        $('#mainContact-btn').html("Contact");
        $('#main-contact').hide();
    } else {
        $('#mainContact-btn').html("Close Contact");
        $('#main-contact').show();
        $('.social-n-search').hide();
        $('#main-locator').hide();
        $('#search-btn').html("Search");
        $('#mainLocator-btn').html("Locator");
    }
}
function toogleSearch3() {
    if ($('.social-n-search').css("display") == "block") {
        $('#search-btn').html("Search");
        $('.social-n-search').hide();
    } else {
        $('#search-btn').html("Close Search");
        $('.social-n-search').show();
        $('#main-contact').hide();
        $('#main-locator').hide();
        $('#mainContact-btn').html("Contact");
        $('#mainLocator-btn').html("Locator");
    }
}
function toogleSearch4() {
    if ($('#main-locator').css("display") == "block") {
        $('#mainLocator-btn').html("Locator");
        $('#main-locator').hide();
    } else {
        $('#mainLocator-btn').html("Close Locator");
        $('#main-locator').show();
        $('#main-contact').hide();
        $('.social-n-search').hide();
        $('#mainContact-btn').html("Contact");
        $('#search-btn').html("Search");
    }
}
function heathSideBar() {
    if (device.isDesktop && $('#left-col-content').parents('#leftNavContainer').size() < 1) {
        $('#left-col-content').appendTo('#leftNavContainer');
    }
    else if ((!device.isDesktop) && $('#left-col-content').parents('#rightContent').size() < 1) {
        $('#left-col-content').appendTo('#rightContent');
    }
}
function miamiSideBar() {
    if (device.isDesktop) {
        $('#left-bar-wrap').before($('#mainContentWrapper'));
    }
    else {
        $('#left-bar-wrap').after($('#mainContentWrapper'));
    }
}
function miamiSideBar1() {
    if (device.isDesktop) {
        $('#left-bar-wrap').before($('#mainContentWrapper1'));
    }
    else {
        $('#left-bar-wrap').after($('#mainContentWrapper1'));
    }
}
function healthSideBar() {
    if (device.isDesktop) {
        $('#sitemapup').before($('#main-nav'));
        $('#sitemapup').before($('#leftNav'));
    }
    else {
        $('#sitemapup').after($('#main-nav'));
        $('#sitemapup').after($('#leftNav'));
    }
}
function adjustAddressWidget() {
    if (device.isDesktop) {
        $('#address-widget').appendTo($('#address-deskwrap'));
    }
    else {
        $('#address-widget').appendTo($('#address-mobwrap'));
    }
}
function adjustResourceWidget() {
    if (device.isDesktop) {
        $('#rosource-widget').appendTo($('#resource-deskwrap'));
    }
    else {
        $('#rosource-widget').appendTo($('#resource-mobwrap'));
    }
}
function adjustConnectWidget() {
    if (device.isDesktop) {
        $('#connect-widget').appendTo($('#connect-deskwrap'));
    }
    else {
        $('#connect-widget').appendTo($('#connect-mobwrap'));
    }
}
function homeslider() {
    var homepageSlider = $('#homepageSlider'), scrollableSlider = homepageSlider.find('.scrollable'), scrollableSlideItem = scrollableSlider.find('.slide'), sliderThumbnails = homepageSlider.find('.slider-thumbnails a');
    scrollableSlider.scrollable({circular: true,speed: 0,onBeforeSeek: function() {
            this.getItemWrap().stop(true).animate({opacity: 0.1}, 400);
        },onSeek: function() {
            this.getItemWrap().stop(true).animate({opacity: 1}, 600);
        }}).autoscroll({autoplay: true,interval: 10000,autopause: false});
    scrollableApi = scrollableSlider.data("scrollable");
    scrollableApi.onSeek(function(i) {
        sliderThumbnails.removeClass('selected')
        .eq(scrollableApi.getIndex()).addClass('selected');
    });
    sliderThumbnails.on('click', function(e) {
        scrollableApi.seekTo($(this).index());
        e.preventDefault();
    });
    homepageSlider.find('#play').on('click', function(e) {
        scrollableApi.play();
        e.preventDefault();
    });
    homepageSlider.find('#pause').on('click', function(e) {
        scrollableApi.pause();
        e.preventDefault();
    });
    responsiveScrollable();
    $(window).resize(function() {
        responsiveScrollable();
    });
    function responsiveScrollable() {
        var siteWidth = homepageSlider.width();
        scrollableSlider.find('.slide').css('width', siteWidth);
        scrollableSlider.add(scrollableSlider.find('.slide')).css('height', ((!device.isMobile) ? parseInt(siteWidth / 2.06) : 'auto'));
        scrollableApi.seekTo(scrollableApi.getIndex(), 0);
    }
}
function healthslider() {
    var homepageSlider = $('#healthslider'), scrollableSlider = homepageSlider.find('.scrollable'), scrollableSlideItem = scrollableSlider.find('.slide'), sliderThumbnails = homepageSlider.find('.slider-thumbnails a');
    scrollableSlider.scrollable({circular: true,speed: 0,onBeforeSeek: function() {
            this.getItemWrap().stop(true).animate({opacity: 0.3}, 400);
        },onSeek: function() {
            this.getItemWrap().stop(true).animate({opacity: 1}, 600);
        }}).autoscroll({autoplay: true,interval: 10000,autopause: false});
    scrollableApi = scrollableSlider.data("scrollable");
    scrollableApi.onSeek(function(i) {
        sliderThumbnails.removeClass('selected')
        .eq(scrollableApi.getIndex()).addClass('selected');
    });
    sliderThumbnails.on('click', function(e) {
        scrollableApi.seekTo($(this).index());
        e.preventDefault();
    });
    homepageSlider.find('#play').on('click', function(e) {
        scrollableApi.play();
        e.preventDefault();
    });
    homepageSlider.find('#pause').on('click', function(e) {
        scrollableApi.pause();
        e.preventDefault();
    });
    responsiveScrollable();
    $(window).resize(function() {
        responsiveScrollable();
    });
    function responsiveScrollable() {
        var siteWidth = homepageSlider.width();
        scrollableSlider.find('.slide').css('width', siteWidth);
        scrollableSlider.add(scrollableSlider.find('.slide')).css('height', ((!device.isMobile) ? parseInt(siteWidth / 2.88) : 'auto'));
        scrollableApi.seekTo(scrollableApi.getIndex(), 0);
    }
}
