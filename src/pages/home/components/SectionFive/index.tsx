import {FC, useLayoutEffect} from 'react'
import Section from '@/components/Section';
import Container from '@/components/Container';
import gsap from 'gsap';
import iconPhone from '@assets/images/icon-phone.png';
import envelope from '@assets/images/envelope.png';
import linkedin from '@assets/images/linkedin-logo.png';
import github from '@assets/images/github-logo.png';
import { HeadingSec } from '../SectionOne/_styles';
import { GridItem, SimpleGrid } from '@chakra-ui/react';
import SplitType from 'split-type';

const SectionFive: FC = () => {

  useLayoutEffect(()=>{
    const ctx = gsap.context(() => {
      
        let typeSplit = SplitType.create('.contact-list a', {
            types: 'lines,words,chars',
            tagName: 'span'
        });

        let talkMore = SplitType.create('.talk-more', {
            types: 'lines,words,chars',
            tagName: 'span'
        });
        
        gsap.from(talkMore.words, {
            x: '100%',
            opacity: 0,
            duration: 0.5,
            ease: 'power2.inOut',
            stagger: 0.1,
            scrollTrigger: {
              trigger: '.section-five',
              endTrigger: '.section-five',
              start: '70% bottom',
              end: 'bottom center',
            //   markers: true,
              toggleActions: "play none none reverse",
            }
          });

        gsap.from(typeSplit.lines, {
            x: '100%',
            opacity: 0,
            duration: 0.5,
            ease: 'power2.inOut',
            stagger: 0.1,
            delay: 1.2,
            scrollTrigger: {
              trigger: '.section-five',
              endTrigger: '.section-five',
              start: '70% bottom',
              end: 'bottom center',
            //   markers: true,
              toggleActions: "play none none reverse",
            }
          });
        
      }, document.body);

      return () => ctx.revert();
}, []);

  return (
    <Section className='section-five' background="#fff" style={{padding: '100px 0', overflow: 'visible'}}>
        <Container>
            <SimpleGrid columns={{ base: 2, md: 6 }} gap={6}>
                <GridItem colSpan={{ base: 1, md: 3 }}>
                <HeadingSec className='talk-more' style={{fontSize: '4rem', marginBottom: 40, display: 'block', fontWeight: 800}}>
                    Let's Talk <br/> <span style={{fontWeight: 300}}>For More...</span>
                </HeadingSec>
                </GridItem>
                <GridItem colSpan={{ base: 1, md: 3 }}>
                    <ul className='contact-list'>
                        <li>
                            <a href="https://wa.me/6289663656560?text=Hello Sopi Septiansyah, I Want to ..." target='_blank'>
                                <img src={iconPhone} alt="icon phone" />
                                +6289663656560
                            </a>
                        </li>
                        <li>
                            <a href="mailto:sopiseptiansyah@gmail.com" target='_blank'>
                            <img src={envelope} alt="icon envelope" />
                            sopiseptiansyah@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/in/sopiseptiansyah/" target='_blank'>
                            <img src={linkedin} alt="icon linkedin" />
                            https://linkedin.com/in/sopiseptiansyah/
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/in/sopiseptiansyah/" target="_blank">
                            <img src={github} alt="icon linkedin" />
                            https://github.com/sopiseptiansyah
                            </a>
                        </li>
                    </ul>
                </GridItem>
            </SimpleGrid>
        </Container>
    </Section>
  )
}


export default SectionFive;