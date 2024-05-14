import { useState } from 'react'
import { PlanetsApiResponse } from 'src/utils/types'

const usePlanetsContextValue = () => {
  const [planets, setPlanets] = useState<PlanetsApiResponse>()
  return {
    planets,
    setPlanets,
  }
}

export default usePlanetsContextValue
