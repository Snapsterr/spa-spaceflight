import React from "react"
import { Divider } from "@mui/material"

interface Props {
  count: number
}

const ResultCount = ({ count }: Props) => {
  return (
    <>
      <div className="title title--result">
        Results: <>{count}</>
      </div>

      <Divider textAlign="left" />
    </>
  )
}

export default React.memo(ResultCount)
