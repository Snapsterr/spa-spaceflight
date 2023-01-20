import React from "react"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { saveQuery } from "../../store/slices/articlesSlice"
import { getArticles, getArticlesCount } from "../../store/thunks/fetchArticles"
import SearchField from "../SeachField/SearchField"

const Header = () => {
  const dispatch = useAppDispatch()

  const onSubmit = (query: string[]) => {
    dispatch(saveQuery(query))
    dispatch(getArticles(query))
    dispatch(getArticlesCount(query))
  }

  return (
    <header className="header-page">
      <div className="title">Filter by keywords</div>
      <SearchField onSubmit={onSubmit} />
    </header>
  )
}

export default React.memo(Header)
