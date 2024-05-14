import styled, { css } from 'styled-components'
import { colors } from 'src/styles/colors'

export const Header = styled.header`
  padding: 12px;
  background: ${colors.grey_100};
`

export const Ul = styled.ul`
  display: flex;
`

export const Li = styled.li<{ active: boolean }>`
  &:not(:first-child) {
    margin-left: 12px;
  }

  ${({ active, theme }) =>
    active &&
    css`
      color: ${theme.colors.blue_200};
    `}
`
