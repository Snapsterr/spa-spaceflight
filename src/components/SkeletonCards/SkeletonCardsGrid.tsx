import { Grid } from "@mui/material"
import SkeletonCard from "./SkeletonCard"
import { skeletonCardsWrapper } from "./SkeletonCardsStyle"

const fakeLoadingArr = [
  { id: 0 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
]

const SkeletonCardsGrid = () => {
  return (
    <Grid
      container
      marginTop={"40px"}
      spacing={{ xs: 3, sm: 3.5, md: 5.5 }}
      columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
      sx={skeletonCardsWrapper}
    >
      {fakeLoadingArr.map((arr) => (
        <Grid item xs={4} sm={4} md={6} lg={4} key={arr.id}>
          <SkeletonCard />
        </Grid>
      ))}
    </Grid>
  )
}

export default SkeletonCardsGrid
