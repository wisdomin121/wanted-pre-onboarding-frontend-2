import { useRef } from 'react'
import { StyledAd, StyledList } from './IssueList.styled'

import { useInfiniteScroll } from 'hooks'
import { IssueListItem } from 'components'
import { Item } from 'data/type'

function IssueList() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const list = useInfiniteScroll(scrollRef)

  return (
    <StyledList ref={scrollRef}>
      {list.length !== 0 ? (
        list.map((item: Item, idx: number) => (
          <>
            {idx !== 0 && idx % 5 === 0 && (
              <StyledAd href="https://www.wanted.co.kr/">
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
                  alt="wanted"
                />
              </StyledAd>
            )}

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
          </>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </StyledList>
  )
}

export default IssueList
