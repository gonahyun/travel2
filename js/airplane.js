$(function () {
  $(".country:first-child").addClass("open");

  $(".country").click(function () {
    $(this).find("ul > li:nth-child(2)").toggleClass("open");

    $(".country").not(this).find("ul > li:nth-child(2)").removeClass("open");
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

  $(window).on("scroll", onScroll);

  function animateCon3() {
    let con3 = $("#con3");
    let con3Li = con3.find(".c3_wrap > ul ");

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

      $(window).off("scroll", animateCon3);
    }
  }

  $(window).on("scroll", animateCon3);

  // con4
  function onScroll() {
    let con4 = $("#con4");
    let con4Position = con4.offset().top;
    let screenPosition = $(window).scrollTop() + $(window).height();

    if (con4Position < screenPosition) {
      con4.find("h2").addClass("animate");
      con4.find(" .slider").addClass("animate");
      $(window).off("scroll", onScroll);
    }
  }
});
