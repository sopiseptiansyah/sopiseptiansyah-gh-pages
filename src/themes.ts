import { ThemeConfig, extendTheme } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const styles = {
    global: () => ({
      'html, body': {
        // background: props.colorMode === 'dark' ? 'brand.secondary' : 'gray.50',
        fontFamily: '"Montserrat", serif',
        backgroundColor: '#eaeaea',
        color: '#333333'

      },
    }),
}


const colors = {
  brand: {
    primary: '#008fff',
    secondary: '#333333',
    50: '#f2fbfa',
    100: '#d4f3ef',
    200: '#a9e6df',
    300: '#008fff',
    400: '#4ab7b4',
    500: '#309c9a',
    600: '#247d7d',
    700: '#216364',
    800: '#1e5051',
    900: '#1d4344',
    950: '#0b2628',
  },
  
}

const theme = extendTheme({ config, styles, colors })

export default theme;