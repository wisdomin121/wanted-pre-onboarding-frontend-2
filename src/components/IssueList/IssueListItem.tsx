import useContentStore from 'stores/useContentStore'
import { StyledItem, StyledLeft, StyledRegularP, StyledSmallP } from './IssueListItem.styled'
import { ReactComponent as Comments } from 'assets/Comments.svg'
import usePageStore from 'stores/usePageStore'

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
  const { setIsList } = usePageStore()
  const { setData } = useContentStore()

  const storeData = () => {
    setData({ issueNumber, issueTitle, author, date, comments, body, avatar })
    setIsList(false)
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
