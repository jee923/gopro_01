window.scrollTo(0, 0);

document.addEventListener("DOMContentLoaded", function () {
  // 문서에 있는 모든 컨텐츠가 로드되면 실행
  Splitting(); // 텍스트 분할
  gsap.registerPlugin(ScrollTrigger); // GSAP 스크롤 트리거 플러그인 등록
  gsap.registerPlugin(ScrollToPlugin); // GSAP 스크롤 투 플러그인 등록

  // 이 안에 몽땅 다 넣기

  // GSAP 애니메이션 -----

  const gTl = gsap.timeline(); // 타임라인이 등록되면 from to로 연속된 효과를 묶을 수 있음

  // 텍스트 스크롤 업 효과
  // gTl.from(".title .char", 1, {
  //   opacity: 1,
  //   yPercent: 130,
  //   ease: "export.out",
  //   stagger: 0.06,
  // });

  // 문자 간격 줄어드는 효과
  let chars = document.querySelectorAll(".title .char");
  let marginStart = 250;
  let marginEnd = 10;

  gTl.from(chars, {
    duration: 1.2,
    opacity: 0,
    ease: "none",
    scrub: true,
    onUpdate: function () {
      let progress = this.progress();
      let currentMargin = marginStart + (marginEnd - marginStart) * progress;
      chars.forEach((char) => {
        char.style.margin = `0 ${currentMargin}px`;
      });
    },
  });

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
  var ani02 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section02",
      start: "top 30%",
      pin: false,
      markers: true,
      scrub: false,
      toggleActions: "play none restart none",
    },
  });

  ani02.fromTo(
    ".surfing",
    { x: 0, scale: 1, rotate: 0 },
    { duration: 0.4, rotate: 360, repeat: 5 },
    1
  );
}); // End of DOM Content Loaded Method
