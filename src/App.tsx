import { styled } from 'styled-components'

import { PageRouter } from 'pages'
import { Header } from 'components'

function App() {
  return (
    <CommonLayout>
      <Header />
      <PageRouter />
    </CommonLayout>
  )
}

const CommonLayout = styled.div`
  width: 100%;

  @media screen and (min-width: 426px) {
    max-width: 425px;
    margin-left: calc((100% - 425px) / 2);
  }
`

export default App
