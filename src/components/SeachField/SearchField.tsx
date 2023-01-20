import React, { useRef, useState } from "react"
import { IconButton, TextField } from "@mui/material"
import { FiSearch } from "react-icons/fi"
import { stringToArray } from "../../utils/stringUtils"
import { searchFieldSx } from "./SearchFieldStyle"

interface Props {
  onSubmit: (query: string[]) => void
}

const SearchField = ({ onSubmit }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null)
  const [isError, setIsError] = useState<boolean>(false)

  const onSubmitHandler = (e: React.FormEvent): void => {
    e.preventDefault()

    setIsError(false)
    const searchText = searchRef.current?.value

    if (searchRef.current?.value) {
      if (!searchText?.trim().length) return setIsError(true)

      const query = stringToArray(searchText)

      onSubmit(query)
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
            <IconButton type="submit" aria-label="search">
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
