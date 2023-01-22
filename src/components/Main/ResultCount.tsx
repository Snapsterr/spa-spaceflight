import React from "react"
import { Divider } from "@mui/material"
import { dividerSx } from "./MainStyles"

interface Props {
  count: number
}

const ResultCount = ({ count }: Props) => {
  return (
    <>
      <div className="title title--result">
        Results: <>{count}</>
      </div>

      <Divider textAlign="left" sx={dividerSx} />
    </>
  )
}

export default React.memo(ResultCount)
