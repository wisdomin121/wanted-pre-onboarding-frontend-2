import { styled } from 'styled-components'

function ErrorPage() {
  return (
    <StyledNotFound>
      <img
        width="64"
        height="64"
        src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/external-404-Error-software-development-icongeek26-outline-gradient-icongeek26-3.png"
        alt="external-404-Error-software-development-icongeek26-outline-gradient-icongeek26-3"
      />
      <p>404 NOT FOUND</p>
    </StyledNotFound>
  )
}

const StyledNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 56.22px);
  font-size: 44px;
  font-weight: 700;
  color: #b074ee;
`

export default ErrorPage
