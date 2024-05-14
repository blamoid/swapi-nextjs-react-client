export const fetchPlanets = async <T>(
  apiUrl: string
): Promise<
  | T
  | {
      error: string
    }
> => {
  const initialState = await fetch(apiUrl, { next: { revalidate: 3600 } })
    .then<T>((res) => {
      if (!res.ok) {
        throw new Error(res.status.toString())
      }
      return res.json()
    })
    .then((result) => {
      return result
    })
    .catch((e: Error) => {
      return { error: e.message }
    })
  return initialState
}
