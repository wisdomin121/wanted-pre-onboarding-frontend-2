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
