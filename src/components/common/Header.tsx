import { StyledEmpty, StyledHeader, StyledIconButton } from './Header.styled'
import { ORGANIZATION_NAME, REPOSITORY_NAME } from 'data/const'
import { ReactComponent as CaretLeft } from 'assets/CaretLeft.svg'
import usePageStore from 'stores/usePageStore'

function Header() {
  const { isList, setIsList } = usePageStore()

  return (
    <StyledHeader>
      {!isList ? (
        <StyledIconButton
          onClick={() => {
            setIsList(true)
          }}
        >
          <CaretLeft />
        </StyledIconButton>
      ) : (
        <StyledEmpty />
      )}

      <p>
        {ORGANIZATION_NAME} / {REPOSITORY_NAME}
      </p>

      <StyledEmpty />
    </StyledHeader>
  )
}

export default Header
