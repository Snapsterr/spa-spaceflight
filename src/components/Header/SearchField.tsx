import React, { useRef, useState } from "react"
import { IconButton, TextField } from "@mui/material"
import { FiSearch } from "react-icons/fi"
import { stringToArray } from "../../utils/stringUtils"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { getArticles, getArticlesCount } from "../../store/thunks/fetchArticles"
import { saveQuery } from "../../store/slices/articlesSlice"
import { searchFieldSx } from "./HeaderStyles"

const SearchField = () => {
  const searchRef = useRef<HTMLInputElement>(null)
  const [isError, setIsError] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault()

    setIsError(false)
    const searchText = searchRef.current?.value

    if (searchRef.current?.value) {
      if (!searchText?.trim().length) return setIsError(true)

      const query = stringToArray(searchRef.current?.value)

      dispatch(saveQuery(query))
      dispatch(getArticles(query))
      dispatch(getArticlesCount(query))
    } else {
      setIsError(true)
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
        error={isError}
        helperText={isError ? "Empty field!" : " "}
        sx={searchFieldSx}
      />
    </form>
  )
}

export default SearchField
