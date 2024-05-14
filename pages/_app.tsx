import type { AppProps } from 'next/app'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import GlobalStyle from 'src/styles/globalStyles'
import { theme } from 'src/styles/styledTheme'
import SeoHeadTags from 'src/components/Head/SeoHeadTags'
import { PlanetsContextProvider } from 'src/store/PlanetsContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <PlanetsContextProvider>
      <StyledThemeProvider theme={theme}>
        <SeoHeadTags
          pageTitle='SWAPI Next.js React client'
          description='SWAPI client for listing planets written in Next.js and React'
        />
        <Component {...pageProps} />
        <GlobalStyle />
      </StyledThemeProvider>
    </PlanetsContextProvider>
  )
}

export default MyApp
