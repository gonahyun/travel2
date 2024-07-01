$(document).ready(function () {
  // Tab Menu
  $(".tabMenu > li a:first").addClass("active");
  $(".tabContents .tabC:first").addClass("on");

  $(".tabMenu > li a").click(function (e) {
    e.preventDefault();
    let tabIndex = $(this).parent().index();
    $(".tabMenu > li a").removeClass("active");
    $(this).addClass("active");

    $(".tabContents .tabC").removeClass("on").eq(tabIndex).addClass("on");
  });

  $(".tabContents .tabC ul li i").click(function () {
    $(this).toggleClass("on");
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
  function animateCon2() {
    let con2 = $("#con2");
    let con2Position = con2.offset().top;
    let screenPosition = $(window).scrollTop() + $(window).height();

    if (con2Position < screenPosition) {
      con2.find("h3").addClass("animate");
      con2.find("ul").addClass("animate"); // 여기서 ul에 animate 클래스 추가
      $(window).off("scroll", animateCon2);
    }
  }

  $(window).on("scroll", animateCon2);

  // Con4
  function wrapWords(element) {
    let text = element.text().trim();
    let wrappedText = text
      .split(/\s+/)
      .map((word) => `<span>${word}</span>`)
      .join(" ");
    element.html(wrappedText);
  }

  wrapWords($("#con4 .c4_wrap .c4title h2"));

  function animateCon4() {
    let con4 = $("#con4");
    let con4Li = con4.find(".c4_wrap ul li");
    let animatedTitle = $("#animatedTitle span");

    let con4Position = con4.offset().top;
    let screenPosition = $(window).scrollTop() + $(window).height() * 0.8;

    if (con4Position < screenPosition) {
      con4Li.each(function (index) {
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

      $(window).off("scroll", animateCon4);
    }
  }
  $(window).on("scroll", animateCon4);
});
