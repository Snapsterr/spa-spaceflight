import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import CardPage from "./pages/CardPage"
import Error from "./pages/Error"
import Home from "./pages/Home"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cardpage" element={<CardPage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
