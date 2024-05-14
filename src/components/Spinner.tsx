import styled from 'styled-components'
import { memo } from 'react'
import { colors } from 'src/styles/colors'

const Spinner = styled.div`
  border: 16px solid ${colors.blue_100};
  border-top: 16px ${colors.blue_300} solid;
  border-radius: 50%;
  height: 180px;
  width: 180px;
  animation: spin 2s linear infinite;
  /* 
  border: 16px solid ${colors.grey_100};
  border-top: 16px solid ${colors.blue_100};
  border-radius: 50%;
  width: 180px;
  height: 180px;
  margin: auto;
  animation: spin 2s linear infinite; */
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`

export default memo(Spinner)
