TweenMax.set("svg", { visibility: "visible" });

TweenMax.staggerTo(
  "#bubble-group circle",
  4,
  {
    attr: {
      cy: 200,
    },
    ease: Power2.easeIn,
    repeat: -1,
  },
  0.6
);

var speed = 3.5;
var tlFront1 = new TimelineMax({ repeat: -1 });
tlFront1
  .to("#front-1", speed, { morphSVG: "#front-2", ease: Power0.easeNone })
  .to("#front-1", speed, { morphSVG: "#front-1", ease: Power0.easeNone });

var tlFront2 = new TimelineMax({ repeat: -1 });
tlFront2
  .to("#front-3", speed, { morphSVG: "#front-4", ease: Power0.easeNone })
  .to("#front-3", speed, { morphSVG: "#front-3", ease: Power0.easeNone });

var tlFront3 = new TimelineMax({ repeat: -1 });
tlFront3
  .to("#front-5", speed, { morphSVG: "#front-6", ease: Power0.easeNone })
  .to("#front-5", speed, { morphSVG: "#front-5", ease: Power0.easeNone });

var tlBack = new TimelineMax({ repeat: -1 });
tlBack
  .to("#back-1", speed, { morphSVG: "#back-2", ease: Power0.easeNone })
  .to("#back-1", speed, { morphSVG: "#back-1", ease: Power0.easeNone });

var bubbles = document.getElementsByClassName("steam-bubble");
var tlSteam = new TimelineMax({ repeat: -1 });
function animateBubbles() {
  for (var i = 0; i < bubbles.length; i++) {
    var b = bubbles[i];
    var tl = new TimelineMax({ repeat: -1 });
    tl.to(b, 1, {
      attr: {
        r: "+=7",
      },
      ease: Linear.easeNone,
    }).to(b, 1, {
      attr: {
        r: "-=7",
      },
      ease: Linear.easeNone,
    });
    tlSteam.add(tl, i / 2);
  }
}
animateBubbles();
window.onload = function () {
  window.scrollTo(0, 0);
};


let hero = document.getElementById('hero');
let hero_img = document.getElementById("img");
let hero_text = document.getElementById("text");
let text = document.getElementById("text1");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  let valu = value - 731
  if (this.scrollY <= 731) {
    let translateXValueimg = 0.6301108071 * value;
    let translateYValueimg = 150/731 * value;
    let scaleValueimg = .2/731 * value;
    hero_img.style.transform = `translate(${466 - translateXValueimg}px, ${ 150 - translateYValueimg}px) scale(${scaleValueimg + 1})`;
    let translateXValuetext = 0.4254 * value;
    let translateYValuetext = 0.2188 * value;
    let scaleValuetext = 1/1462 * value;
    hero_text.style.transform = `translate(${translateXValuetext - 311.002}px, ${translateYValuetext - 160}px) scale(${scaleValuetext + .5})`;
  }
  if (this.scrollY > 600 && this.scrollY <= 900) {
    console.log(valu,value)
    let translateYValue = 360/200 * valu;
    let opacityValue = 1/170 * valu;
    text.style.transform = `translateY(${330 - translateYValue}px`;
    text.style.opacity= opacityValue;
    
  }
  if (this.scrollY < 600 ) {
 
    text.style.transform = `translateY(${330}px`;
    text.style.opacity= 0;
    
  }
  if (this.scrollY >= 1000) {
    hero.style.position= 'absolute';
    
  }else{
    hero.style.position= 'fixed';
  }
});
