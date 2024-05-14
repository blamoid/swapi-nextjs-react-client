import { createContext, Dispatch, ReactNode, SetStateAction } from 'react'
import { PlanetsApiResponse } from 'src/utils/types'
import usePlanetsContextValue from './usePlanetsContextValue'

type PlanetsContextProps = {
  children: ReactNode
}

export type PlanetsContextType = {
  planets: PlanetsApiResponse | undefined
  setPlanets: Dispatch<SetStateAction<PlanetsApiResponse | undefined>>
}

const PlanetsContext = createContext<PlanetsContextType>({
  planets: undefined,
  setPlanets: () => {},
})

export function PlanetsContextProvider({ children }: PlanetsContextProps) {
  const context = usePlanetsContextValue()
  return (
    <PlanetsContext.Provider value={context}>
      {children}
    </PlanetsContext.Provider>
  )
}

export default PlanetsContext
