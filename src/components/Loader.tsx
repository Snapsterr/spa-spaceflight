import { CircularProgress } from "@mui/material"

interface Props {
  size: string
  color: string
}

const Loader = ({ size, color }: Props) => {
  return (
    <div className="loader">
      <div className="loader__wrapper">
        <CircularProgress size={size} sx={{ color: color }} />
      </div>
    </div>
  )
}

export default Loader
