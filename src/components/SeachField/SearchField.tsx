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

    if (!searchRef.current?.value.trim().length || !searchRef.current.value)
      return setIsError(true)

    const query = stringToArray(searchRef.current?.value)

    onSubmit(query)
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
