// window.scrollTo(0, 0); // 스크롤을 최상단으로 위치시키는 것

Splitting(); // 텍스트 분할 등록

// const sidebar = document.querySelector(".sidebar");
// const btn = document.querySelector(".btn"); // CSS 속성을 그대로 사용할 수 있는 메서드는 querySelector + All만 가능

// btn.addEventListener("click", function () {
//   sidebar.classList.toggle("hide");
// });

ScrollTrigger.saveStyles(".mobile, .desktop");

ScrollTrigger.matchMedia({
  "(min-width: 1800px)": function () {
    //최소 너비 1600px이상에서만 애니메이션이 동작하도록 설정

    // Section02
    var ani02 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section02",
        start: "top top",
        // end: "bottom top",
        pin: true,
        // markers: true,
        scrub: false,
        toggleActions: "play none restart none",
      },
    });

    // s2 오브젝트 그룹핑

    ani02.fromTo(
      ".section02 video",
      { y: 600, opacity: 0 },
      { y: 0, duration: 2.5, ease: "expo.inOut", opacity: 1 }
    );

    // Section03
    var ani03 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section03",
        start: "top top",
        end: "bottom top",
        pin: true,
        markers: true,
        scrub: true,
        toggleActions: "play none restart none",
      },
    });

    // s3 오브젝트 그룹핑
    var s3TitleGroup = document.querySelectorAll(".section03 .s2-title-group ");
    // var s2Gopro = document.querySelector("#s2-gopro");

    ani03.fromTo(
      ".sharing",
      { y: 500, opacity: 0 },
      { y: 0, duration: 0.8, ease: "power3.inOut", opacity: 1 },
      0.4
    );
    ani03.fromTo(
      ".world",
      { y: 500, opacity: 0 },
      { y: 0, duration: 0.8, ease: "power3.inOut", opacity: 1 },
      0.4
    );
    ani03.fromTo(
      ".here",
      { y: 500, opacity: 0 },
      { y: 0, duration: 0.8, ease: "power3.inOut", opacity: 1 },
      0.4
    );
    ani03.fromTo(
      ".you",
      { y: 500, opacity: 0 },
      { y: 0, duration: 0.8, ease: "power3.inOut", opacity: 1 },
      0.4
    );
    ani03.fromTo(
      ".aroud",
      { y: 500, opacity: 0 },
      { y: 0, duration: 0.8, ease: "power3.inOut", opacity: 1 },
      0.4
    );

    ani03.fromTo(".turned-line", { y: 0 }, { y: 600 }, 0);
    ani03.fromTo(
      ".force",
      { y: 500, opacity: 0 },
      { y: 0, duration: 0.8, ease: "power3.inOut", opacity: 1, delay: 3 }
    );

    // Section08 : Cam-Detail-03 : ProLevel
    var ani08 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section08",
        start: "top 30%",
        // end: "bottom top",
        pin: false,
        // markers: true,
        scrub: false,
        toggleActions: "play none restart none",
      },
    });

    // 문자 간격 줄어드는 효과
    let chars = document.querySelectorAll(".title .char");
    let marginStart = 250;
    let marginEnd = 10;

    ani08.from(chars, {
      duration: 1.2,
      opacity: 0,
      ease: "power3.inOut",
      scrub: true,
      onUpdate: function () {
        let progress = this.progress();
        let currentMargin = marginStart + (marginEnd - marginStart) * progress;
        chars.forEach((char) => {
          char.style.margin = `0 ${currentMargin}px`;
        });
      },
    });

    // ------------ 절취선 ------------

    // 혜민님 가로스크롤 코드
    // 스크롤 애니메이션..

    // const races = document.querySelector(".horizontal");
    // console.log(races.offsetWidth); // 6488
    // console.log(window.innerWidth); // 1360

    // function getScrollAmount() {
    //   const racesWidth = races.offsetWidth;
    //   return -(racesWidth - window.innerWidth);
    // }

    // console.log(getScrollAmount()); // -5122 : 요소의 전체 길이 - 브라우저의 너비

    // const tween = gsap.to(races, {
    //   // 요소가 왼쪽으로 -5122px(오른쪽 끝까지)로 이동
    //   x: getScrollAmount,
    //   duration: 3,
    //   ease: "linear",
    // });

    // ScrollTrigger.create({
    //   trigger: ".horizontal",
    //   start: "top 5%",
    //   // markers: true,
    //   // end: "bottom -60000px",
    //   end: () => `+=${getScrollAmount() * -1}`, // 요소 전체 길이를 + 값으로 변경하여 누적 적용 : 이 값이 하단 길이에 지정되기 때문에 하단 길이가 요소 전체 길이에 닿을때까지 스크롤이 진행됨 : end 값이 4663 + 브라우저 높이 값에 표시됨
    //   animation: tween,
    //   invalidateOnRefresh: true, // 새로고침시 재계산
    //   pin: true, // start 지정 이후로 요소는 고정되고, 지정된 end 값까지 스크롤이 진행됨 : 5122 지점에서 스크롤이 풀림
    //   scrub: true, // 스크롤 속도에 따라 애니메이션 속도가 변경됨
    // });
    // // ------------ 절취선 ------------

    // // 스크롤 트리거 애니메이션

    // const animation01 = gsap.fromTo(
    //   "#s2-gopro",
    //   { y: 200, opacity: 0 },
    //   { y: 0, opacity: 1, ease: "expo.Out" }
    // );

    // // Use ScrollTrigger to trigger the animation on scroll
    // ScrollTrigger.create({
    //   trigger: ".section02",
    //   start: "top top",
    //   scrub: true,
    //   onEnter: () => animation01.play(),
    //   // onLeaveBack: () => animation01.reverse(),
    // });

    // const animation02 = gsap.to("#s3-exper", {
    //   opacity: 1,
    //   y: 0,
    //   paused: true, // Animation is paused initially
    // });

    // // Use ScrollTrigger to trigger the animation on scroll
    // ScrollTrigger.create({
    //   trigger: "#s3-exper",
    //   start: "top center",
    //   onEnter: () => animation02.play(),
    //   onLeaveBack: () => animation02.reverse(),
    // });

    // //
    // const animation03 = gsap.to("#s3-posit", {
    //   opacity: 1,
    //   y: 0,
    //   paused: true, // Animation is paused initially
    // });

    // // Use ScrollTrigger to trigger the animation on scroll
    // ScrollTrigger.create({
    //   trigger: "#s3-posit",
    //   start: "top center",
    //   onEnter: () => animation03.play(),
    //   onLeaveBack: () => animation03.reverse(),
    // });

    // ------------ 절취선 ------------
  },
});

