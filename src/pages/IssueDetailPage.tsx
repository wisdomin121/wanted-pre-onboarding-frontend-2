import { IssueDetailContent, IssueDetailHeader } from 'components'
import { styled } from 'styled-components'

function IssueDetailPage() {
  return (
    <StyledDetailPage>
      <IssueDetailHeader />
      <IssueDetailContent />
    </StyledDetailPage>
  )
}

const StyledDetailPage = styled.div`
  height: calc(100vh - 92.22px);
  padding: 18px 25px;
  overflow: auto;
`

export default IssueDetailPage
