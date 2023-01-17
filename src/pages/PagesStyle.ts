export const articlePageImgSx = {
  position: "absolute",
  top: 0,
  left: 0,
  height: 245,
  width: "100%",
  objectFit: "cover",
  zIndex: "5",
}

export const articlePageWrapperSx = {
  marginTop: "150px",
}

export const articlePageContentWrapperSx = {
  padding: "35px 75px 50px 75px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#ffffff",
  border: "1px solid #EAEAEA",
  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
  borderRadius: "5px",
  position: "relative",
  zIndex: "100",
  "@media screen and (max-width: 800px)": {
    padding: "25px 55px 35px 55px",
  },
  "@media screen and (max-width: 600px)": {
    padding: "15px 35px 25px 35px",
  },
}

export const articlePageTitleSx = {
  margin: "35px 0px 35px 0px",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "24px",
  lineHeight: "29px",
  textAlign: "center",
  "@media screen and (max-width: 600px)": {
    fontSize: "20px",
    lineHeight: "28px",
  },
}

export const articlePageDateWrapperSx = {
  marginBottom: "30px",
  gap: '8px',
  "@media screen and (max-width: 600px)": {
    gap: '5px',
  },
}

export const articlePageDateSx = {
  alignSelf: "flex-end",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "125%",
  opacity: "0.6",
  "@media screen and (max-width: 600px)": {
    fontSize: "12px",
  },
}

export const articlePageDescriptionSx = {
  marginBottom: "20px",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "150%",
  "@media screen and (max-width: 600px)": {
    fontSize: "14px",
  },
}

export const articlePageActionSx = { marginTop: "35px", padding: "0px 0px 45px 0px" }

export const articlePageActionWrapperSx = { position: "relative" }

export const articlePageActionLinkSx = {
  paddingLeft: "25px",
  alignSelf: "center",
  fontFamily: "Montserrat",
  fontSize: "16px",
  lineHeight: "150%",
  fontWeight: "700",
  color: "#363636",
  textTransform: "none",
  "@media screen and (max-width: 600px)": {
    paddingLeft: "18px",
    fontSize: "14px",
  },
}

export const errorPageWrapperSx = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
}

export const errorNameSx = {
  fontFamily: "Montserrat",
  fontSize: "96px",
  lineHeight: "125%",
  fontWeight: "600",
  color: "#363636",
}

export const errorMessageSx = {
  marginBottom: "30px",
  fontFamily: "Montserrat",
  fontSize: "18px",
  lineHeight: "125%",
  fontWeight: "400",
  color: "#363636",
}

export const errorBtnHomeSx = {
  width: "100%",
  textAlign: "center",
  padding: "15px 20px",
  fontFamily: "Montserrat",
  fontSize: "16px",
  lineHeight: "1",
  fontWeight: "700",
  backgroundColor: "#0054ff",
  color: "#ffffff",
  borderRadius: "5px",
  textTransform: "none",
}

export const errorPageLeftSubgridSx = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'spaceBetween',
  alignItems: 'start',

  "@media screen and (max-width: 1200px)": {
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export const errorPageImgWrapperSx = {textAlign: 'center'}