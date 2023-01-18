import { useAppSelector } from "../../hooks/useAppDispatch"
import { Grid } from "@mui/material"
import CardItem from "../Card/CardItem"
import { cardsGridWrapperSx } from "./CardsGridStyles"
import SkeletonCardsGrid from "../SkeletonCards/SkeletonCardsGrid"

const CardsGrid = () => {
  const { isLoading, articles, query } = useAppSelector(
    (state) => state.articlesSlice
  )
  if (isLoading) return <SkeletonCardsGrid />

  return (
    <>
      {articles.length !== 0 && (
        <Grid
          container
          spacing={{ xs: 3, sm: 3.5, md: 5.5 }}
          columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
          sx={cardsGridWrapperSx}
        >
          {articles.map((article) => (
            <Grid item xs={4} sm={4} md={6} lg={4} key={article.id}>
              <CardItem
                article={article}
                queryArr={query}
                isLoading={isLoading}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}

export default CardsGrid
