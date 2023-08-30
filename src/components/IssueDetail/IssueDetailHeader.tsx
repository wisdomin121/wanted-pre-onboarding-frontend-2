import useContentStore from 'stores/useContentStore'
import {
  StyledDetailHeader,
  StyledAvatar,
  StyledIssueNumber,
  StyledIssueTitle,
  StyledAuthorDateComments,
  StyledInfo,
} from './IssueDetailHeader.styled'

function IssueDetailHeader() {
  const { data } = useContentStore()

  return (
    <StyledDetailHeader>
      <StyledIssueNumber>#{data.issueNumber}</StyledIssueNumber>
      <StyledIssueTitle>{data.issueTitle}</StyledIssueTitle>

      <hr />

      <StyledInfo>
        <StyledAvatar src={data.avatar} />
        <StyledAuthorDateComments>
          {data.author} opened this issue on {data.date} · {data.comments} comments
        </StyledAuthorDateComments>
      </StyledInfo>
    </StyledDetailHeader>
  )
}

export default IssueDetailHeader
