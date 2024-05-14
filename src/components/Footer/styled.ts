import styled from 'styled-components'

export const Footer = styled.footer`
  padding: 10px;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-size: 10px;
  font-style: italic;
`
