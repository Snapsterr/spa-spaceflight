export const paginationSx = {
  fontFamily: "Montserrat",
  fontWeight: 400,
  fontSize: '16px',
  backgroundColor: "transparent !important",
  color: "#fff !important",
  ".MuiPaginationItem-root.Mui-selected": {
    backgroundColor: "#363636",
    color: '#fff',
    "&:hover": {
      backgroundColor: '#5a5a5a',
    }
  },
  ".MuiPagination-ul": {
    justifyContent: "center",
  },
  "@media screen and (max-width: 520px)": {
    ".MuiPaginationItem-root": {
      minWidth: "24px",
      height: "24px",
    },
  },
  "@media screen and (max-width: 420px)": {
    ".MuiPaginationItem-root": {
      padding: "0px 6px",
      minWidth: "20px",
      height: "20px",
    },
  },
}