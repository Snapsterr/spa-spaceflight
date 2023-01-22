import { Route, Routes } from "react-router-dom"
import { lazy, Suspense, useEffect } from "react"
import Loader from "./components/Loader"
import ArticlePage from "./pages/ArticlePage"
import { useAppDispatch, useAppSelector } from "./hooks/useAppDispatch"
import {
  getAllArticlesByPage,
  getAllArticlesCount,
  getArticlesByPage,
} from "./store/thunks/fetchArticles"

const Home = lazy(() => import("./pages/Home"))
const Error = lazy(() => import("./pages/Error"))

const App = () => {
  const { articles, query, isPageNumChanged, page } = useAppSelector(
    (state) => state.articlesSlice
  )

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllArticlesByPage(page))
    dispatch(getAllArticlesCount())
  }, [])

  useEffect(() => {
    if (articles.length !== 0 && query.length !== 0) {
      dispatch(getArticlesByPage({ query, page }))
    }
    if (articles.length !== 0 && query.length === 0) {
      dispatch(getAllArticlesByPage(page))
    }
  }, [isPageNumChanged])

  return (
    <Suspense fallback={<Loader size={"10rem"} color={"#363636"} />}>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<Error />} />
        <Route
          path="/cardpage/:id"
          element={<ArticlePage />}
          errorElement={<Error />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  )
}

export default App
