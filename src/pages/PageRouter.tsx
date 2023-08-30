import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { IssuePage, NotFoundPage } from 'pages'

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<IssuePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default PageRouter
