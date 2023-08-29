import { IssueListItem } from 'components'

function IssueListPage() {
  return (
    <>
      <IssueListItem
        issueNumber={27303}
        issueTitle="Changes to simplify imports in react-reconciler files"
        author="MarceloSpessoto"
        date="2023-08-29"
        comments={1}
      />
    </>
  )
}

export default IssueListPage
