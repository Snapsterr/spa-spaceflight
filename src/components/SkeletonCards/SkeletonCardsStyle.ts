export const skeletonCardsWrapper = {
  marginTop: "70px",

  "@media screen and (min-width: 0px)": {
    marginTop: "0px",
  },
}

export const skeletonCardItemSx = {
  display: "flex",
  flexDirection: "column",
  height: "530px",
  border: "1px solid #EAEAEA",
  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
  borderRadius: "5px",
  transition: 'box-shadow 0.4s ease',
  userSelect: 'none',
  "&:hover": {
    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.25)",
  },
  "@media screen and (max-width: 599px)": {
    height: "490px",
  },
}

export const skeletonCardBodyWrapperSx = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "start",
  padding: "25px",
  color: "#363636",
}

export const skeletonCardImgSx = {
  minHeight: "220px", 
  maxHeight: "220px", 
  borderBottomLeftRadius: '0px',
  borderBottomRightRadius: '0px',
  transform: "scale(1)",
}

export const skeletonCardDateSx = { 
  marginBottom: "22px",
  height: '21px',
  transform: "scale(1)",
  "@media screen and (max-width: 599px)": {
    height: "16px",
  },
}

export const skeletonCardTitleSx = { 
  marginBottom: "20px", 
  height: '57px',
  transform: "scale(1)", 
}

export const skeletonCardDescriptionSx = { 
  marginBottom: "20px",
  height: '96px',
  transform: "scale(1)", 
  "@media screen and (max-width: 599px)": {
    height: "66px",
  },
}

export const skeletonCardActionsSx = {
  height: '23px',
  transform: "scale(1)",
  "@media screen and (max-width: 599px)": {
    height: "18px",
  },
}