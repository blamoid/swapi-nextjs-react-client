import { memo } from 'react'
import styled, { keyframes } from 'styled-components'

export const skeletonKeyframes = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`

const Skeleton = styled.div`
  display: block;
  background-color: rgba(0, 0, 0, 0.11);
  animation: 2s ease-in-out 0.5s infinite normal none running;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-delay: 0.5s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: ${skeletonKeyframes};
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
`

export default memo(Skeleton)
