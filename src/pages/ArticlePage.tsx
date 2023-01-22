import { Box, Skeleton } from "@mui/material"
import { Typography, CardActions, Stack } from "@mui/material"
import { Link, Navigate, useLocation } from "react-router-dom"
import { BsArrowLeftShort } from "react-icons/bs"
import { dateFormatter } from "../utils/dateFormatter"
import { CiCalendar } from "react-icons/ci"
import {
  articlePageContentWrapperSx,
  articlePageActionLinkSx,
  articlePageActionSx,
  articlePageActionWrapperSx,
  articlePageDateSx,
  articlePageDateWrapperSx,
  articlePageDescriptionSx,
  articlePageImgSx,
  articlePageTitleSx,
  articlePageWrapperSx,
} from "./PagesStyle"
import { useState } from "react"

const ArticlePage = () => {
  const [loadingContext, setLoadingContext] = useState<boolean>(true)
  const location = useLocation()
  const data = location.state?.cardData

  const { imageUrl, title, summary, publishedAt } = data

  const formattedDate = dateFormatter(publishedAt)

  if (!location.state) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      {loadingContext && <Skeleton width={"100%"} sx={articlePageImgSx} />}
      <img
        src={imageUrl ? imageUrl : ""}
        alt={title}
        onLoad={() => setLoadingContext(false)}
        className="card__img card__img--page"
        style={{ display: loadingContext ? "none" : "block" }}
      />

      <Box component="main" sx={articlePageWrapperSx}>
        <div className="container">
          <Box component="div" sx={articlePageContentWrapperSx}>
            <Typography
              gutterBottom
              variant="h1"
              component="h1"
              sx={articlePageTitleSx}
            >
              {title}
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="start"
              sx={articlePageDateWrapperSx}
            >
              <CiCalendar className="icon__calendar" />
              <Typography sx={articlePageDateSx}>{formattedDate}</Typography>
            </Stack>
            <Typography variant="body2" sx={articlePageDescriptionSx}>
              {summary}
            </Typography>
          </Box>

          <CardActions sx={articlePageActionSx}>
            <Link to="/" className="link link__left">
              <Stack
                direction="row"
                alignItems="start"
                justifyContent="start"
                gap="0px"
                sx={articlePageActionWrapperSx}
              >
                <BsArrowLeftShort className="icon icon__arrow--left" />
                <Typography sx={articlePageActionLinkSx}>
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

export default ArticlePage
