// 이미지 슬라이드
$(function () {
  let currentIndex = 0;
  const slideCount = $(".slider").length;
  const slideWidth = $(".slider").width();

  $(".sliderWrap").css("width", (slideCount + 1) * 100 + "%");

  $(".sliderWrap").append($(".slider").first().clone(true));
  setInterval(function () {
    currentIndex++;
    if (currentIndex === slideCount) {
      $(".sliderWrap").animate(
        { marginLeft: -slideWidth * currentIndex },
        800,
        function () {
          $(".sliderWrap").css("margin-left", 0);
          currentIndex = 0;
        }
      );
    } else {
      $(".sliderWrap").animate({ marginLeft: -slideWidth * currentIndex }, 800);
    }
  }, 3000);

  // con2
  $(".tabMenu > li a:first").addClass("active");
  $(".tabContents .country:first").addClass("on");

  $(".tabMenu > li a").click(function (e) {
    e.preventDefault();
    let tabIndex = $(this).parent().index();
    $(".tabMenu > li a").removeClass("active");
    $(this).addClass("active");

    $(".tabContents .country").removeClass("on").eq(tabIndex).addClass("on");
  });
});

$(document).ready(function () {
  function onScroll() {
    let con2 = $("#con2");
    let con2Position = con2.offset().top;
    let screenPosition = $(window).scrollTop() + $(window).height();

    if (con2Position < screenPosition) {
      con2.find("h3").addClass("animate");
      con2.find(".tab .tabMenu").addClass("animate");
      con2.find(".tabContents").addClass("animate");
      $(window).off("scroll", onScroll);
    }
  }

  $(window).on("scroll", onScroll);
});

// con3
$(document).ready(function () {
  $(window).scroll(function () {
    let con3 = $("#con3");
    let con3Position = con3.offset().top;
    let screenPosition = $(window).scrollTop() + $(window).height();

    if (con3Position < screenPosition) {
      con3.find(".banner .banner-txt").addClass("animate-slideFromLeft");
      con3
        .find(".banner ul li:nth-child(2)")
        .addClass("animate-slideFromRight");
    }
  });
});

// con4
let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let con4Dom = document.querySelector(".con4");
let listItemDom = document.querySelector(".con4 .c4-list");
let thumbnailDom = document.querySelector(".con4 .thumbnail");

let timeAutoNext = 7000;
let runAutoRun = setTimeout(() => {
  nextDom.click();
}, timeAutoNext);

nextDom.onclick = function () {
  showSlider("next");
};
prevDom.onclick = function () {
  showSlider("prev");
};
function showSlider(type) {
  let itemSlider = document.querySelectorAll(".con4 .c4-list .c4-item");
  let itemThumbnail = document.querySelectorAll(".con4 .thumbnail .item");

  if (type === "next") {
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    con4Dom.classList.add("next");
  } else {
    let positionLastItem = itemSlider.length - 1;
    listItemDom.prepend(itemSlider[positionLastItem]);
    thumbnailDom.prepend(itemThumbnail[positionLastItem]);
    con4Dom.classList.add("prev");
  }

  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(() => {
    nextDom.click();
    con4Dom.classList.remove("next");
    con4Dom.classList.remove("prev");
  }, timeAutoNext);
}

// con5
let currentSlide = 0;
const totalSlides = $(".c5_slider").length;
const intervalTime = 5000; // 5초마다 자동 전환

$(".c5_slider").hide().first().show();

function showNextSlide() {
  $(".c5_slider").eq(currentSlide).fadeOut(1200);
  currentSlide = (currentSlide + 1) % totalSlides;
  $(".c5_slider").eq(currentSlide).fadeIn(1200);
}

// 5초마다 자동 슬라이드 전환
let slideInterval = setInterval(showNextSlide, intervalTime);

$("#prev2").click(function () {
  clearInterval(slideInterval);
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  $(".c5_slider").hide().eq(currentSlide).fadeIn(1200);
  slideInterval = setInterval(showNextSlide, intervalTime);
});

$("#next2").click(function () {
  clearInterval(slideInterval);
  showNextSlide();
  slideInterval = setInterval(showNextSlide, intervalTime);
});
