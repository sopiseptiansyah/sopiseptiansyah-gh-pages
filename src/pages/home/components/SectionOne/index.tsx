import {FC, useContext, useLayoutEffect, useRef } from 'react'
import Container from "@components/Container";
import Section from "@components/Section";
import { Heading, Subline, ContentHome, Arrow, HeadingName, HeadingSec } from "./_styles";
import { shuffleArray } from "@libs/helpers";
import SplitText from 'split-type'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ColorContext from '@/libs/colorContext';
import { GridItem, SimpleGrid } from '@chakra-ui/react';
import IconAboutMe from '@assets/images/icon-about-me.png';
import Element from '@assets/images/element.png';
import { Sphere } from '../TagSphere';

gsap.registerPlugin(ScrollTrigger);

const SectionOne: FC = () => {
    const arrowRef = useRef(null);
    const sectionOneRef = useRef(null);
    const textRef = useRef(null);
    const aboutmeRef = useRef(null);
    const elementReff = useRef(null);
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
                tl.set(elem, { delay: 1,className: "text-animation state-1" })
                  .set(elem, { delay: 0.1, className: "text-animation state-2" })
                  .set(elem, { delay: 0.1, className: "text-animation state-3" })
              
                masterTL.add(tl, index * 0.0015);
              });
            

            gsap.to(textRef.current, {
                yPercent: 160,
                filter: "blur(60px)",
                scale: 0.9,
                ease: "sine.out",
                scrollTrigger: {
                  trigger: ".section-one",
                  scrub: true,
                onLeave: () => {
                  setColor('secondary')
                },
                onEnterBack: () => {
                  setColor('primary')
                },
                  // markers: true,
                // start: "top bottom", // the default values
                //   end: "center top",
                }, 
            });

            

            gsap.to(aboutmeRef.current, {
                yPercent: -30,
                opacity: 1,
                display: 'block',
                ease: "sine.out",
                scrollTrigger: {
                  trigger: ".section-two",
                  endTrigger: '.section-two',
                  // scrub: true,
                  // markers: true,
                  // pin: true,
                  start: "top bottom", // When the top of the box reaches the center of the viewport
                  end: '100 bottom',
                  toggleActions: "play none none reverse",
                }, 
            });

            gsap.to(arrowRef.current, {
                yPercent: 200,
                opacity: 0,
                ease: 'sine',
                scrollTrigger: {
                  trigger: ".section-two",
                  endTrigger: '.section-two',
                  // scrub: true,
                  // markers: true,
                  // pin: true,
                  start: "top bottom", // When the top of the box reaches the center of the viewport
                  end: '100 bottom',
                  toggleActions: "play none none reverse",
                }, 
            });

            masterTL.to(aboutmeRef.current, {
                ease: "sine.out",
                scrollTrigger: {
                  trigger: ".section-two",
                  endTrigger: '.section-two',
                  scrub: false,
                  // markers: true,
                  pin: true,
                  start: "25 bottom", // When the top of the box reaches the center of the viewport
                  end: '200 bottom',
                  toggleActions: "play none none reverse",
                }, 
            });

            masterTL.to(elementReff.current, {
                yPercent: 100, 
                ease: "sine.out",
                scrollTrigger: {
                  trigger: ".section-two",
                  endTrigger: '.section-three',
                  scrub: true,
                  // markers: true,
                  start: "300 bottom", // When the top of the box reaches the center of the viewport
                  end: "top bottom",
                  // pin: true,
                  toggleActions: "play none none reverse",
                }, 
            })
            
            return () => split.revert(); // context cleanup
            
          }, document.body);

          return () => ctx.revert();
    }, []);

  return (
    <Section $flex style={{minHeight: '100vh'}} ref={sectionOneRef}>
        <Container>
            <ContentHome ref={textRef}>
                <HeadingName style={{fontWeight: 400}}>
                    <strong style={{fontWeight: 800}}>HELLO.</strong>&nbsp;I'M
                </HeadingName>
                <HeadingName style={{lineHeight: '0.8em', color: '#008fff', fontWeight: 800}}>
                    SOPI SEPTIANSYAH
                </HeadingName>
                <Heading style={{lineHeight: '1em', fontWeight: 800}}>
                    WEB DEVELOPER
                </Heading>
                <HeadingName style={{fontWeight: 400, fontSize: '2.45em', lineHeight: '0.8em'}}>
                    Based in West Java, Indonesia.
                </HeadingName>
                <Subline>
                  From <strong>Concept</strong> to <strong>Code</strong> : I'am Your Web Development <strong>Wizard</strong>.
                </Subline>
            </ContentHome>
        </Container>
        <Container className='about-me' ref={aboutmeRef} id="about">
          <SimpleGrid columns={{ base: 2, md: 6 }}>
            <GridItem colSpan={{ base: 1, md: 3 }}>
              <HeadingSec style={{fontWeight: 800, fontSize: 42}}>
                <img src={IconAboutMe} alt="icon-about-me" />
                ABOUT ME
              </HeadingSec>
              <p style={{fontSize: '24px', fontWeight: 400}}>
                Web Developer that strong enough in <strong>Frontend</strong> development, experienced with all stages of development cycle for dynamic web projects. Strong background in SEO page optimization & Website performance or loading speed.
              </p>
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 3 }}>
              <Sphere />
            </GridItem>
          </SimpleGrid>
        </Container>
        <img src={Element} className='img-element' ref={elementReff} />
        <Arrow ref={arrowRef} />
    </Section>
  )
}

export default SectionOne