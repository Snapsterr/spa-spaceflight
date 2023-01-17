import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import ArticlePage from "./pages/ArticlePage"
import Error from "./pages/Error"
import Home from "./pages/Home"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cardpage" element={<ArticlePage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
