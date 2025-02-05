import {FC, useLayoutEffect, useRef} from 'react'
import Section from '@/components/Section';
import Container from '@/components/Container';
import {  Text, SimpleGrid, GridItem } from '@chakra-ui/react';
import Element from '@assets/images/element-2.png';
import gsap from 'gsap';
import SplitType from 'split-type';

const SectionTwo: FC = () => {
  const elementRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(()=>{
    const ctx = gsap.context(() => {
      let typeSplit = SplitType.create('.text-description-website', {
        types: 'lines,words,chars',
        tagName: 'span'
      });

      let codeSplit = SplitType.create('.text-question', {
        types: 'lines,words,chars',
        tagName: 'span'
      });

      gsap.from(typeSplit.lines, {
        y: '100%',
        opacity: 0,
        duration: 0.5,
        ease: 'power1.inOut',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.section-two',
          endTrigger: '.section-two',
          start: '200 center',
          end: 'bottom center',
          // markers: true,
          toggleActions: "play none none reverse",
        }
      });

      gsap.from(codeSplit.words, {
        x: '100%',
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        stagger: 0.1,
        delay: 1,
        scrollTrigger: {
          trigger: '.section-two',
          endTrigger: '.section-two',
          start: '200 center',
          end: 'bottom center',
          // markers: true,
          toggleActions: "play none none reverse",
        }
      });
      
        gsap.to(elementRef.current,{
          opacity: 1,
          ease: 'sine.out',
          scrollTrigger: {
            trigger: '.section-three',
            endTrigger: '.section-three',
            start: 'top bottom',
            end: 'center bottom',
            toggleActions: "play none none reverse",
            // markers: true,
          }
        });
        
        
        
      }, document.body);

      return () => ctx.revert();
}, []);

  return (
    <Section className='section-two' background="#008fff" style={{padding: '100px 0', overflow: 'visible'}}>
        <Container>
          <SimpleGrid columns={{ base: 2, md: 6 }}>
            <GridItem colSpan={{ base: 1, md: 5 }}>
            <Text className="text-description-website" color={'#fff'} ref={textRef}>
                Websites serve various purposes, such as sharing information, conducting business, offering entertainment, or enabling social interaction.<br/>
                Your website need to be well crafted and good performance.
                Together, we can render our ideas into perfection and make visible what is yet to come.
              </Text>
              <Text className='text-question' style={{color: '#FFF176'}}>
                {/* Do you need good developer for your business? */}
                Your Vision, My Code, Our Success.
              </Text>
            </GridItem>
          </SimpleGrid>
        </Container>
        <img src={Element} className='img-element-2' ref={elementRef} />
    </Section>
  )
}


export default SectionTwo;