import {FC, useLayoutEffect, useRef} from 'react'
import Section from '@/components/Section';
import Container from '@/components/Container';
import gsap from 'gsap';
import { HeadingSec } from '../SectionOne/_styles';
import { GridItem, SimpleGrid } from '@chakra-ui/react';
import ImgSimpadam from '@assets/images/simpadam.png'
import ImgPPIA from '@assets/images/ppia.png'
import ImgIndosat from '@assets/images/indosat.png'
import ImgSalesUp from '@assets/images/salesup.png'
import SplitType from 'split-type';

const SectionTwo: FC = () => {
  const headingRef = useRef(null);

  useLayoutEffect(()=>{
    const ctx = gsap.context(() => {
      
        let typeSplit = SplitType.create('.heading-works', {
            types: 'lines,words,chars',
            tagName: 'span'
        });

        let moreSplit = SplitType.create('.heading-more', {
            types: 'lines,words,chars',
            tagName: 'span'
        });

        gsap.from(typeSplit.lines, {
            x: '100%',
            opacity: 0,
            duration: 0.5,
            ease: 'power2.inOut',
            stagger: 0.1,
            scrollTrigger: {
              trigger: '.section-four',
              endTrigger: '.section-four',
              start: 'top center',
              end: 'bottom center',
              // markers: true,
              toggleActions: "play none none reverse",
            }
          });

        gsap.from(moreSplit.lines, {
            x: '100%',
            opacity: 0,
            duration: 0.5,
            ease: 'power2.inOut',
            stagger: 0.1,
            scrollTrigger: {
              trigger: '.section-four',
              endTrigger: '.section-four',
              start: 'center center',
              end: 'bottom center',
              // markers: true,
              toggleActions: "play none none reverse",
            }
          });

          gsap.from('.card-works', {
            y: '100%',
            opacity: 0,
            duration: 0.5,
            ease: 'power1.inOut',
            stagger: 0.3,
            scrollTrigger: {
              trigger: '.section-four',
              endTrigger: '.section-four',
              start: '300 center',
              end: 'bottom center',
            //   markers: true,
              toggleActions: "play none none reverse",
            }
          });
   
        
      }, document.body);

      return () => ctx.revert();
}, []);

  return (
    <Section className='section-four' background="#008fff" style={{padding: '100px 0', overflow: 'visible'}}>
        <Container>
            <HeadingSec style={{color: '#fff', fontSize: '2em', marginBottom: 40}} className='heading-works' ref={headingRef}>
                SELECTED WORKS.
            </HeadingSec>
            <SimpleGrid columns={{ base: 2, md: 6 }} gap={6} style={{marginBottom: 50}}>
                <GridItem colSpan={{ base: 1, md: 3 }}>
                    <a href='#' className="card-works">
                        <img src={ImgSimpadam} alt="image simpadam" />
                        <div className="content-works">
                            <span>
                                Web & Mobile App
                            </span>
                            <h3>
                                Kabupaten Bogor Simpadam
                            </h3>
                        </div>
                    </a>
                </GridItem>
                <GridItem colSpan={{ base: 1, md: 3 }}>
                    <a href='#' className="card-works">
                        <img src={ImgPPIA} alt="image ppia" />
                        <div className="content-works">
                            <span>
                                Mobile App
                            </span>
                            <h3>
                                PPIA Australia 
                            </h3>
                        </div>
                    </a>
                </GridItem>
                <GridItem colSpan={{ base: 1, md: 3 }}>
                    <a href='#' className="card-works">
                        <img src={ImgIndosat} alt="image indosat" />
                        <div className="content-works">
                            <span>
                                Mobile App
                            </span>
                            <h3>
                                Indosat Ooredoo IVR
                            </h3>
                        </div>
                    </a>
                </GridItem>
                <GridItem colSpan={{ base: 1, md: 3 }}>
                    <a href='#' className="card-works">
                        <img src={ImgSalesUp} alt="image salesup" />
                        <div className="content-works">
                            <span>
                                Web & Mobile App
                            </span>
                            <h3>
                                SalesUp
                            </h3>
                        </div>
                    </a>
                </GridItem>
            </SimpleGrid>
            <HeadingSec style={{textAlign: 'right', color: '#fff', fontSize: '1.5em', marginBottom: 40}} className='heading-more' ref={headingRef}>
                and i'm still interested about new cool stuff....
            </HeadingSec>
        </Container>
    </Section>
  )
}


export default SectionTwo;