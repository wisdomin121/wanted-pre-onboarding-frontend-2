import { useEffect, useState } from 'react'
import { StyledList } from './IssueList.styled'
import { getIssueList } from 'apis/issue'
import { AxiosError } from 'axios'
import { IssueListItem } from 'components'

interface Item {
  issueNumber: number
  issueTitle: string
  author: string
  date: string
  comments: number
}

function IssueList() {
  const [list, setList] = useState<Item[]>()

  const getList = () => {
    getIssueList()
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
          })
        })

        setList(newList)
      })
      .catch((e: AxiosError) => alert(e.message))
  }

  useEffect(() => {
    getList()
  }, [])
  return (
    <StyledList>
      {list != null ? (
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
