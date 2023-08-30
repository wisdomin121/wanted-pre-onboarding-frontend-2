import { useCallback, useEffect, useRef, useState } from 'react'
import { AxiosError } from 'axios'
import { StyledList } from './IssueList.styled'

import { getIssueList } from 'apis/issue'
import { IssueListItem } from 'components'
import { PER_PAGE } from 'data/const'

interface Item {
  issueNumber: number
  issueTitle: string
  author: string
  date: string
  comments: number
  body: string
}

function IssueList() {
  const [list, setList] = useState<Item[]>([])
  const [page, setPage] = useState<number>(1)
  const [hasNextPage, setHasNextPage] = useState<boolean>(true)
  const [isFetching, setIsFetching] = useState<boolean>(false)

  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, offsetHeight } = scrollRef.current

      if (Math.ceil(scrollTop + offsetHeight) > scrollHeight - 1) {
        setIsFetching(true)
      }
    }
  }

  const getList = useCallback(async () => {
    await getIssueList(page)
      .then((res) => {
        const newList: Item[] = []

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        res.map((item: any) => {
          newList.push({
            issueNumber: item.number,
            issueTitle: item.title,
            author: item.user.login,
            date: item.created_at.slice(0, 10),
            comments: item.comments,
            body: item.body,
          })
        })

        setList((prevList) => [...prevList, ...newList])
        setPage((prevPage) => prevPage + 1)
        setIsFetching(false)

        if (PER_PAGE > newList.length) {
          setHasNextPage(false)
        }
      })
      .catch((e: AxiosError) => alert(e.message))
  }, [page])

  useEffect(() => {
    if (scrollRef.current != null) {
      setIsFetching(true)
      scrollRef.current.addEventListener('scroll', handleScroll)

      return () => scrollRef.current?.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isFetching && hasNextPage) getList()
    else if (!hasNextPage) setIsFetching(false)
  }, [isFetching])

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
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </StyledList>
  )
}

export default IssueList
