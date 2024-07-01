$(document).ready(function () {
  // Tab Menu
  $(".tabMenu li:first").addClass("active");
  $(".tabContents > ul > li:first").addClass("on");

  $(".tabMenu li").click(function () {
    let tabIndex = $(this).index();
    $(".tabMenu li").removeClass("active");
    $(this).addClass("active");

    $(".tabContents > ul > li").removeClass("on").eq(tabIndex).addClass("on");
  });

  // Visual
  let visual = $("#visual");
  visual.find(".v_wrap .v-txt h2").addClass("animate");
  visual.find(".v_wrap .v-txt p").addClass("animate");
  visual.find(".search").addClass("animate");

  $("#visual .check").click(function () {
    $(this).toggleClass("on");
  });

  // Con1
  let con1 = $("#con1");
  let con1Banner = con1.find(".banner .banner-txt");
  let con1Li2 = con1.find(".banner ul li:nth-child(2)");

  $(window).on("scroll", function () {
    let con1Position = con1.offset().top;
    let screenPosition = $(window).scrollTop() + $(window).height();

    if (con1Position < screenPosition) {
      con1Banner.addClass("animate-slideFromLeft");
      con1Li2.addClass("animate-slideFromRight");
    }
  });

  // Con2
  let con2 = $("#con2");
  let con2Items = con2.find(".c2_wrap .grid-container .item");

  con2Items.mouseenter(function () {
    $(this).find(".itemHover").stop().fadeIn(300);
  });

  con2Items.mouseleave(function () {
    $(this).find(".itemHover").stop().fadeOut(300);
  });

  $(window).on("scroll", function () {
    let scroll = $(window).scrollTop();
    let con2Offset = con2.offset().top;
    let windowHeight = $(window).height();

    if (scroll + windowHeight > con2Offset) {
      con2.addClass("show");
    }
  });

  // Con3
  function wrapWords(element) {
    let text = element.text();
    let wrappedText = text
      .split(" ")
      .map((word) => `<span>${word}</span>`)
      .join(" ");
    element.html(wrappedText);
  }

  wrapWords($("#con3 .c3_wrap .c3title h2"));

  function animateCon3() {
    let con3 = $("#con3");
    let con3Li = con3.find(".c3_wrap ul li");
    let animatedTitle = $("#animatedTitle span");

    let con3Position = con3.offset().top;
    let screenPosition = $(window).scrollTop() + $(window).height() * 0.8;

    if (con3Position < screenPosition) {
      con3Li.each(function (index) {
        $(this).addClass("animate");

        if (index === 1 || index === 3) {
          $(this).css({
            "transition-delay": `${(index % 2) * 2}s`,
            transform: "translateX(50%)",
            opacity: "1",
          });
        } else {
          $(this).css({
            "transition-delay": `${(index % 2) * 2}s`,
            transform: "translateX(-50%)",
            opacity: "1",
          });
        }
      });

      animatedTitle.each(function (index) {
        $(this)
          .css("animation-delay", `${index * 0.2}s`)
          .addClass("animate");
      });

      $(window).off("scroll", animateCon3);
    }
  }

  $(window).on("scroll", animateCon3);

  // // Con4
  function onScroll() {
    let con4 = $("#con4");
    let con4Position = con4.offset().top;
    let screenPosition = $(window).scrollTop() + $(window).height();

    if (con4Position < screenPosition) {
      con4.find("h3").addClass("animate");
      con4.find(".tab .tabMenu").addClass("animate");
      con4.find(".tabContents").addClass("animate");
      $(window).off("scroll", onScroll);
    }
  }

  $(window).on("scroll", onScroll);
});
