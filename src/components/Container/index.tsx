import { PropsWithChildren } from 'react'
import * as S from './styled'

type ContainerProps = PropsWithChildren<{}>

const Container = ({ children }: ContainerProps) => (
  <S.Container>{children} </S.Container>
)

export default Container
