import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { IssueListPage } from 'pages'

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<IssueListPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default PageRouter
