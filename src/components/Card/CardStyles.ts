export const cardItemSx = {
  display: "flex",
  flexDirection: "column",
  height: "530px",
  border: "1px solid #EAEAEA",
  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
  borderRadius: "5px",
  transition: 'box-shadow 0.4s ease',
  position: 'relative',
  "&:hover": {
    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.25)",
  },
  "@media screen and (max-width: 599px)": {
    height: "490px",
  },
}

export const cardImgSx = {
  minHeight: "220px",
  maxHeight: "220px",
  borderBottomLeftRadius: '0px',
  borderBottomRightRadius: '0px',
  transform: "scale(1)",
}

export const cardBodyWrapperSx = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "start",
  padding: "25px",
  color: "#363636",
}

export const cardDateWrapperSx = {
  marginBottom: "22px",
  gap: '8px',
  opacity: "0.6",
  "@media screen and (max-width: 599px)": {
    gap: '5px'
  },
}

export const cardDateSx = {
  alignSelf: "flex-end",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "125%",
  color: '#363636',
  "@media screen and (max-width: 599px)": {
    fontSize: "12px"
  },
}

export const cardTitleSx = {
  flex: "1 1 0",
  minWidth: '185px',
  maxHeight: "57px",
  marginBottom: "20px",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "400",
  color: '#363636',
  fontSize: "24px",
  lineHeight: "29px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: "2",
  lineClamp: "2",
  WebkitBoxOrient: "vertical",
  "@media screen and (max-width: 599px)": {
    fontSize: "20px",
    lineHeight: "28px",
  },
}

export const cardDescriptionSx = {
  flex: "1 1 0",
  marginBottom: "20px",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "150%",
  color: '#363636',
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: "4",
  lineClamp: "4",
  WebkitBoxOrient: "vertical",
  "@media screen and (max-width: 599px)": {
    fontSize: "14px",
    lineHeight: "150%",
  },
}

export const cardActionsSx = { padding: "0px" }

export const cardActionLinkSx = {
  fontFamily: "Montserrat",
  fontSize: "16px",
  lineHeight: "1",
  fontWeight: "700",
  color: "#363636",
  textTransform: "none",
  "@media screen and (max-width: 599px)": {
    fontSize: "14px",
  },
}