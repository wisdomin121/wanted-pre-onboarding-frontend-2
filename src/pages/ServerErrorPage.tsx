import { styled } from 'styled-components'

function ServerErrorPage() {
  return (
    <StyledServerError>
      <img width="64" height="64" src="https://img.icons8.com/nolan/64/error.png" alt="error" />
      <p>SERVER ERROR</p>
    </StyledServerError>
  )
}

const StyledServerError = styled.div`
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

export default ServerErrorPage
