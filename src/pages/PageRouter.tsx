import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { IssueDetailPage, IssueListPage, NotFoundPage } from 'pages'

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<IssueListPage />} />
        <Route path="/detail" element={<IssueDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default PageRouter
