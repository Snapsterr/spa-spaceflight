import { Box } from "@mui/material"
import { Typography, CardActions, Stack } from "@mui/material"
import { Link, Navigate, useLocation } from "react-router-dom"
import { BsArrowLeftShort } from "react-icons/bs"
import { dateFormatter } from "../utils/dateFormatter"
import { CiCalendar } from "react-icons/ci"
import {
  cardContentWrapperSx,
  cardPageActionLinkSx,
  cardPageActionSx,
  cardPageActionWrapperSx,
  cardPageDateSx,
  cardPageDateWrapperSx,
  cardPageDescriptionSx,
  cardPageImgSx,
  cardPageTitleSx,
  cardPageWrapperSx,
} from "./PagesStyle"

const CardPage = () => {
  const location = useLocation()
  const data = location.state?.cardData

  const { imageUrl, title, summary, publishedAt } = data

  const formattedDate = dateFormatter(publishedAt)

  if (!location.state) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <Box
        component="img"
        sx={cardPageImgSx}
        alt={title}
        src={imageUrl ? imageUrl : ""}
      />

      <Box component="main" sx={cardPageWrapperSx}>
        <div className="container">
          <Box component="div" sx={cardContentWrapperSx}>
            <Typography
              gutterBottom
              variant="h1"
              component="h1"
              sx={cardPageTitleSx}
            >
              {title}
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="start"
              sx={cardPageDateWrapperSx}
            >
              <CiCalendar className="icon__calendar" />
              <Typography sx={cardPageDateSx}>{formattedDate}</Typography>
            </Stack>
            <Typography variant="body2" sx={cardPageDescriptionSx}>
              {summary}
            </Typography>
          </Box>

          <CardActions sx={cardPageActionSx}>
            <Link to="/" className="link__more link__more--left">
              <Stack
                direction="row"
                alignItems="start"
                justifyContent="start"
                gap="0px"
                sx={cardPageActionWrapperSx}
              >
                <BsArrowLeftShort className="icon icon__arrow--left" />
                <Typography sx={cardPageActionLinkSx}>
                  Back to homepage
                </Typography>
              </Stack>
            </Link>
          </CardActions>
        </div>
      </Box>
    </>
  )
}

export default CardPage
