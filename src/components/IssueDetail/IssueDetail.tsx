import { IssueDetailContent, IssueDetailHeader } from 'components'
import { StyledDetailPage } from './IssueDetail.styled'

function IssueDetail() {
  return (
    <StyledDetailPage>
      <IssueDetailHeader />
      <IssueDetailContent />
    </StyledDetailPage>
  )
}

export default IssueDetail
