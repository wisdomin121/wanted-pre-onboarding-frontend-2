import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { IssueDetailPage, IssueListPage } from 'pages'

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<IssueListPage />} />
        <Route path="/detail" element={<IssueDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default PageRouter
