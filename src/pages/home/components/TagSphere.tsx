import { useToken } from '@chakra-ui/react';
import { TagSphere } from 'react-tag-sphere'

export const Sphere = () => {
    const [brandSecondary] = useToken('colors', ['brand.secondary']);
  return (
    <TagSphere
              style={{
                color: brandSecondary,
                height: 300,
                width: 300,
                minHeight: 300,
                margin: 'auto',
                display: 'block'
                // position: 'absolute',
                // top: 0,
                // right: 0,
                // left: 0,
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
  )
}
