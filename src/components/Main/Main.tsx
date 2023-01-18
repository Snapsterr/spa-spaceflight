import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/useAppDispatch"
import useNavigation from "../../hooks/useNavigation"
import {
  getArticlesByPage,
  getAllArticlesCount,
  getAllArticlesByPage,
} from "../../store/thunks/fetchArticles"
import CardsGrid from "../CardsGrid/CardsGrid"
import ErrorData from "../ErrorData/ErrorData"
import PaginationRange from "./PaginationRange"
import ResultCount from "./ResultCount"

const Main = () => {
  const { articles, count, query, noData } = useAppSelector(
    (state) => state.articlesSlice
  )

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
  }, [page])

  const totalPages = Math.ceil(count / 6)

  if (noData) return <ErrorData />

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
