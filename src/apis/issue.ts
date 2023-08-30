import { PER_PAGE } from 'data/const'
import { API } from './instance'

export const getIssueList = async (page: number) => {
  const { data } = await API.get(`/facebook/react/issues`, {
    params: { state: 'open', sort: 'comments', per_page: PER_PAGE, page },
  })

  return data
}
