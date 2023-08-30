import { ORGANIZATION_NAME, PER_PAGE, REPOSITORY_NAME } from 'data/const'
import { API } from './instance'

export const getIssueList = async (page: number) => {
  const { data } = await API.get(`/${ORGANIZATION_NAME}/${REPOSITORY_NAME}/issues`, {
    params: { state: 'open', sort: 'comments', per_page: PER_PAGE, page },
  })

  return data
}
