import { Box, Container, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import {
  errorBtnHomeSx,
  errorMessageSx,
  errorNameSx,
  errorPageImgWrapperSx,
  errorPageLeftSubgridSx,
  errorPageWrapperSx,
} from "./PagesStyle"

const Error = () => {
  return (
    <Box sx={errorPageWrapperSx}>
      <Container maxWidth="md">
        <Grid container spacing={2} columns={{ xs: 6, sm: 6, md: 6, lg: 12 }}>
          <Grid
            xs={6}
            rowSpacing={5}
            order={{ xs: 2, sm: 2, md: 2, lg: 1 }}
            sx={errorPageLeftSubgridSx}
          >
            <Typography variant="h1" sx={errorNameSx}>
              Error
            </Typography>
            <Typography variant="h6" sx={errorMessageSx}>
              The page you’re looking for doesn’t exist.
            </Typography>
            <Link to="/" className="link__home">
              <Typography variant="body1" sx={errorBtnHomeSx}>
                Back Home
              </Typography>
            </Link>
          </Grid>
          <Grid
            xs={6}
            order={{ xs: 1, sm: 1, md: 1, lg: 2 }}
            sx={errorPageImgWrapperSx}
          >
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt=""
              width={500}
              height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Error
