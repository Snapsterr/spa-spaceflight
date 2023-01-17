import { Divider } from "@mui/material"

interface Props {
  count: number
}

const ResultCount = ({ count }: Props) => {
  return (
    <>
      <div className="title title--result">
        Results: <>{count - 6}</>
      </div>

      <Divider textAlign="left" />
    </>
  )
}

export default ResultCount
