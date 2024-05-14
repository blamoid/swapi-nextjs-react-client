import styled from 'styled-components'
import { memo } from 'react'
import { colors } from 'src/styles/colors'

const Button = styled.button<{ $primary?: boolean }>`
  background-color: transparent;
  border: 1px solid ${colors.blue_200};
  border-radius: 4px;
  color: ${colors.blue_200};
  font-size: 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  &:hover {
    text-decoration: none;
    background-color: ${colors.grey_200};
    color: ${colors.blue_300};
    border-color: ${colors.blue_300};
  }
  &:disabled {
    color: rgba(0, 0, 0, 0.26);
    border: 1px solid rgba(0, 0, 0, 0.12);
    cursor: default;
  }
  &.active {
    color: ${colors.white};
    background-color: rgb(25, 118, 210);
  }
`

export default memo(Button)
