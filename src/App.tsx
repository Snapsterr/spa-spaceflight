import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import Loader from "./components/Loader"

const Home = lazy(() => import("./pages/Home"))
const ArticlePage = lazy(() => import("./pages/ArticlePage"))
const Error = lazy(() => import("./pages/Error"))

const App = () => {
  return (
    <Suspense fallback={<Loader size={"10rem"} color={"#363636"} />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardpage" element={<ArticlePage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  )
}

export default App
