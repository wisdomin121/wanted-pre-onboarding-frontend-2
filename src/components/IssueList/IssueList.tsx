import { useRef } from 'react'
import { StyledList } from './IssueList.styled'

import { useInfiniteScroll } from 'hooks'
import { IssueListItem } from 'components'
import { Item } from 'data/type'

function IssueList() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const list = useInfiniteScroll(scrollRef)

  return (
    <StyledList ref={scrollRef}>
      {list.length !== 0 ? (
        list.map((item: Item) => (
          <IssueListItem
            key={item.issueNumber}
            issueNumber={item.issueNumber}
            issueTitle={item.issueTitle}
            author={item.author}
            date={item.date}
            comments={item.comments}
            body={item.body}
            avatar={item.avatar}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </StyledList>
  )
}

export default IssueList
