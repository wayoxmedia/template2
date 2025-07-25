!(function (e) {
  "use strict";
  var i = function () {
      new Swiper(".main-swiper", {
        slidesPerView: 3,
        spaceBetween: 80,
        speed: 700,
        loop: !0,
        navigation: { nextEl: ".icon-arrow-right", prevEl: ".icon-arrow-left" },
        breakpoints: { 300: { slidesPerView: 1, spaceBetween: 20 }, 768: { slidesPerView: 2, spaceBetween: 20 }, 1200: { slidesPerView: 3, spaceBetween: 80 } },
      }),
        new Swiper(".slideshow", { slidesPerView: 1, spaceBetween: 0, speed: 1e3, loop: !0, navigation: { nextEl: ".icon-arrow-right", prevEl: ".icon-arrow-left" } }),
        new Swiper(".two-column-swiper .swiper", { slidesPerView: 1, loop: !0, speed: 900, navigation: { nextEl: ".two-column-swiper .icon-arrow-right", prevEl: ".two-column-swiper .icon-arrow-left" } }),
        new Swiper(".overlay-swiper", { slidesPerView: "auto", loop: !0, navigation: { nextEl: ".icon-arrow-right", prevEl: ".icon-arrow-left" } }),
        e(".product-carousel").each(function () {
          var i = e(this).attr("id");
          new Swiper("#" + i + " .swiper", {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: { nextEl: "#" + i + " .icon-arrow-right", prevEl: "#" + i + " .icon-arrow-left" },
            breakpoints: { 0: { slidesPerView: 2, spaceBetween: 20, pagination: { el: ".swiper-pagination", clickable: !0 } }, 999: { slidesPerView: 3, spaceBetween: 10 }, 1366: { slidesPerView: 4, spaceBetween: 40 } },
          });
        }),
        new Swiper(".testimonial-swiper", {
          effect: "coverflow",
          grabCursor: !0,
          centeredSlides: !0,
          loop: !0,
          slidesPerView: "auto",
          coverflowEffect: { fade: !0 },
          pagination: { el: ".testimonial-swiper-pagination", clickable: !0 },
        }),
        new Swiper(".review-swiper", { slidesPerView: 1, spaceBetween: 20, loop: !0, navigation: { nextEl: ".icon-arrow-right", prevEl: ".icon-arrow-left" }, pagination: { el: ".swiper-pagination", clickable: !0 } });
      var i = new Swiper(".product-thumbnail-slider", { slidesPerView: 3, spaceBetween: 20, direction: "vertical", breakpoints: { 0: { direction: "horizontal" }, 992: { direction: "vertical" } } });
      new Swiper(".product-large-slider", { slidesPerView: 1, spaceBetween: 0, effect: "fade", thumbs: { swiper: i }, pagination: { el: ".swiper-pagination", clickable: !0 } });
    },
    t = function () {
      e(".product-qty").each(function () {
        var i = e(this);
        i.find(".quantity-right-plus").click(function (e) {
          e.preventDefault();
          var t = parseInt(i.find("#quantity").val());
          i.find("#quantity").val(t + 1);
        }),
          i.find(".quantity-left-minus").click(function (e) {
            e.preventDefault();
            var t = parseInt(i.find("#quantity").val());
            t > 0 && i.find("#quantity").val(t - 1);
          });
      });
    },
    n = function () {
      jarallax(document.querySelectorAll(".jarallax")), jarallax(document.querySelectorAll(".jarallax-keep-img"), { keepImg: !0 });
    },
    o = function () {
      e(".txt-fx").each(function () {
        var i = "",
          t = 0,
          n = this.textContent.split(/\s/);
        e.each(n, function (e, n) {
          i += '<span class="word">';
          for (var o = 0, a = n.length; o < a; o++) (i += "<span class='letter' style='transition-delay:" + (300 + 10 * t) + "ms;'>" + n[o] + "</span>"), t++;
          (i += "</span>"), (i += "<span class='letter' style='transition-delay:300ms;'>&nbsp;</span>"), t++;
        }),
          (this.innerHTML = i);
      });
    },
    a = function () {
      e(window).scrollTop() >= 200 ? e(".navbar.fixed-top").addClass("bg-black") : e(".navbar.fixed-top").removeClass("bg-black");
    },
    s = function () {
      e(".grid").each(function () {
        var i = e(".button-group"),
          t = i.find(".is-checked").attr("data-filter"),
          n = e(".grid").isotope({ itemSelector: ".product-item", layoutMode: "fitRows", filter: t });
        e(".button-group").on("click", "a", function (i) {
          i.preventDefault(), (t = e(this).attr("data-filter")), n.isotope({ filter: t });
        }),
          e(".button-group").each(function (t, n) {
            i.on("click", "a", function () {
              i.find(".is-checked").removeClass("is-checked"), e(this).addClass("is-checked");
            });
          });
      });
    },
    r = function () {
      e(".image-zoom")
      .on("mouseover", function () {
        e(this)
        .children(".photo")
        .css({ transform: "scale(" + e(this).attr("data-scale") + ")" });
      })
      .on("mouseout", function () {
        e(this).children(".photo").css({ transform: "scale(1)" });
      })
      .on("mousemove", function (i) {
        e(this)
        .children(".photo")
        .css({ "transform-origin": ((i.pageX - e(this).offset().left) / e(this).width()) * 100 + "% " + ((i.pageY - e(this).offset().top) / e(this).height()) * 100 + "%" });
      })
      .each(function () {
        e(this)
        .append('<div class="photo"></div>')
        .children(".photo")
        .css({ "background-image": "url(" + e(this).attr("data-image") + ")" });
      });
    },
    c = function () {
      e(".navbar").on("click", ".search-button", function (i) {
        e(".search-popup").toggleClass("is-visible");
      }),
        e(".navbar").on("click", ".btn-close-search", function (i) {
          e(".search-popup").toggleClass("is-visible");
        }),
        e(".search-popup-trigger").on("click", function (i) {
          i.preventDefault(),
            e(".search-popup").addClass("is-visible"),
            setTimeout(function () {
              e(".search-popup").find("#search-popup").focus();
            }, 350);
        }),
        e(".search-popup").on("click", function (i) {
          (e(i.target).is(".search-popup-close") || e(i.target).is(".search-popup-close svg") || e(i.target).is(".search-popup-close path") || e(i.target).is(".search-popup")) &&
          (i.preventDefault(), e(this).removeClass("is-visible"));
        }),
        e(document).keyup(function (i) {
          "27" === i.which && e(".search-popup").removeClass("is-visible");
        });
    };

  e(window).scroll(function () {
    a();
  }),
    e(window).load(function () {
      e(".preloader").addClass("loaded"),
        e(".btn-nav").on("click tap", function () {
          e(".nav-content").toggleClass("showNav hideNav").removeClass("hidden"), e(this).toggleClass("animated");
        }),
        s();
    }),
    e(document).ready(function () {
      c(),
        n(),
        o(),
        t(),
        i(),
        r(),
        e(".youtube").colorbox({ iframe: !0, innerWidth: 960, innerHeight: 585 }),
        AOS.init({ duration: 1200, once: !0 }),
        new hcSticky(".sticky-info", { stickTo: "section.single-product", innerTop: 200, responsive: { 980: { disable: !0 } } });
    });
})(jQuery);
