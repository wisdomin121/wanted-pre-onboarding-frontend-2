import { styled } from 'styled-components'

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 56.22px);
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
`

export const StyledAd = styled.a`
  padding: 18px 25px;
  text-align: center;
`
