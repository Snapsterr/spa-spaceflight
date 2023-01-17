import React from "react"
import SearchField from "./SearchField"

const Header = () => {
  return (
    <header className="header-page">
      <div className="title">Filter by keywords</div>
      <SearchField />
    </header>
  )
}

export default React.memo(Header)
