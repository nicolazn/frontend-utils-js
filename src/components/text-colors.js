import {gsap} from "gsap";
import {SplitText} from "./utils/split-text";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function TextColorOnScroll(target) {
    const textReveal = target.querySelector('p');
    textReveal.classList.add('text-reveal');
    const split = new SplitText(textReveal, {type: "lines"});
    split.lines.forEach(target => {
        gsap.from(target, {
            backgroundPositionX: '100%',
            ease: "none",
            scrollTrigger: {
                trigger: target,
                scrub: 1,
                start: "top 60%",
                end: "bottom 60%",
            }
        });
    });
}