import { StyledItem, StyledLeft, StyledRegularP, StyledSmallP } from './IssueListItem.styled'
import { ReactComponent as Comments } from 'assets/Comments.svg'

interface IssueProps {
  issueNumber: number
  issueTitle: string
  author: string
  date: string
  comments: number
}

function IssueListItem({ issueNumber, issueTitle, author, date, comments }: IssueProps) {
  return (
    <StyledItem>
      <StyledLeft>
        <StyledRegularP>#{issueNumber}</StyledRegularP>
        <StyledRegularP>{issueTitle}</StyledRegularP>
        <StyledSmallP isComment={false}>
          {author}, {date}
        </StyledSmallP>
      </StyledLeft>
      <StyledSmallP isComment={true}>
        <Comments width="16" height="16" /> {comments}
      </StyledSmallP>
    </StyledItem>
  )
}

export default IssueListItem
