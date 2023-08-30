import { styled } from 'styled-components'

export const StyledDetailPage = styled.div`
  position: fixed;
  max-width: 325px;
  height: calc(100vh - 92.22px);
  padding: 18px 25px;
  overflow: auto;
  background-color: white;

  @media screen and (min-width: 425px) {
    max-width: 375px;
    right: calc((100% - 425px) / 2);
  }
`
