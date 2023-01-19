import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Stack,
  Skeleton,
} from "@mui/material"
import { Link } from "react-router-dom"
import { BsArrowRightShort } from "react-icons/bs"
import { CiCalendar } from "react-icons/ci"
import { dateFormatter } from "../../utils/dateFormatter"
import Highlighter from "react-highlight-words"
import { trimmedString } from "../../utils/stringUtils"
import {
  cardItemSx,
  cardImgSx,
  cardBodyWrapperSx,
  cardDateWrapperSx,
  cardDateSx,
  cardTitleSx,
  cardDescriptionSx,
  cardActionsSx,
  cardActionLinkSx,
} from "./CardStyles"
import { useState } from "react"

interface Props {
  article: IArticle
  queryArr: string[]
  isLoading: boolean
}

const CardItem = ({ article, queryArr }: Props) => {
  const [loadingContext, setLoadingContext] = useState<boolean>(true)
  const { title, summary, imageUrl, publishedAt } = article

  const formattedDate = dateFormatter(publishedAt)
  const trimmedSummary = summary ? trimmedString(summary) : "no description"

  return (
    <Card sx={cardItemSx}>
      {loadingContext && <Skeleton width={"100%"} sx={cardImgSx} />}
      <img
        src={imageUrl ? imageUrl : ""}
        alt={title}
        onLoad={() => setLoadingContext(false)}
        className="card__img"
        style={{ display: loadingContext ? "none" : "block" }}
      />
      <CardContent sx={cardBodyWrapperSx}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="start"
          sx={cardDateWrapperSx}
        >
          <CiCalendar className="icon icon__calendar" />
          <Typography sx={cardDateSx}>{formattedDate}</Typography>
        </Stack>
        <Typography gutterBottom variant="h5" component="div" sx={cardTitleSx}>
          <Highlighter
            searchWords={queryArr}
            autoEscape={true}
            textToHighlight={title}
          />

          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={cardDescriptionSx}
        >
          <Highlighter
            searchWords={queryArr}
            autoEscape={true}
            textToHighlight={trimmedSummary}
          />
        </Typography>
        <CardActions sx={cardActionsSx}>
          <Link
            to="/cardpage"
            state={{ cardData: article }}
            className="link__more link__more--right"
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="start"
              gap="0px"
            >
              <Typography sx={cardActionLinkSx}>Read more</Typography>
              <BsArrowRightShort className="icon icon__arrow" />
            </Stack>
          </Link>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default CardItem
