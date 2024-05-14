import { useContext, useEffect } from 'react'
import PlanetsContext from 'src/store/PlanetsContext'
import PlanetsList from 'src/components/PlanetsList'
import PlanetsListControls from 'src/components/PlanetsListControls/PlanetsLIstControls'
import { PlanetsApiResponse } from 'src/utils/types'
import Layout from 'src/components/Layout'

const PlanetsPageContent = ({ data }: { data: PlanetsApiResponse }) => {
  const { setPlanets } = useContext(PlanetsContext)

  useEffect(() => {
    setPlanets(data)
  }, [data, setPlanets])

  return (
    <Layout>
      <PlanetsListControls />
      <PlanetsList />
    </Layout>
  )
}

export default PlanetsPageContent
