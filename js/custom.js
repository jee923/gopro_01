// START of DOM Content Loaded Method
document.addEventListener("DOMContentLoaded", function () {
  // 문서에 있는 모든 컨텐츠가 로드되면 실행
  Splitting(); // 텍스트 분할
  gsap.registerPlugin(ScrollTrigger); // GSAP 스크롤 트리거 플러그인 등록
  ScrollTrigger.matchMedia({
    "(min-width: 1600px)": function () {
      // 최소 너비 1600px에서 기능 실행되도록 설정

      // ----- 실행할 동작 START -----

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

      // Section01 : Intro-Video
      const s01ani = gsap.timeline({
        scrollTrigger: {
          trigger: ".section01",
          start: () => "window.innerHeight",
          // end: "bottom center",
          pin: true,
          // pinSpacing: true,
          scrub: 1,
          yoyo: true,
          toggleActions: "play none restart none",
          // markers: true,
          id: "s01",
        },
      });

      s01ani.fromTo(
        ".section01 video",
        {
          clipPath: "circle(0.5% at 50% 50%)",
        },
        {
          clipPath: "circle(100% at 50% 50%)",
          // ease: "expo.out",
          // duration: 3,
        }
      );

      // Section02 : Brand-Main
      const s02ani = gsap.timeline({
        scrollTrigger: {
          trigger: ".section02",
          start: () => "window.innerHeight",
          end: "+=2000",
          pin: true,
          // scrub: 1,
          toggleActions: "play none restart none",
          // markers: true,
          id: "s02",
        },
      });

      s02ani.fromTo(
        ".section02 .s02-title-g",
        {
          x: -200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          ease: "expo.out",
          duration: 1.2,
        }
      );

      s02ani.fromTo(
        ".section02 video",
        { y: 500, opacity: 0 },
        { y: 0, duration: 1.5, ease: "expo.out", opacity: 1 },
        "<"
      );

      s02ani.fromTo(
        "#s2-gopro path",
        {
          strokeDasharray: 914,
          strokeDashoffset: 914,
        },
        {
          duration: 1.4,
          ease: "sine.inOut",
          strokeDashoffset: 0,
        },
        0.4
      );

      s02ani.fromTo(
        "#s2-gopro",
        {
          fill: "transparent",
        },
        {
          duration: 2,
          ease: "back.out",
          fill: "#f8f8f8",
        },
        1.2
      );

      // Section03 : Brand-Detail
      const s03ani = gsap.timeline({
        scrollTrigger: {
          trigger: ".section03",
          start: () => "window.innerHeight",
          end: "+=2000",
          pin: true,
          // scrub: 1,
          toggleActions: "play none restart none",
          // markers: true,
          id: "s03-1",
        },
      });

      s03ani.fromTo(
        ".section03 .s03-title-g01",
        {
          y: -200,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "expo.out",
          duration: 2,
        }
      );

      s03ani.fromTo(
        "#s3-exper path",
        {
          strokeDasharray: 914,
          strokeDashoffset: 914,
        },
        {
          duration: 1.4,
          ease: "sine.inOut",
          strokeDashoffset: 0,
        },
        0.4
      );

      s03ani.fromTo(
        "#s3-exper",
        {
          fill: "transparent",
        },
        {
          duration: 2,
          ease: "back.out",
          fill: "#f8f8f8",
        },
        1.2
      );

      const s03aniO = gsap.timeline({
        scrollTrigger: {
          trigger: ".section03",
          start: "center center",
          // end: "+=1500",
          // pin: true,
          scrub: true,
          toggleActions: "play none restart none",
          // markers: true,
          id: "s03-circle",
        },
      });

      s03aniO.fromTo(
        ".section03 .turned-line",
        {
          y: 0,
        },
        {
          y: 720,
        },
        "+="
      );

      // s03aniO.fromTo(
      //   ".section03 .s03-title-g02",
      //   {
      //     opacity: 0,
      //     y: 720,
      //   },
      //   { opactiy: 1, y: 0 }
      // );

      const s03aniT = gsap.timeline({
        scrollTrigger: {
          trigger: ".section03",
          start: "center top",
          end: "+=2000",
          pin: true,
          // scrub: 1,
          toggleActions: "play none restart none",
          // markers: true,
          id: "s03-2",
        },
      });

      s03aniT.fromTo(
        ".section03 .s03-title-g02",
        {
          y: 200,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "expo.out",
          duration: 2,
        }
      );

      s03aniT.fromTo(
        "#s3-posit path",
        {
          strokeDasharray: 914,
          strokeDashoffset: 914,
        },
        {
          duration: 1.4,
          ease: "sine.inOut",
          strokeDashoffset: 0,
        },
        0.4
      );

      s03aniT.fromTo(
        "#s3-posit",
        {
          fill: "transparent",
        },
        {
          duration: 2,
          ease: "back.out",
          fill: "#f8f8f8",
        },
        1.2
      );

      // Section04 : Cam-Intro-Video
      const s04ani = gsap.timeline({
        scrollTrigger: {
          trigger: ".section04",
          start: () => "window.innerHeight",
          pin: true,
          // scrub: 1,
          toggleActions: "play none restart none",
          // markers: true,
          id: "s04",
        },
      });

      // section05: Cam-Main
      const s05ani = gsap.timeline({
        scrollTrigger: {
          trigger: ".section05",
          start: () => "window.innerHeight",
          pin: true,
          // scrub: 1,
          toggleActions: "play none restart none",
          markers: true,
          id: "s05",
        },
      });

      s05ani.fromTo(
        ".section05 .img01 img",
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          ease: "expo.out",
          duration: 2,
        }
      );

      s05ani.fromTo(
        ".section05 .s05-title-g01",
        {
          x: -200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          ease: "expo.out",
          duration: 1.2,
        },
        "<"
      );

      s05ani.fromTo(
        ".section05 .s05-title-g02",
        {
          x: 200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          ease: "expo.out",
          duration: 0.6,
        },
        0.1
      );

      // S6-Horizontal Container
      let s6Sections = gsap.utils.toArray(".panel");

      gsap.to(s6Sections, {
        xPercent: -100 * (s6Sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".s6-container",
          pin: true,
          scrub: 1,
          markers: true,
          id: "가로",
          snap: 1 / (s6Sections.length - 1),
          end: () => "+=" + document.querySelector(".s6-container").offsetWidth,
        },
      });

      // Section06 : Cam-Detail-01 : 5.3K
      // const s06ani = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ".section06",
      //     start: () => "window.innerHeight",
      //     // end: "+=2000",
      //     // pin: true,
      //     scrub: 1,
      //     toggleActions: "play none restart none",
      //     markers: true,
      //     id: "5.3k",
      //   },
      // });

      // s06ani.fromTo(
      //   ".section06 video",
      //   {
      //     scale: 0.8,
      //   },
      //   {
      //     scale: 1,
      //   }
      // );

      // s06ani.fromTo(
      //   ".section06 .s6-title-g",
      //   {
      //     opacity: 0,
      //   },
      //   {
      //     opacity: 1,
      //   },
      //   0.6
      // );

      // Section07 : Cam-Detail-02 : LargerSensor
      const s07ani = gsap.timeline({
        scrollTrigger: {
          trigger: ".section07",
          start: () => "window.innerHeight",
          // end: "bottom center",
          pin: true,
          // pinSpacing: true,
          scrub: 1,
          yoyo: true,
          toggleActions: "play none restart none",
          // markers: true,
          id: "s07-텍스트스크롤",
        },
      });

      let s7TextGroup = document.querySelector(".section07 .s7-text-group");

      gsap.to(s7TextGroup, {
        y: () => -(window.scrollY * 0.1), // .s7-text-group의 스크롤 속도 느리게
        ease: "sine.out",
      });

      s07ani.fromTo(
        ".section07",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      );
      s07ani.to(".section07 .s7-text-group", {
        scrub: 3,
        y: -2760,
      });

      // s07ani.to(
      //   (".section07 video",
      //   {
      //     position: "fixed",
      //   })
      // );

      // Section08 : Cam-Detail-03 : ProLevel
      const s08ani = gsap.timeline({
        scrollTrigger: {
          trigger: ".section08",
          start: "-600 top",
          // end: "bottom top",
          pin: false,
          scrub: false,
          toggleActions: "play none restart none",
          // markers: true,
          id: "s08-자간",
        },
      });

      // 문자 간격 줄어드는 효과
      let chars = document.querySelectorAll(".title .char");
      let marginStart = 250;
      let marginEnd = 5;

      s08ani.from(chars, {
        duration: 1.2,
        opacity: 0,
        ease: "power3.inOut",
        scrub: true,
        onUpdate: function () {
          let progress = this.progress();
          let currentMargin =
            marginStart + (marginEnd - marginStart) * progress;
          chars.forEach((char) => {
            char.style.margin = `0 ${currentMargin}px`;
          });
        },
      });

      const s08aniO = gsap.timeline({
        scrollTrigger: {
          trigger: ".section08",
          start: () => "window.innerHeight",
          end: "+=1000",
          pin: false,
          scrub: 1,
          toggleActions: "play none restart none",
          yoyo: true,
          // markers: true,
          id: "s08-처음사진",
        },
      });

      s08aniO.fromTo(
        ".section08 .stun-g",
        {
          y: 300,
        },
        {
          y: 0,
        }
      );

      s08aniO.to(
        ".section08 .img01 img",
        {
          y: -119,
        },
        "<"
      );

      s08aniO.fromTo(
        ".section08 .new-g",
        {
          y: 200,
        },
        {
          y: -200,
        },
        "-="
      );

      s08aniO.fromTo(
        ".section08 .bit-g",
        { y: 600 },
        {
          y: -200,
        },
        "<"
      );

      const s08aniT = gsap.timeline({
        scrollTrigger: {
          trigger: ".section08 .stun-g .img01",
          start: () => "window.innerHeight",
          end: "+=1300",
          pin: false,
          scrub: 1,
          toggleActions: "play none restart none",
          yoyo: true,
          // markers: true,
          id: "s08-가로텍스트",
        },
      });

      s08aniT.to(".section08 .img02 img", {
        scale: 1,
        x: -200,
        y: -50,
      });

      s08aniT.to(
        ".section08 .bit",
        {
          x: "-4464px",
        },
        "<"
      );

      s08aniT.to(
        ".section08 .bit-stroke",
        {
          x: "-4464px",
        },
        "<"
      );
      s08aniT.to(
        ".section08 .blue",
        {
          x: "4354px",
        },
        "<"
      );
      s08aniT.to(
        ".section08 .blue-stroke",
        {
          x: "4354px",
        },
        "<"
      );

      // section09
      const s09ani = gsap.timeline({
        scrollTrigger: {
          trigger: ".section09",
          start: () => "window.innerHeight",
          end: "+=2000",
          pin: true,
          scrub: 1,
          toggleActions: "play none restart none",
          // yoyo: true,
          // markers: true,
          id: "s09",
        },
      });

      // section09 이미지 돌아다니게 하기
      const section09 = document.querySelector(".section09");
      function getRandomPosition() {
        const x = Math.random() * (section09.clientWidth - 10); // Adjusted for image size
        const y = Math.random() * (section09.clientHeight - 10);
        return { x, y };
      }

      document.querySelectorAll(".imgs > div").forEach((imgDiv) => {
        const startPosition = getRandomPosition();
        const duration = Math.random() * (7 - 3) + 3; // 3에서 5초 사이의 무작위 지속 시간

        imgDiv.style.left = `${startPosition.x}px`;
        imgDiv.style.top = `${startPosition.y}px`;

        gsap.to(imgDiv, {
          x: Math.random() * (section09.clientWidth - 500),
          y: Math.random() * (section09.clientHeight - 500),
          duration,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
        });
      });

      // section10 : Cam-Detail-05 : NightEffects
      const s10ani = gsap.timeline({
        scrollTrigger: {
          trigger: ".section10",
          start: () => "window.innerHeight",
          pin: true,
          scrub: 1,
          toggleActions: "play none restart none",
          markers: true,
          id: "s10",
        },
      });

      // section11 : Lens-Intro-Video
      const s11ani = gsap.timeline({
        scrollTrigger: {
          trigger: ".section11",
          start: () => "window.innerHeight",
          pin: true,
          scrub: 1,
          toggleActions: "play none restart none",
          // markers: true,
          id: "s11",
        },
      });

      // section12: Lens-Main
      const s12ani = gsap.timeline({
        scrollTrigger: {
          trigger: ".section12",
          start: () => "window.innerHeight",
          pin: true,
          // scrub: 1,
          toggleActions: "play none none none",
          // markers: true,
          id: "s12",
        },
      });

      s12ani.fromTo(
        ".section12 .s12-title-g",
        {
          x: -200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          ease: "expo.out",
          duration: 1.2,
        }
      );

      s12ani.fromTo(
        ".section12 .mod",
        {
          x: 200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          ease: "expo.out",
          duration: 0.6,
        },
        0.1
      );

      s12ani.to(
        ".section12 .pov-01",
        {
          opacity: 0,
          duration: 0.6,
          ease: "sine.out",
        },
        0.5
      );

      s12ani.fromTo(
        ".section12 .pov-02",
        {
          opacity: 0,
        },
        {
          duration: 0.4,
          opacity: 1,
        },
        "<"
      );

      const s12aniO = gsap.timeline({
        scrollTrigger: {
          trigger: ".section12",
          start: "40% 20%",
          // pin: true,
          scrub: 2,
          toggleActions: "play none restart none",
          // markers: true,
          id: "s12-렌즈",
        },
      });

      s12aniO.to(
        ".section12 .img01 img",
        {
          y: -500,
        },
        -1
      );

      s12aniO.to(
        ".section12 .img02 img",
        {
          y: -700,
        },
        "<"
      );

      s12aniO.to(
        ".section12 .mod",
        {
          y: -500,
        },
        "<"
      );

      s12aniO.to(
        ".section12 .s12-title-g",
        {
          y: -500,
        },
        "<"
      );

      // Section14 : Lens-Detail-02 : Wide4K 마지막 (Horizon START)
      const s14ani = gsap.timeline({
        scrollTrigger: {
          trigger: ".section14",
          start: () => "window.innerHeight",
          // end: "+=1080",
          pin: true,
          scrub: 1,
          yoyo: true,
          toggleActions: "play none restart none",
          // markers: true,
          id: "s14",
        },
      });

      s14ani.to(".section14 .s14-wide-g", {
        x: 100,
      });

      s14ani.fromTo(
        ".section14 .img03 > img",
        {
          clipPath: "polygon(26% 26%, 74% 27%, 74% 74%, 26% 74%)",
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "expo.out",
        },
        "<"
      );

      // S15-Horizontal Container
      let s15Sections = gsap.utils.toArray(".panel02");

      gsap.to(s15Sections, {
        xPercent: -100 * (s15Sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".s15-container",
          pin: true,
          scrub: 1,
          markers: true,
          id: "가로",
          snap: 1 / (s15Sections.length - 1),
          end: () =>
            "+=" + document.querySelector(".s15-container").offsetWidth,
        },
      });

      // Section17 : Lens-Detail-04 : Smaller
      const s17ani = gsap.timeline({
        scrollTrigger: {
          trigger: ".section17",
          start: () => "window.innerHeight",
          pin: true,
          // scrub: 1,
          toggleActions: "play none restart none",
          // markers: true,
          id: "s17",
        },
      });

      s17ani.fromTo(
        "#smaller path",
        {
          strokeDasharray: 600,
          strokeDashoffset: 628,
        },
        {
          duration: 1.8,
          ease: "sine.inOut",
          strokeDashoffset: 0,
        }
      );

      s17ani.fromTo(
        "#lighter path",
        {
          strokeDasharray: 600,
          strokeDashoffset: 628,
        },
        {
          duration: 1.6,
          ease: "sine.inOut",
          strokeDashoffset: 0,
        },
        0.3
      );

      s17ani.fromTo(
        "#tougher path",
        {
          strokeDasharray: 600,
          strokeDashoffset: 628,
        },
        {
          duration: 1.4,
          ease: "sine.inOut",
          strokeDashoffset: 0,
        },
        0.6
      );

      s17ani.fromTo(
        "#smaller",
        {
          fill: "transparent",
        },
        {
          duration: 2,
          ease: "back.out",
          fill: "#f8f8f8",
        },
        1.4
      );

      s17ani.fromTo(
        "#lighter",
        {
          fill: "transparent",
        },
        {
          duration: 2,
          ease: "back.out",
          fill: "#f8f8f8",
        },
        "<"
      );
      s17ani.fromTo(
        "#tougher",
        {
          fill: "transparent",
        },
        {
          duration: 2,
          ease: "back.out",
          fill: "#f8f8f8",
        },
        "<"
      );

      // ----- 실행할 동작 END -----
      // matchMedia 괄호 닫는 부분
    },
  });

  // ----- 개별 기능 START -----

  // 텍스트 stroke 효과
  // const s2Gopro = document.querySelectorAll("#s2-gopro path");

  // console.log(s2Gopro);

  // for (let i = 0; i < localStorage.length; i++) {
  //   console.log(`Letter ${i} is ${s2Gopro[i].getTotalLength()}`);
  // }

  // 스크롤 스무더 (GSAP 유료)
  // let skewSetter = gsap.quickTo("#s18-wrapper img", "skewY"), // fast
  //   clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

  // ScrollSmoother.create({
  //   wrapper: "#s18-wrapper",
  //   content: "#content",
  //   smooth: 2,
  //   speed: 3,
  //   effects: true,
  //   onUpdate: (self) => skewSetter(clamp(self.getVelocity() / -50)),
  //   onStop: () => skewSetter(0),
  // });

  // var ani02 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".section02",
  //     start: "top 30%",
  //     pin: false,
  //     markers: true,
  //     scrub: false,
  //     toggleActions: "play none restart none",
  //   },
  // });

  // ani02.fromTo(
  //   ".surfing",
  //   { x: 0, scale: 1, rotate: 0 },
  //   { duration: 0.4, rotate: 360, repeat: 5 },
  //   1
  // );

  // ----- 개별 기능 END -----

  // End of DOM Content Loaded Method
});
