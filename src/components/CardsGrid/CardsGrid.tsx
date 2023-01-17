import { useAppSelector } from "../../hooks/useAppDispatch"
import { Grid, Skeleton } from "@mui/material"
import CardItem from "../Card/CardItem"
import { skeletonSx } from "./CardsStyles"

const CardsGrid = () => {
  const { isLoading, articles, query } = useAppSelector(
    (state) => state.articlesSlice
  )
  if (isLoading) return <Skeleton width={"100%"} sx={skeletonSx} />

  return (
    <>
      {!isLoading && articles.length !== 0 && (
        <Grid
          container
          marginTop={"40px"}
          spacing={{ xs: 3, sm: 3.5, md: 5.5 }}
          columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
          sx={{
            marginTop: "70px",

            "@media screen and (min-width: 0px)": {
              marginTop: "0px",
            },
          }}
        >
          {articles.map((article) => (
            <Grid item xs={4} sm={4} md={6} lg={4} key={article.id}>
              <CardItem article={article} queryArr={query} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}

export default CardsGrid
