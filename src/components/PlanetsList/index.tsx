import { useContext } from 'react'
import moment from 'moment'
import PlanetsContext from 'src/store/PlanetsContext'
import { TIME_FORMAT } from 'src/utils/constants'
import { usePageLoading } from 'src/hooks/usePageLoading'
import Skeleton from '../Skeleton'
import * as S from './styled'

const PlanetsList = () => {
  const { isPageLoading } = usePageLoading()
  const planetsContext = useContext(PlanetsContext)

  if (isPageLoading || !planetsContext.planets) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: '10px',
          margin: '10px 0',
        }}
      >
        {[...Array(10)].map((_x, i) => (
          <Skeleton style={{ height: '286px', borderRadius: '4px' }} key={i} />
        ))}
      </div>
    )
  }

  return (
    <S.PlanetList>
      {planetsContext.planets.results.map((planet) => (
        <S.PlanetListItem key={planet.name}>
          <S.PlanetListItemRow>
            <S.PlanetListItemLabel>Name:&nbsp;</S.PlanetListItemLabel>
            <S.PlanetListItemValue>{planet.name}</S.PlanetListItemValue>
          </S.PlanetListItemRow>
          <S.PlanetListItemRow>
            <S.PlanetListItemLabel>
              Rotation period:&nbsp;
            </S.PlanetListItemLabel>
            <S.PlanetListItemValue>
              {planet.rotation_period}
            </S.PlanetListItemValue>
          </S.PlanetListItemRow>
          <S.PlanetListItemRow>
            <S.PlanetListItemLabel>Orbital period:&nbsp;</S.PlanetListItemLabel>
            <S.PlanetListItemValue>
              {planet.orbital_period}
            </S.PlanetListItemValue>
          </S.PlanetListItemRow>
          <S.PlanetListItemRow>
            <S.PlanetListItemLabel>Diameter:&nbsp;</S.PlanetListItemLabel>
            <S.PlanetListItemValue>{planet.diameter}</S.PlanetListItemValue>
          </S.PlanetListItemRow>
          <S.PlanetListItemRow>
            <S.PlanetListItemLabel>Climate:&nbsp;</S.PlanetListItemLabel>
            <S.PlanetListItemValue>{planet.climate}</S.PlanetListItemValue>
          </S.PlanetListItemRow>
          <S.PlanetListItemRow>
            <S.PlanetListItemLabel>Gravity:&nbsp;</S.PlanetListItemLabel>
            <S.PlanetListItemValue>{planet.gravity}</S.PlanetListItemValue>
          </S.PlanetListItemRow>
          <S.PlanetListItemRow>
            <S.PlanetListItemLabel>Terrain:&nbsp;</S.PlanetListItemLabel>
            <S.PlanetListItemValue>{planet.terrain}</S.PlanetListItemValue>
          </S.PlanetListItemRow>
          <S.PlanetListItemRow>
            <S.PlanetListItemLabel>Surface water:&nbsp;</S.PlanetListItemLabel>
            <S.PlanetListItemValue>
              {planet.surface_water}
            </S.PlanetListItemValue>
          </S.PlanetListItemRow>
          <S.PlanetListItemRow>
            <S.PlanetListItemLabel>Population:&nbsp;</S.PlanetListItemLabel>
            <S.PlanetListItemValue>{planet.population}</S.PlanetListItemValue>
          </S.PlanetListItemRow>
          <S.PlanetListItemRow>
            <S.PlanetListItemLabel>Created:&nbsp;</S.PlanetListItemLabel>
            <S.PlanetListItemValue>
              {moment(planet.created).format(TIME_FORMAT)}
            </S.PlanetListItemValue>
          </S.PlanetListItemRow>
          <S.PlanetListItemRow>
            <S.PlanetListItemLabel>Edited:&nbsp;</S.PlanetListItemLabel>
            <S.PlanetListItemValue>
              {moment(planet.edited).format(TIME_FORMAT)}
            </S.PlanetListItemValue>
          </S.PlanetListItemRow>
        </S.PlanetListItem>
      ))}
    </S.PlanetList>
  )
}

export default PlanetsList
