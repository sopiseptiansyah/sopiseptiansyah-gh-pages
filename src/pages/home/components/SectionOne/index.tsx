import {FC, useContext, useLayoutEffect, useRef } from 'react'
import Container from "@components/Container";
import Section from "@components/Section";
import { Heading, Subline, ContentHome, Arrow } from "./_styles";
import { shuffleArray } from "@libs/helpers";
import SplitText from 'split-type'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ColorContext from '@/libs/colorContext';

gsap.registerPlugin(ScrollTrigger);

const SectionOne: FC = () => {
    const textRef = useRef(null);
    const { setColor } = useContext(ColorContext);

    useLayoutEffect(()=>{
        const ctx = gsap.context(() => {
            const split = SplitText.create("h1", {types: 'chars'});
            const mySplitText = SplitText.create("span", {
                types: "chars",
                charClass: "text-animation"
              }),
            shuffleCharArray = shuffleArray(mySplitText.chars),
            masterTL = gsap.timeline();

            shuffleCharArray.forEach(function(elem: any, index: any) {
                const tl = gsap.timeline();
                tl.set(elem, { delay: 1.6,className: "text-animation state-1" })
                  .set(elem, { delay: 0.1, className: "text-animation state-2" })
                  .set(elem, { delay: 0.1, className: "text-animation state-3" })
              
                masterTL.add(tl, index * 0.015);
              });
            
            gsap.fromTo(
                split.chars,
                { 
                  y: 80,
                  opacity: 0
                },
                {
                  y: 0,
                  opacity: 1,
                  stagger: 0.025,
                  duration: 1,
                  ease: 'back.out',
                }
            );

            gsap.to(textRef.current, {
                yPercent: 160,
                filter: "blur(20px)",
                scale: 0.9,
                ease: "sine.out",
                scrollTrigger: {
                  trigger: ".section-two",
                  scrub: true,
                onLeave: () => {
                  setColor('secondary')
                },
                onEnterBack: () => {
                  setColor('primary')
                }
                //   markers: true,
                // start: "top bottom", // the default values
                //   end: "center top",
                }, 
            });
            
            return () => split.revert(); // context cleanup
            
          }, textRef);

          return () => ctx.revert();
    }, []);

  return (
    <Section $flex>
            <Container>
                <ContentHome ref={textRef}>
                    <Heading>
                        HELLO, I'M SOPI SEPTIANSYAH
                    </Heading>
                    <Heading>
                        FRONTEND DEVELOPER.
                    </Heading>
                    <Subline>
                        <strong>Render</strong> your ideas into <strong>perfection</strong> and make visible what is yet to come.
                    </Subline>
                </ContentHome>
            </Container>
            <Arrow />
        </Section>
  )
}

export default SectionOne