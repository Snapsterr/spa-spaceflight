export const paginationSx = {
  backgroundColor: "transparent !important",
  color: "#fff !important",
  ".MuiPaginationItem-root.Mui-selected": {
    backgroundColor: "#363636",
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
  "@media screen and (max-width: 410px)": {
    ".MuiPaginationItem-root": {
      padding: "0px 6px",
      minWidth: "20px",
      height: "20px",
    },
  },
}