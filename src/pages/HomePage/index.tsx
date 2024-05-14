import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from 'src/components/Layout'
import { H1, H2 } from 'src/components/Typography'
import { publicImages } from 'src/static'
import { usePageLoading } from 'src/hooks/usePageLoading'
import Spinner from 'src/components/Spinner'
import * as S from './styled'

const HomePage: NextPage = () => {
  const { isPageLoading } = usePageLoading()

  return (
    <Layout>
      <S.HomePageContent>
        {isPageLoading ? (
          <Spinner style={{ margin: '20px auto' }} />
        ) : (
          <>
            <H1>Welcome to SWAPI planets browser</H1>
            <Image
              src={publicImages.logo}
              alt='Star Wars logo'
              width={250}
              height={100}
            />
            <H2>Use navigation in top left corner to go to Planets page</H2>
          </>
        )}
      </S.HomePageContent>
    </Layout>
  )
}

export default HomePage
