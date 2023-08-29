import { styled } from 'styled-components'

import { PageRouter } from 'pages'

function App() {
  return (
    <CommonLayout>
      <PageRouter />
    </CommonLayout>
  )
}

const CommonLayout = styled.div`
  width: 100%;
  background-color: pink;

  @media screen and (min-width: 426px) {
    max-width: 425px;
    margin-left: calc((100% - 425px) / 2);
  }
`

export default App
