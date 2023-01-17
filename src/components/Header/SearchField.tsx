import React, { useRef } from "react"
import { IconButton, TextField } from "@mui/material"
import { FiSearch } from "react-icons/fi"
import { stringToArray } from "../../utils/stringUtils"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { getArticles, getArticlesCount } from "../../store/thunks/fetchArticles"
import { saveQuery } from "../../store/slices/articlesSlice"
import { searchFieldSx } from "./HeaderStyles"

const SearchField = () => {
  const searchRef = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchRef.current?.value) {
      const query = stringToArray(searchRef.current?.value)
      dispatch(saveQuery(query))
      dispatch(getArticles(query))
      dispatch(getArticlesCount(query))
    }
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <TextField
        inputRef={searchRef}
        InputProps={{
          startAdornment: (
            <IconButton
              type="submit"
              className="search-icon"
              aria-label="search"
            >
              <FiSearch />
            </IconButton>
          ),
        }}
        variant="outlined"
        placeholder="Start typing keywords..."
        size="small"
        autoComplete="off"
        sx={searchFieldSx}
      />
    </form>
  )
}

export default SearchField
