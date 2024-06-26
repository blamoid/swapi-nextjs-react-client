export type PlanetsApiResponse = {
  count: number
  next: string | null
  previous: string | null
  results: Planet[]
}

type Planet = {
  name: string
  diameter: string
  rotation_period: string
  orbital_period: string
  gravity: string
  population: string
  climate: string
  terrain: string
  surface_water: string
  residents: string[]
  films: string[]
  url: string
  created: string
  edited: string
}

export type ApiErrorResponse = {
  error: string
}
