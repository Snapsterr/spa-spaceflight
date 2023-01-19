import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import { CircularProgress } from "@mui/material"

const Home = lazy(() => import("./pages/Home"))
const ArticlePage = lazy(() => import("./pages/ArticlePage"))
const Error = lazy(() => import("./pages/Error"))

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="loader">
          <div className="loader__wrapper">
            <CircularProgress size={"10rem"} />
          </div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardpage" element={<ArticlePage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  )
}

export default App
