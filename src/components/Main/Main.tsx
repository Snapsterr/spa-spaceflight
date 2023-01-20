import { lazy, Suspense } from "react"
import { useAppSelector } from "../../hooks/useAppDispatch"
import useNavigation from "../../hooks/useNavigation"
import CardsGrid from "../CardsGrid/CardsGrid"
import PaginationRange from "./PaginationRange"
import ResultCount from "./ResultCount"

const ErrorData = lazy(() => import("../ErrorData"))

const Main = () => {
  const { articles, count, isDataEnabled, page } = useAppSelector(
    (state) => state.articlesSlice
  )

  const { handleChange } = useNavigation()

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
