import styled from 'styled-components'
import { colors } from 'src/styles/colors'

export const PlanetList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0;
`

export const PlanetListItem = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  background-color: ${colors.white};
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  overflow-x: auto;
`

export const PlanetListItemRow = styled.span`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  :nth-child(odd) {
    background: ${colors.grey_200};
  }
`

export const PlanetListItemLabel = styled.span`
  font-weight: bold;
  text-align: left;
`

export const PlanetListItemValue = styled.span`
  text-align: right;
  margin-left: auto;
`
