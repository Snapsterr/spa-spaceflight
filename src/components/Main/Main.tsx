import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/useAppDispatch"
import useNavigation from "../../hooks/useNavigation"
import { getArticlesByPage } from "../../store/thunks/fetchArticles"
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
    if (articles.length !== 0 && query) {
      dispatch(getArticlesByPage({ query, page }))
    }
  }, [page])

  const totalPages = Math.floor(count / 6)

  return (
    <main className="main">
      {articles.length !== 0 && (
        <>
          <ResultCount count={count} />
          <PaginationRange
            currentPage={page}
            totalPages={totalPages}
            handleChange={handleChange}
          />
        </>
      )}
      {noData && <ErrorData />}
      <CardsGrid />
    </main>
  )
}

export default Main
