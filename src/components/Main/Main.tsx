import { lazy, Suspense, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/useAppDispatch"
import useNavigation from "../../hooks/useNavigation"
import {
  getArticlesByPage,
  getAllArticlesCount,
  getAllArticlesByPage,
} from "../../store/thunks/fetchArticles"
import CardsGrid from "../CardsGrid/CardsGrid"
import PaginationRange from "./PaginationRange"
import ResultCount from "./ResultCount"

const ErrorData = lazy(() => import("../ErrorData/ErrorData"))

const Main = () => {
  const { articles, count, query, isDataEnabled, isPageNumChanged } =
    useAppSelector((state) => state.articlesSlice)

  const dispatch = useAppDispatch()
  const { page, handleChange } = useNavigation()

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

  const totalPages = Math.ceil(count / 6)

  if (isDataEnabled)
    return (
      <Suspense>
        <ErrorData />
      </Suspense>
    )

  return (
    <main className="main">
      {articles.length !== 0 && (
        <>
          <ResultCount count={count} />
          <CardsGrid />
          <PaginationRange
            currentPage={page}
            totalPages={totalPages}
            handleChange={handleChange}
          />
        </>
      )}
    </main>
  )
}

export default Main
