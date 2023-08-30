import { IssueList } from 'components'
import { styled } from 'styled-components'

function IssuePage() {
  return (
    <StyledIssue>
      <IssueList />
    </StyledIssue>
  )
}

const StyledIssue = styled.div`
  overflow: hidden;
`

export default IssuePage