// JQuery SIDE BAR 작동
$(function () {
  $(".btn").click(function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(".sidebar").slideDown();
      $(".sidebar").css("display", "flex");
    } else {
      $(".sidebar").slideUp();
    }
  });
});

// Cursor 작동
// let cursor = $("#cursor");
// // let cursorFollow = $('#cursor-follower');

// $(document).mousemove(function (e) {
//   let cursorWidth = cursor.width() / 2;
//   // let cursorFWidth = cursorFollow.width() / 2;

//   gsap.to(cursor, {
//     duration: 0.9,
//     left: e.pageX - cursor.width() * 0.5,
//     top: e.pageY - cursor.height() * 0.5,
//     ease: "back.out",
//   });
//   // gsap.to(cursorFollow, {duration: 1.4, left: e.pageX - cursorFollow.width() * 0.5, top: e.pageY - 20, ease: "back.out(2)"});
// });

// $(".cursor_effect")
//   .mouseenter(function () {
//     gsap.to(".dot", 0.5, { scale: 1, background: "transparent" });
//   })
//   .mouseleave(function () {
//     gsap.to(".dot", 0.5, { scale: 0.15, background: "#4274ff" });
//   });

// /* scroll event section */
// container.addListener((e) => {
//   let scrollTop = container.scrollTop;
//   $(".posNum").html(scrollTop);
// });
