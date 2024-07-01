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
  function wrapWords(element) {
    let text = element.text();
    let wrappedText = text
      .split(" ")
      .map((word) => `<span>${word}</span>`)
      .join(" ");
    element.html(wrappedText);
  }

  wrapWords($("#con2 .c2_wrap .c2title h2"));

  function animateCon2() {
    let con2 = $("#con2");
    let con2Li = con2.find(".c2_wrap ul li");
    let animatedTitle = $("#animatedTitle span");

    let con2Position = con2.offset().top;
    let screenPosition = $(window).scrollTop() + $(window).height() * 0.8;

    if (con2Position < screenPosition) {
      con2Li.each(function (index) {
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

      $(window).off("scroll", animateCon2);
    }
  }

  $(window).on("scroll", animateCon2);

  // Con3
  function onScroll() {
    let con3 = $("#con3");
    let con3Position = con3.offset().top;
    let screenPosition = $(window).scrollTop() + $(window).height();

    if (con3Position < screenPosition) {
      con3.find("h3").addClass("animate");
      con3.find(".tab .tabMenu").addClass("animate");
      con3.find(".tabContents").addClass("animate");
      $(window).off("scroll", onScroll);
    }
  }

  $(window).on("scroll", onScroll);

  // Con4
  let con4 = $("#con4");
  let con4Items = con4.find(".c4_wrap .grid-container .item");

  con4Items.mouseenter(function () {
    $(this).find(".itemHover").stop().fadeIn(300);
  });

  con4Items.mouseleave(function () {
    $(this).find(".itemHover").stop().fadeOut(300);
  });

  $(window).on("scroll", function () {
    let scroll = $(window).scrollTop();
    let con4Offset = con4.offset().top;
    let windowHeight = $(window).height();

    if (scroll + windowHeight > con4Offset) {
      con4.addClass("show");
    }
  });
});
