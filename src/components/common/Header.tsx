import { ORGANIZATION_NAME, REPOSITORY_NAME } from 'data/const'
import { StyledHeader } from './Header.styled'

function Header() {
  return (
    <StyledHeader>
      {ORGANIZATION_NAME} / {REPOSITORY_NAME}
    </StyledHeader>
  )
}

export default Header
