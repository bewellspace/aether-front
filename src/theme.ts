import { MantineThemeOverride, createStyles } from '@mantine/core'

const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  colors: {
    site: ['#EAF557'],
    bg: ['#23203D'],
  },
}

export const useSiteStyles = createStyles(theme => {
  return {
    highlight: {
      color: theme.colors.site[0],
    },
    bgColor: {
      color: theme.colors.bg[0],
    },
    heroTitle: {
      fontSize: '1.75rem',
      lineHeight: '2rem',
      fontFamily: 'Arial-BoldMT, Arial',
      [theme.fn.smallerThan('md')]: {
        fontSize: '1rem',
        lineHeight: 1,
      },
      [theme.fn.largerThan('lg')]: {
        fontSize: '2.25rem',
        lineHeight: '2.625rem'
      },
    },
    sponsorImg: {
      width: '160px',
      margin: 'auto',
      flex: 1,

      [theme.fn.smallerThan('md')]: {
        width: '80px',
      },
    },
  }
})

export default theme
