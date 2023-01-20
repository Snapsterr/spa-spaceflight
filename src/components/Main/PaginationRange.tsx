import { Pagination } from "@mui/material"
import React from "react"
import { paginationSx } from "./MainStyles"

interface Props {
  currentPage: number
  totalPages: number
  handleChange: (event: React.ChangeEvent<unknown>, page: number) => void
}
const PaginationRange = ({ currentPage, totalPages, handleChange }: Props) => {
  if (totalPages === 1) return null

  return (
    <div className="pagination__wrapper">
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        defaultPage={1}
        size="large"
        sx={paginationSx}
      />
    </div>
  )
}

export default PaginationRange
