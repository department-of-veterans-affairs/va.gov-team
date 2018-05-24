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

function homepageSlider() {
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
