import { API } from './instance'

export const getIssueList = async () => {
  const { data } = await API.get(`/facebook/react/issues`, {
    params: { state: 'open', sort: 'comments', per_page: 20, page: 1 },
  })

  return data
}
