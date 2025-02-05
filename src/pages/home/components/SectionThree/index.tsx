import Container from '@/components/Container';
import Section from '@/components/Section';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import VisualDetail from '@assets/images/visual-detail.png';
import LoadingSpeed from '@assets/images/loading.png';
import SEO from '@assets/images/seo.png';
import Else from '@assets/images/else.png';
import { HeadingSec } from '../SectionOne/_styles';
import SplitType from 'split-type';
import { useLayoutEffect } from 'react';
import gsap from 'gsap';

const SectionThree = () => {

    useLayoutEffect(()=>{
        const ctx = gsap.context(() => {
          let typeSplit = SplitType.create('.heading-care', {
            types: 'lines,words,chars',
            tagName: 'span'
          });

          let textSplit = SplitType.create('.text-i-care', {
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
              trigger: '.section-three',
              endTrigger: '.section-three',
              start: '100 center',
              end: 'bottom center',
            //   markers: true,
              toggleActions: "play none none reverse",
            }
          });

          gsap.from(textSplit.words, {
            opacity: 0.2,
            duration: 0.4,
            ease: 'power1.out',
            stagger: 0.2,
            delay: 1.9,
            scrollTrigger: {
              trigger: '.section-three',
              endTrigger: '.section-three',
              start: '100 center',
              end: 'bottom center',
            //   markers: true,
              toggleActions: "play none none reverse",
            }
          });


          gsap.from('.card-care-about', {
            x: '100%',
            opacity: 0,
            duration: 0.5,
            ease: 'power1.inOut',
            stagger: 0.4,
            scrollTrigger: {
              trigger: '.section-three',
              endTrigger: '.section-three',
              start: '100 center',
              end: 'bottom center',
            //   markers: true,
              toggleActions: "play none none reverse",
            }
          });


          }, document.body);
    
          return () => ctx.revert();
    }, []);

  return (
    <Section className='section-three' style={{backgroundColor: '#fff'}}>
        <Container>
            <HeadingSec className='heading-care'>
                I CARE ABOUT.
            </HeadingSec>
        </Container>
        <Grid templateColumns='repeat(4, 1fr)' style={{marginBottom: 50}}>
            <GridItem>
                <div className="card-care-about">
                    <img src={VisualDetail} alt="Visual Detail" />
                    <Text>
                        Visual Detail
                    </Text>
                </div>
            </GridItem>
            <GridItem>
                <div className="card-care-about">
                    <img src={LoadingSpeed} alt="loading speed" />
                    <Text>
                        Loading Speed
                    </Text>
                </div>
            </GridItem>
            <GridItem>
            <div className="card-care-about">
                    <img src={SEO} alt="seo" />
                    <Text>
                        SEO
                    </Text>
                </div>
            </GridItem>
            <GridItem>
                <div className="card-care-about last-card">
                    <img src={Else} alt="Visual Detail" />
                    <Text>
                        And else..
                    </Text>
                    <Text className='text-subline'>
                        things that shouldn't keep designers up at night
                    </Text>
                </div>
            </GridItem>
        </Grid>
        <p className='text-i-care' style={{textAlign: 'center'}}>
            Every line of code I write is a reflection of my commitment to your vision. <br/>Because your success is my success, and I’m here to build something amazing—<strong>just for you</strong>.
        </p>
    </Section>
  )
}

export default SectionThree;
