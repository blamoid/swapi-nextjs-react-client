import { GetServerSideProps, NextPage } from 'next'
import { fetchPlanets } from 'src/api/fetchPlanets'
import PlanetsPageContent from 'src/pages/PlanetsPage'
import { API_BASE } from 'src/utils/constants'
import { ApiErrorResponse, PlanetsApiResponse } from 'src/utils/types'

type Props = never
type InitialProps = never

const PlanetsPage: NextPage<Props, InitialProps> = (
  props: PlanetsApiResponse
) => {
  return <PlanetsPageContent data={props} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetchPlanets<PlanetsApiResponse>(
    `${API_BASE}${context.resolvedUrl}`
  )
  const errorCode = (response as ApiErrorResponse).error
  if (errorCode) {
    return {
      redirect: {
        destination: '/planets',
        permanent: false,
      },
    }
  }
  return {
    props: response,
  }
}

export default PlanetsPage
