import {FC} from 'react'
import Section from '@/components/Section';
import Container from '@/components/Container';
import {  Box, Heading, Text, SimpleGrid, useToken } from '@chakra-ui/react'
import { TagSphere } from "react-tag-sphere";


const SectionTwo: FC = () => {

  const [brandSecondary] = useToken('colors', ['brand.secondary']);

  return (
    <Section className='section-two' background="#64CCC5" style={{
      paddingTop: 300,
    }}>
        <Container>
        <SimpleGrid columns={2} spacing={10}>
          <Box>
            <Heading as='h2' size="xl" color={'brand.secondary'}>
              About Me
            </Heading>
            <Text fontSize='lg' color={'brand.secondary'}>
              Senior Web Developer specializing in Front-end development.
              Experienced with all stages of the development cycle for dynamic web
              projects. Well-versed in numerous programming languages including
              HTML5, PHP OOP, Laravel Framework, JavaScript, CSS, MySQL, VueJS,
              ReactJS and React Native. 
              Strong background in SEO page optimization
              and Website loading speed.
            </Text>
          </Box>
          <Box display='flex' alignItems='center' justifyContent='center'>
            <TagSphere
              fullWidth
              style={{
                color: brandSecondary,
              }}
              tags={[
              'ReactJS',
              'React Native',
              <img
                width={50}
                src={"https://cdn.svgporn.com/logos/react.svg"}
                alt={"React JS"}
              />,
              'VueJS',
              <img
                width={50}
                src={"https://cdn.svgporn.com/logos/vue.svg"}
                alt={"VueJS"}
              />,
              'Laravel',
              <img
                width={50}
                src={"https://cdn.svgporn.com/logos/laravel.svg"}
                alt={"Laravel"}
              />,
              'WordPress',
              <img
                width={50}
                src={"https://cdn.svgporn.com/logos/wordpress-icon.svg"}
                alt={"Wordpress"}
              />,
              'SASS',
              <img
                width={50}
                src={"https://cdn.svgporn.com/logos/sass.svg"}
                alt={"Wordpress"}
              />,
              'Typescript',
              <img
                width={50}
                src={"https://cdn.svgporn.com/logos/typescript-icon.svg"}
                alt={"TypeScript"}
              />,
              'Tailwind CSS',
              <img
                width={50}
                src={"https://cdn.svgporn.com/logos/tailwindcss-icon.svg"}
                alt={"TypeScript"}
              />,
              'SEO',
              'Cypress',
              <img
                width={50}
                src={"https://cdn.svgporn.com/logos/cypress-icon.svg"}
                alt={"TypeScript"}
              />,
              'Analytics',
              <img
              width={50}
              src={"https://cdn.svgporn.com/logos/google-analytics.svg"}
              alt={"TypeScript"}
            />,
            ]} />
          </Box>
        </SimpleGrid>
        </Container>
    </Section>
  )
}


export default SectionTwo;