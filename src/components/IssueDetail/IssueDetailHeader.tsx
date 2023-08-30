import useContentStore from 'stores/useContentStore'
import {
  StyledAvatar,
  StyledIssueNumber,
  StyledIssueTitle,
  StyledAuthorDateComments,
  StyledInfo,
} from './IssueDetailHeader.styled'

function IssueDetailHeader() {
  const { data } = useContentStore()

  return (
    <div>
      <StyledIssueNumber>#{data.issueNumber}</StyledIssueNumber>
      <StyledIssueTitle>{data.issueTitle}</StyledIssueTitle>

      <hr />

      <StyledInfo>
        <StyledAvatar src={data.avatar} />
        <StyledAuthorDateComments>
          {data.author} opened this issue on {data.date} · {data.comments} comments
        </StyledAuthorDateComments>
      </StyledInfo>
    </div>
  )
}

export default IssueDetailHeader
