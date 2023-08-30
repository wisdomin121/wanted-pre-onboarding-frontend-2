import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { IssuePage, NotFoundPage, ServerErrorPage } from 'pages'

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<IssuePage />} />
        <Route path="/500" element={<ServerErrorPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default PageRouter
