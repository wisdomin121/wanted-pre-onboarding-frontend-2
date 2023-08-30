import { useCallback, useEffect, useState } from 'react'
import { AxiosError } from 'axios'

import { getIssueList } from 'apis/issue'
import { PER_PAGE } from 'data/const'
import { Item } from 'data/type'

const useInfiniteScroll = (scrollRef: React.RefObject<HTMLDivElement>) => {
  const [list, setList] = useState<Item[]>([])
  const [page, setPage] = useState<number>(1)
  const [hasNextPage, setHasNextPage] = useState<boolean>(true)
  const [isFetching, setIsFetching] = useState<boolean>(false)

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

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, offsetHeight } = scrollRef.current

      if (Math.ceil(scrollTop + offsetHeight) > scrollHeight - 1) {
        setIsFetching(true)
      }
    }
  }

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

  return list
}

export default useInfiniteScroll
