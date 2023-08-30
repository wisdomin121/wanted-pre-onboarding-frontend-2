import useContentStore from 'stores/useContentStore'
import { StyledItem, StyledLeft, StyledRegularP, StyledSmallP } from './IssueListItem.styled'
import { ReactComponent as Comments } from 'assets/Comments.svg'
import { useNavigate } from 'react-router-dom'

interface ItemProps {
  issueNumber: number
  issueTitle: string
  author: string
  date: string
  comments: number
  body: string
  avatar: string
}

function IssueListItem({
  issueNumber,
  issueTitle,
  author,
  date,
  comments,
  body,
  avatar,
}: ItemProps) {
  const { setData } = useContentStore()
  const navigate = useNavigate()

  const storeData = () => {
    setData({ issueNumber, issueTitle, author, date, comments, body, avatar })
    navigate('/detail')
  }

  return (
    <StyledItem onClick={storeData}>
      <StyledLeft>
        <StyledRegularP>#{issueNumber}</StyledRegularP>
        <StyledRegularP>{issueTitle}</StyledRegularP>
        <StyledSmallP $isComment={false}>
          {author}, {date}
        </StyledSmallP>
      </StyledLeft>

      <StyledSmallP $isComment={true}>
        <Comments width="16" height="16" /> {comments}
      </StyledSmallP>
    </StyledItem>
  )
}

export default IssueListItem
