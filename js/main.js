window.scrollTo(0, 0); // 스크롤을 최상단으로 위치시키는 것

//기준 설정
//screen and (min-width: 1440px)에 해당한다.

ScrollTrigger.saveStyles(".mobile, .desktop");

ScrollTrigger.matchMedia({
  "(min-width: 1600px)": function () {
    //최소 너비 1600px이상에서만 애니메이션이 동작하도록 설정

    var ani02 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section02",
        start: "top top",
        // end: "bottom top",
        pin: false,
        markers: true,
        scrub: false,
        toggleActions: "play none restart none",
      },
    });

    // 오브젝트 그룹핑
    var s2TitleGroup = document.querySelectorAll(".section02 .s2-title-group ");
    var s2Gopro = document.querySelector("#s2-gopro");

    ani02.fromTo(
      ".surfing",
      { x: 3000, scale: 1, opacity: 0 },
      { x: 0, duration: 0.4, ease: "power3.inOut", opacity: 1 },
      0
    );
    ani02.fromTo(
      s2TitleGroup,
      { y: 500, opacity: 0 },
      { y: 0, duration: 0.4, ease: "power3.inOut", opacity: 1 },
      0.2
    );
    ani02.fromTo(
      ".section02 video",
      { y: 500, opacity: 0 },
      { y: 0, duration: 0.4, ease: "power3.inOut", opacity: 1 },
      0.4
    );
    ani02.fromTo(
      s2Gopro,
      { y: 500, opacity: 0 },
      { y: 0, duration: 0.4, ease: "power3.inOut", opacity: 1 },
      0.2
    );
    ani02.fromTo(
      ".years",
      { y: 500, opacity: 0 },
      { y: 0, duration: 0.4, ease: "power3.inOut", opacity: 1 },
      0.2
    );
    ani02.fromTo(
      ".cando",
      { y: 500, opacity: 0 },
      { y: 0, duration: 0.4, ease: "power3.inOut", opacity: 1 },
      0.2
    );
  },
});
