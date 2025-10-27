document.addEventListener('touchstart', {passive: true});
var lazyLoadInstance = new LazyLoad({});

(function($) {
    
    
  if($('.assets_slide').length){

  $.fn.visible = function(partial) {
    
    var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top + $(window).height() * 0.6,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
  }
    
})(jQuery);

 $(document).ready(function () {
    $('#pro1').hover(function() {
        $('#pro1').toggleClass('active')
        $('#pro2').toggleClass('inactive');
        $('#pro3').toggleClass('inactive');
        $('#pro4').toggleClass('inactive');
    });
    $('#pro2').hover(function() {
        $('#pro2').toggleClass('active');
        $('#pro1').toggleClass('inactive');
        $('#pro3').toggleClass('inactive');
        $('#pro4').toggleClass('inactive');
    });
    
     $('#pro3').hover(function() {
        $('#pro3').toggleClass('active');
        $('#pro1').toggleClass('inactive');
        $('#pro2').toggleClass('inactive');
        $('#pro4').toggleClass('inactive');
    });
    
     $('#pro4').hover(function() {
        $('#pro4').toggleClass('active');
        $('#pro1').toggleClass('inactive');
        $('#pro3').toggleClass('inactive');
        $('#pro2').toggleClass('inactive');
    });
  });

$(document).ready(function () {
    
   
    $(function () {
        $("[data-popup-open]").on("click", function (e) {
            var s = jQuery(this).attr("data-popup-open");
            $('[data-popup="' + s + '"]').fadeIn(350), e.preventDefault();
        }),
            $("[data-popup-close]").on("click", function (e) {
                var s = jQuery(this).attr("data-popup-close");
                $('[data-popup="' + s + '"]').fadeOut(350), e.preventDefault();
            });
    }),
        $(".sixty-js").slick({ infinite: !0, pauseOnHover: !1, slidesToShow: 1, slidesToScroll: 1, speed: 1500, autoplay: !0, loop: !0, nextArrow: !1, prevArrow: !1 }),
        $(".sixty-left").click(function () {
            $(".sixty-js").slick("slickPrev");
        }),
        $(".sixty-right").click(function () {
            $(".sixty-js").slick("slickNext");
        }),
        $(function () {
            $("[data-popup-open]").on("click", function (e) {
                var s = jQuery(this).attr("data-popup-open");
                $('[data-popup="' + s + '"]').fadeIn(350), e.preventDefault();
            }),
                $("[data-popup-close]").on("click", function (e) {
                    var s = jQuery(this).attr("data-popup-close");
                    $('[data-popup="' + s + '"]').fadeOut(350), e.preventDefault();
                });
        }),
        $(".form-email, .form-control").bind("copy paste cut", function (e) {
            e.preventDefault();
        }),
        $(".let").keypress(function (e) {
            var s = (e = e || window.event).which ? e.which : e.keyCode;
            return ((s >= 65 && s <= 120) || 32 == s || 0 == s) && !(s > 32 && (s < 65 || s > 90) && (s < 97 || s > 122));
        }),
        $(".num").keypress(function (e) {}),
        $(".jsOverlay").click(function () {
            $(".windowheightnav").removeClass("shownavactive"), $("body").removeClass("overlayBody");
        }),
        $("#one").on("click", function () {
            $("#one img").toggleClass("rotate"),
                $("#one_open").slideToggle(),
                $("#two img, #three img, #four img, #five img, #six img, #seven img, #eight img, #nine img").removeClass("rotate"),
                $("#two_open, #three_open, #four_open, #five_open, #six_open, #seven_open, #eight_open, #nine_open").slideUp();
        }),
        $("#two").on("click", function () {
            $("#two img").toggleClass("rotate"),
                $("#two_open").slideToggle(),
                $("#one img, #three img, #four img, #five img, #six img, #seven img, #eight img, #nine img").removeClass("rotate"),
                $("#one_open, #three_open, #four_open, #five_open, #six_open, #seven_open, #eight_open ,#nine_open").slideUp();
        }),
        $("#three").on("click", function () {
            $("#three img").toggleClass("rotate"),
                $("#three_open").slideToggle(),
                $("#one img, #two img, #four img, #five img, #six img, #seven img, #eight img, #nine img").removeClass("rotate"),
                $("#one_open, #two_open, #four_open, #five_open, #six_open, #seven_open, #eight_open ,#nine_open").slideUp();
        }),
        $("#four").on("click", function () {
            $("#four img").toggleClass("rotate"),
                $("#four_open").slideToggle(),
                $("#one img, #three img, #two img, #five img, #six img, #seven img, #eight img, #nine img").removeClass("rotate"),
                $("#one_open, #three_open, #two_open, #five_open, #six_open, #seven_open, #eight_open ,#nine_open").slideUp();
        }),
        $("#five").on("click", function () {
            $("#five img").toggleClass("rotate"),
                $("#five_open").slideToggle(),
                $("#one img, #three img, #four img, #two img, #six img, #seven img, #eight img, #nine img").removeClass("rotate"),
                $("#one_open, #three_open, #four_open, #two_open, #six_open, #seven_open, #eight_open ,#nine_open").slideUp();
        }),
        $("#six").on("click", function () {
            $("#six img").toggleClass("rotate"),
                $("#six_open").slideToggle(),
                $("#one img, #three img, #four img, #five img, #two img, #seven img, #eight img, #nine img").removeClass("rotate"),
                $("#one_open, #three_open, #four_open, #five_open, #two_open, #seven_open, #eight_open ,#nine_open").slideUp();
        }),
        $("#seven").on("click", function () {
            $("#seven img").toggleClass("rotate"),
                $("#seven_open").slideToggle(),
                $("#one img, #three img, #four img, #five img, #six img, #two img, #eight img, #nine img").removeClass("rotate"),
                $("#one_open, #three_open, #four_open, #five_open, #six_open, #two_open, #eight_open, #nine_open").slideUp();
        }),
        $("#eight").on("click", function () {
            $("#eight img").toggleClass("rotate"),
                $("#eight_open").slideToggle(),
                $("#one img, #three img, #four img, #five img, #six img, #seven img, #two img, #nine img").removeClass("rotate"),
                $("#one_open, #three_open, #four_open, #five_open, #six_open, #seven_open, #two_open, #nine_open").slideUp();
        }),
        $("#nine").on("click", function () {
            $("#nine img").toggleClass("rotate"),
                $("#nine_open").slideToggle(),
                $("#one img, #three img, #four img, #five img, #six img, #seven img, #eight img, #two img").removeClass("rotate"),
                $("#one_open, #three_open, #four_open, #five_open, #six_open, #seven_open, #eight_open ,#two_open").slideUp();
        }),
        $("#careers1").hover(function () {
            $("#careers_open1, #careers1").addClass("active"), $("#careers_open2, #careers_open3, #careers_open4, #careers_open5, #careers_open6, #careers2, #careers3, #careers4, #careers5, #careers6").removeClass("active");
        }),
        $("#careers2").hover(function () {
            $("#careers_open2, #careers2").addClass("active"), $("#careers_open1, #careers_open3, #careers_open4, #careers_open5, #careers_open6, #careers1, #careers3, #careers4, #careers5, #careers6").removeClass("active");
        }),
        $("#careers3").hover(function () {
            $("#careers_open3, #careers3").addClass("active"), $("#careers_open2, #careers_open1, #careers_open4, #careers_open5, #careers_open6, #careers2, #careers1, #careers4, #careers5, #careers6").removeClass("active");
        }),
        $("#careers4").hover(function () {
            $("#careers_open4, #careers4").addClass("active"), $("#careers_open2, #careers_open3, #careers_open1, #careers_open5, #careers_open6, #careers1, #careers3, #careers2, #careers5, #careers6").removeClass("active");
        }),
        $("#careers5").hover(function () {
            $("#careers_open5, #careers5").addClass("active"), $("#careers_open2, #careers_open3, #careers_open4, #careers_open1, #careers_open6, #careers2, #careers3, #careers4, #careers1, #careers6").removeClass("active");
        }),
        $("#careers6").hover(function () {
            $("#careers_open6, #careers6").addClass("active"), $("#careers_open1, #careers_open3, #careers_open4, #careers_open5, #careers_open2, #careers1, #careers3, #careers4, #careers5, #careers2").removeClass("active");
        }),
        (wow = new WOW({ boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0 })),
        wow.init(),
        $(".services-hospiality").slick({
            dots: !1,
            infinite: !0,
            loop: !0,
            speed: 2e3,
            slidesToShow: 3,
            slidesToScroll: 2,
            autoplay: !0,
            autoplaySpeed: 1500,
            prevArrow: '<span class="product-showcase-carousel-controls product-showcase-carousel-controls--left"><img src="images/arrow.svg" /></span>',
            nextArrow: '<span class="product-showcase-carousel-controls product-showcase-carousel-controls--right"><img src="images/arrow.svg" /></span>',
            responsive: [
                { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                { breakpoint: 640, settings: { slidesToShow: 1, autoplaySpeed: 2e3, slidesToScroll: 1 } },
            ],
        }),
        $(".button").click(function () {
            $(".section-md").addClass("modal-active"), $("body").addClass("blk");
            var e = $(this).attr("id");
            setTimeout(function () {
                !(function (e) {
                    "map" == e ? $("#modal-container-location").removeAttr("class").addClass("two") : $("#modal-container").removeAttr("class").addClass(e);
                    $(".section-md").removeClass("modal-active");
                })(e);
            }, 300),
                setTimeout(function () {
                    $("body").addClass("pop");
                }, 1300);
        }),
        $(".closebutton").click(function () {
            setTimeout(function () {
                $("body").removeClass("pop");
            }, 300),
                setTimeout(function () {
                    $("#modal-container, #modal-container-location").addClass("out"), $(".wellnes-open").css("transform", "translate(0px, 100%)"), $(".section-md").removeClass("modal-active"), $("body").removeClass("blk");
                }, 1e3),
                setTimeout(function () {
                    $("body").removeClass("blk");
                }, 1800);
        }),
        $(".opennav").click(function () {
            $(".windowheightnav").addClass("shownavactive"), $("body").addClass("overlayBody");
        }),
        $(".closenav").click(function () {
            $(".windowheightnav").removeClass("shownavactive"), $("body").removeClass("overlayBody");
        }),
        $(window).scroll(function () {
            var e = window.location.href;
            if (
                !/flamingo-floors.php/.test(e) &&
                !(
                    /fleur-villas.php/.test(e) ||
                    /mikasa-plots.php/.test(e) ||
                    /clover-floors.php/.test(e) ||
                    /cerise-floors.php/.test(e) ||
                    /aqua-front-towers.php/.test(e) ||
                    /the-room.php/.test(e) ||
                    /sky-villas.php/.test(e) ||
                    /beau-villas.php/.test(e) ||
                    /bellavista.php/.test(e) ||
                    /belgravia-residences.php/.test(e) ||
                    /delhi-biker-breakfast-run/.test(e)||
                    /events/.test(e)
                )
            ) {
                var s = $("#is_home").val(),
                    o = $("header");
                if ($(window).scrollTop() >= 120) o.addClass("fixed"), $(".years20").attr("src", s + "images/20-Years-golden.svg");
                else {
                    if ((o.removeClass("fixed"), "" == $("#c_page").val() || "index.php" == $("#c_page").val() || "residential.php" == $("#c_page").val() || "commercial.php" == $("#c_page").val() || "hospitality.php" == $("#c_page").val()))
                        return void $(".years20").attr("src", s + "images/20-Years-white.svg");
                    $(".years20").attr("src", s + "images/20-Years.svg");
                }
            }
        }),
        $(".newsslider").slick({
            dots: !1,
            autoplay: !0,
            pauseOnHover: !1,
            vertical: !0,
            infinite: !0,
            autoplaySpeed: 3e3,
            speed: 3e3,
            slidesToShow: 2,
            slidesToScroll: 1,
            nextArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><img src="images/arrow.svg" width="50px" height="10px" class="w-50"></button>',
            prevArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><img src="images/arrow.svg" width="50px" height="10px" class="w-50"></button>',
            responsive: [{ breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1, vertical: !1, horizontal: !1, autoplaySpeed: 2e3, speed: 1500 } }],
        }),
        $(".anemities-slider").slick({
            dots: !1,
            infinite: !0,
            loop: !0,
            speed: 2e3,
            slidesToShow: 3,
            slidesToScroll: 2,
            autoplay: !0,
            autoplaySpeed: 1500,
            prevArrow: '<span class="product-showcase-carousel-controls product-showcase-carousel-controls--left"><img src="images/arrow.svg" /></span>',
            nextArrow: '<span class="product-showcase-carousel-controls product-showcase-carousel-controls--right"><img src="images/arrow.svg" /></span>',
            responsive: [
                { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            ],
        }),
        $(".galleryslider").slick({
            dots: !1,
            infinite: !0,
            loop: !0,
            speed: 2e3,
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: !0,
            autoplaySpeed: 1500,
            prevArrow: '<span class="product-showcase-carousel-controls product-showcase-carousel-controls--left"><img src="images/arrow.svg" /></span>',
            nextArrow: '<span class="product-showcase-carousel-controls product-showcase-carousel-controls--right"><img src="images/arrow.svg" /></span>',
            responsive: [
                { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            ],
        }),
        $(".teamslider").slick({
            dots: !1,
            infinite: !0,
            loop: !1,
            speed: 2e3,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: !1,
            autoplaySpeed: 1500,
            prevArrow: '<span class="product-showcase-carousel-controls product-showcase-carousel-controls--left"><img src="images/arrow.svg" /></span>',
            nextArrow: '<span class="product-showcase-carousel-controls product-showcase-carousel-controls--right"><img src="images/arrow.svg" /></span>',
            responsive: [
                { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1 } },
                { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            ],
        }),
        $(".award-slide").slick({
            dots: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: !1,
            autoplaySpeed: 2e3,
            easing: "easeOutElastic",
            speed: 2e3,
            infinite: !0,
            prevArrow: '<span class="product-showcase-carousel-controls product-showcase-carousel-controls--left"><img src="images/arrow.svg" /></span>',
            nextArrow: '<span class="product-showcase-carousel-controls product-showcase-carousel-controls--right"><img src="images/arrow.svg" /></span>',
        });
    var e,
        s = $(".banner-slide"),
        o = $(".progress"),
        a = $(".slider__label");
    function t() {
        var e = $(".tabbed-content").find(".tabs");
        e.is(":visible")
            ? e.find("a").on("click", function (e) {
                  e.preventDefault();
                  var s = $(this).attr("href"),
                      o = $(this).parents(".tabs"),
                      a = o.find("a"),
                      t = o.parents(".tabbed-content").find(".item");
                  a.removeClass("active"), t.removeClass("active"), $(this).addClass("active"), $(s).addClass("active");
              })
            : $(".item").on("click", function () {
                  var e = $(this).parents(".tabbed-content"),
                      s = $(this).attr("id"),
                      o = e.find(".item");
                  e.find(".tabs a").removeClass("active"), o.removeClass("active"), $(this).addClass("active"), e.find('.tabs a[href$="#' + s + '"]').addClass("active");
              });
    }
    s.on("beforeChange", function (e, s, t, r) {
        var i = (r / s.slideCount) * 100;
        0 == i && (i = 100), o.css("background-size", i + "% 100%").attr("aria-valuenow", i), a.text(i + "% completed");
    }),
        s.slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 400,
            autoplaySpeed: 400,
            prevArrow: '<span class="product-showcase-carousel-controls product-showcase-carousel-controls--left"><img src="images/arrow.svg" /></span>',
            nextArrow: '<span class="product-showcase-carousel-controls product-showcase-carousel-controls--right"><img src="images/arrow.svg" /></span>',
            responsive: [
                { breakpoint: 991, settings: { slidesToShow: 1, slidesToScroll: 1 } },
                { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            ],
        }),
        $(".test1").on({
            click: function () {
                $("#change-image").attr("src", "https://www.youtube.com/embed/0-bHVX4MfCM?si=lWdfIbVYO-ZDxdGS");
            },
        }),
        $(".test2").on({
            click: function () {
                $("#change-image").attr("src", "https://www.youtube.com/embed/R_a3J5Cv5V8?si=0RsNlCnxws9A8ZZa");
            },
        }),
        $(function () {
            var e = window.location.href;
            /listing.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /flower-valley-township.php/.test(e) && ($("header").addClass("grey"), $("#homecp").hide(), $(".Flower-Valley ").show(), $("body").addClass("black_bg")),
                /about-us.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /delhi-biker-breakfast-run/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /events/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /group.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /press-releases.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /bellavista.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /media.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /contact-us.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /foundation.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /awards.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /flamingo-floors.php/.test(e) && ($(".contact-wrapper a").removeClass("none"), $("header").addClass("grey"), $("body").addClass("black_bg")),
                /flower-valley-township.php/.test(e) && $(".contact-wrapper a").removeClass("none"),
                /nri-corner.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /careers.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /pay-online.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /pay.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /construction-update.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /group-housing.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /construction_images.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /central-park-resorts.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /blog/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /fleur-villas.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /mikasa-plots.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /clover-floors.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /cerise-floors.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /aqua-front-towers.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /the-room.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /sky-villas.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /belgravia-residences.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /beau-villas.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /terms-conditions.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /refund-policy.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /central-park-the-room.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /central-park-bellevue.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /central-park-golf-course.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /notice.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /privacy-policy.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /building-plan.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
                /the-orchard.php/.test(e) && ($("header").addClass("grey"),$("body").addClass("black_bg")),
                /bignonia-tower.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg")),
               /404.php/.test(e) && ($("header").addClass("grey"), $("body").addClass("black_bg"));
        }),
        
        gsap.registerPlugin(ScrollTrigger),
        gsap.to(".inner-baner", {
            scrollTrigger: {
                trigger: ".inner-baner",
                scrub: !0,
                pin: !0,
                start: "center center",
                end: "bottom -80%",
                ease: "power2",
                onLeave: function () {
                    $("header").addClass("fixed"), $(".years20").attr("src", "images/20-Years-golden.svg");
                },
                onEnterBack: function () {
                    $("header").removeClass("fixed"), $(".years20").attr("src", "images/20-Years.svg");
                },
            },
            "clip-path": "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
        }),
        
        gsap.to(".inner-baner h1", {
        scrollTrigger: {
         trigger: ".inner-baner h1",
         start: "top 40%",      // when top of h1 hits top of viewport
         end: "+=1800",         // slow it down by increasing scroll distance
          scrub: 1               // makes it scroll-linked
        },
        x: "-95%",               // horizontal translate
         opacity: 0.8,
         ease: "none",
        stagger: 0.5
});
       // Animate .center_text img after .inner-baner h1
gsap.to(".center_text img", {
  scrollTrigger: {
    trigger: ".inner-baner h1", // base the timing on when this leaves
    start: "bottom top+=10",   // starts after h1 leaves top of viewport
    end: "+=1400",              // adjust for speed
    scrub: 1
  },
  opacity: 1,
  ease: "none",
  autoAlpha: 0.9
});

// Animate .center_text span after img
gsap.to(".center_text span", {
  scrollTrigger: {
    trigger: ".center_text img",
    start: "bottom top+=10",   // begins after image starts exiting
    end: "+=450",
    scrub: 1
  },
  opacity: 1,
  ease: "none",
  autoAlpha: 0.9
});
       // to(),
        $(window).on("resize", function (s) {
            clearTimeout(e),
                (e = setTimeout(function () {
                    t();
                }, 250));
        }),
        $("#wellnes").click(function () {
            $("#slideOpen").css("transform", "translate(0px, 0%)"), $("body").addClass("overflow");
        }),
        $(".closebtn").click(function () {
            $("#slideOpen").css("transform", "translate(0px, 100%)"), $("body").removeClass("overflow");
        }),
        $("#fitness").click(function () {
            $("#fitnessOpen").css("transform", "translate(0px, 0%)"), $("body").addClass("overflow");
        }),
        $(".closebtn").click(function () {
            $("#fitnessOpen").css("transform", "translate(0px, 100%)"), $("body").removeClass("overflow");
        }),
        $(".wellSlider").slick({
            dots: !1,
            infinite: !0,
            loop: !0,
            speed: 1200,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: !1,
            autoplaySpeed: 1500,
            prevArrow: '<span class="product-showcase-carousel-controls product-showcase-carousel-controls--left"><img src="images/arrow.svg" /></span>',
            nextArrow: '<span class="product-showcase-carousel-controls product-showcase-carousel-controls--right"><img src="images/arrow.svg" /></span>',
            responsive: [
                { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            ],
        }),
        $(function () {
            $("[data-popup-open]").on("click", function (e) {
                var s = jQuery(this).attr("data-popup-open");
                $('[data-popup="' + s + '"]').fadeIn(350), e.preventDefault();
            }),
                $("[data-popup-close]").on("click", function (e) {
                    var s = jQuery(this).attr("data-popup-close");
                    $('[data-popup="' + s + '"]').fadeOut(350), e.preventDefault();
                });
        }),
        $(function () {
            var e = $("#navbar a");
            function s() {
                var s = $(window).scrollTop();
                $(".static_box, .parallax-image").each(function () {
                    var o = $(this).attr("id"),
                        a = $(this).offset().top - 150,
                        t = $(this).height();
                    s >= a && s < a + t
                        ? (e.removeClass("active"),
                          $("#navbar")
                              .find('[data-scroll="' + o + '"]')
                              .addClass("active"),
                          "seven" == o ? $(".make-me-sticky").addClass("lastScroll") : $(".make-me-sticky").removeClass("lastScroll"))
                          //"seven"==o?$(".make-me-sticky").addClass("lastScroll"):"six"==o?$(".make-me-sticky").addClass("firstScroll"):($(".make-me-sticky").removeClass("lastScroll"),$(".make-me-sticky").removeClass("firstScroll")))
                        : $(".jsScroll .static_box").find(o).removeClass("active").addClass("active");
                });
            }
            e.on("click", function (e) {
                var s = $($(this).attr("href"));
                $("html, body").animate({ scrollTop: s.offset().top }, 600), $(this).addClass("active"), e.preventDefault();
            }),
                $(window).on("scroll", function () {
                    s();
                    var el = $('.assets_slide')

                    if (el.length && el.visible(true)) {
                      $('.make-me-sticky').addClass("firstScroll"); 
                    } else {
                      $('.make-me-sticky').removeClass("firstScroll");
                    }
                }),
                s();
        }),
        $(".mb-slider").slick({
            dots: !1,
            infinite: !0,
            loop: !0,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: !1,
            Speed: 2e3,
            prevArrow: '<span class="product-showcase-carousel-controls product-showcase-carousel-controls--left"><img src="images/arrow.svg" /></span>',
            nextArrow: '<span class="product-showcase-carousel-controls product-showcase-carousel-controls--right"><img src="images/arrow.svg" /></span>',
            responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
                { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 2 } },
                { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: !0, centerPadding: "30px" } },
            ],
        }),
 $(window).width() < 991 && (
    $(".innergridpro").addClass("mb-slider"),
    $(".car").addClass("mbslider"),

    $(".mb-slider").slick({
        dots: false,
        infinite: true,
        loop: true,
        centerMode: true,
        centerPadding: "50px",
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev">←</button>',
        nextArrow: '<button type="button" class="slick-next">→</button>'
    }),

    $(".mbslider").slick({
        dots: false,
        infinite: true,
        loop: true,
        centerMode: true,
        centerPadding: "0",
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev">←</button>',
        nextArrow: '<button type="button" class="slick-next">→</button>'
    }),

    $(".chatbox").click(function () {
        $(".chat-menu").toggleClass("visible");
    })
);

$("#beau").click(function () {
    $("#beau-open").slideToggle();
    $("#beau img").toggleClass("icon180");
});

$("#Belgravia").click(function () {
    $("#Belgravia-open").slideToggle();
    $("#Belgravia img").toggleClass("icon180");
});

$("#Sky").click(function () {
    $("#Sky-open").slideToggle();
    $("#Belgravia img").toggleClass("icon180");
});

$("#Bellavista").click(function () {
    $("#Bellavista-open").slideToggle();
    $("#Belgravia img").toggleClass("icon180");
});

$(".mainwrap header .navigation .windowheightnav .windogrid .lrsection .parknavbar .innernavbar ul li a").click(function () {
    $(".windowheightnav").removeClass("shownavactive");
    $("body").removeClass("overlayBody");
});
}),
    $(function () {
        var e = $(window).scrollTop(),
            s = window.innerHeight,
            o = window.innerWidth,
            a = "scene--active",
            t = "scene--ended";
        function r(e) {
            var o = e.data("elDom").getBoundingClientRect();
            o.top > s
                ? (e.find(".scene").removeClass(a), e.find(".scene").removeClass(t))
                : o.bottom < 0
                ? (e.find(".scene").addClass(t), e.find(".scene").removeClass(a))
                : (o.top <= 0 && e.find(".scene").addClass(a), o.top > 0 && e.find(".scene").removeClass(a), o.bottom <= s && e.find(".scene").addClass(t), o.bottom > s && e.find(".scene").removeClass(t));
        }
        $(window).on("resize", function () {
            (s = window.innerHeight), (o = window.innerWidth);
        });
        var i = $(".horizontal-scroll-section"),
            n = i.find(".trigger");
        i.each(function (e, s) {
            var a = $(this);
            $(this).data("elDom", $(this).get(0)),
                (function (e) {
                    var s = e.attr("class"),
                        a = e.find("." + s + "__content-wrapper"),
                        t = a.get(0);
                    e.data("contentWrapper", a), e.data("contentWrapperDom", t);
                    var r = e.data("contentWrapperDom").scrollWidth;
                    e.data("contentWrapperScrollWidth", r);
                    var i = -(e.data("contentWrapperScrollWidth") - o);
                    e.data("rightMax", Number(i)),
                        e.data("initalized", !1),
                        e.css("height", e.data("contentWrapperScrollWidth")),
                        e.data("outerHeight", e.outerHeight()),
                        e.data("offsetTop", e.offset().top),
                        e.data("initalized", !0),
                        e.data("transformX", "0"),
                        e.addClass(e.attr("class") + "--init");
                })($(this)),
                r($(this)),
                $(window).on("resize", function () {
                    var e, s;
                    (s = (e = a).data("contentWrapperDom").scrollWidth),
                        e.data("contentWrapperScrollWidth", s),
                        (rightMax = e.data("contentWrapperScrollWidth") - o),
                        (rightMaxMinus = -rightMax),
                        e.data("rightMax", Number(rightMaxMinus)),
                        e.css("height", e.data("contentWrapperScrollWidth")),
                        e.data("outerHeight", e.outerHeight()),
                        e.data("offsetTop", e.offset().top),
                        e.data("transformX") <= e.data("rightMax") && e.data("contentWrapper").css({ transform: "translate3d(" + e.data("rightMax") + "px, 0, 0)" }),
                        r(a);
                });
        }),
            n.each(function (e, s) {
                var o, a, t, r;
                (o = $(this)),
                    (a = $(this).closest(".horizontal-scroll-section")),
                    (t = -o.parent().position().left),
                    (r = (r = o.data("triggerOffset")) ? (r = r) : 0.5),
                    o.data("triggerOffset", r),
                    o.data("triggerPositionLeft", t),
                    o.data("triggerSection", a);
            }),
            $(window).on("scroll", function () {
                (e = $(window).scrollTop()),
                    i.each(function (a, t) {
                        var i, n;
                        (i = $(this)),
                            (n = (-(e - i.data("offsetTop")) / (i.data("outerHeight") - (s - o))) * i.data("contentWrapperScrollWidth")),
                            (n = Math.min(0, n)),
                            (n = Math.max(n, i.data("rightMax"))),
                            i.data("transformX", Number(n)),
                            1 == i.data("initalized") && i.data("contentWrapper").css({ transform: "translate3d(" + i.data("transformX") + "px, 0, 0)" }),
                            r($(this));
                    }),
                    n.each(function (e, s) {
                        var o;
                        (o = $(this)).data("triggerSection").data("transformX") <= o.data("triggerPositionLeft") * o.data("triggerOffset")
                            ? o.data("triggerSection").addClass(o.data("class"))
                            : !1 !== o.data("remove-class") && o.data("triggerSection").removeClass(o.data("class"));
                    });
            });
    }),
    $(".select").on("change", function () {
        return $(this).val() ? $(this).css("color", "white") : $(this).css("color", "red");
    });
    
    
    //Phone number validation method (custom)
    $.validator.addMethod("phoneRegex", function(value, element) {
    // Define your regular expression pattern for phone number validation
     var pattern = /^\d+$/;

    // Test the value against the pattern
    return this.optional(element) || pattern.test(value);
  }, "Please enter a valid phone number");
    
    $('#cp_form_2').validate({
    rules: {
      name: 'required',
      phone: {
        required: true,
        phoneRegex: true, // Regex pattern to allow ()+_ and digits
        minlength: 10,
        maxlength: 12, // Modify the maximum length if needed
      },
      email: {
        required: true,
        email: true
      },
      DOB:{
          required: true
      },
      pax:{
          required: true
      },
      profession:{
          required: true
      },
      company:{
          required: true
      },
      firm_name:{
          required: true
      },
      designation:{
          required: true
      },
    },
    messages: {
      name: 'This field is required',
      phone: {
        required: 'This field is required',
        phoneRegex: 'Please enter a valid phone number',
      },
      email: {
        required: 'This field is required',
        email: 'Please enter a valid email address'
      },
      DOB: {
          required: 'This field is required'
      },
      pax: {
          required: 'This field is required'
      },
      profession: {
          required: 'This field is required'
      },
      company: {
          required: 'This field is required'
      },
      firm_name: {
          required: 'This field is required'
      },
      designation: {
          required: 'This field is required'
      },
      
    },
    submitHandler: function(form) {
     // Prevent the default form submission
      event.preventDefault();

     var formData = new FormData(form); // Create a FormData object to store the form data
    const cpFormBtn = document.getElementById('cp_form_btn');
    cpFormBtn.setAttribute('disabled', true);

    $('#backend-error').text('');    
    $.ajax({
      url: 'https://www.centralpark.in/events/cp_form_backend_2.php',
      type: 'POST',
      data: formData,
      dataType: 'json', // Explicitly specify the expected response type as JSON
      contentType: false, // Set contentType to false, as we are using FormData
      processData: false, // Set processData to false, as we are using FormData
      success: function(response) {
           //again active the form submit button
            cpFormBtn.removeAttribute('disabled', false);
        // Clear any previous error messages
        $('#errorContainer').empty();

        // Check the response from the server
        if (response && response.status === 'success') {
   
          window.location.href = "https://www.centralpark.in/events/thanks.php";
          form.reset();
        } else if (response && response.status === 'error') {
            
          $('#backend-error').text('Something went wrong...');    
          // If the response contains error messages, display them
          cpFormBtn.removeAttribute('disabled', false);
          var errors = response.errors;

          $.each(errors, function(key, value) {
            $err_label = '<label class="error">'+ value +'</label>'
            $('input[name="'+key+'"]').after($err_label);
          });
        }
      },
      error: function(xhr, status, error) {
        $('#backend-error').text('Something went wrong...');  
        cpFormBtn.removeAttribute('disabled', false);
        console.log(error); // Log any errors for debugging
      }
    });
//   });
    }
  });
