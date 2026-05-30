import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";


const LeftNav = () => {
  return (
    <>
      <div style={style}>
        <div className="logo">
          <FaFacebookSquare />
        </div>
        <div className="search">
          <input type="search" name="search" id="search" />
          <CiSearch />
        </div>
      </div>
    </>
  )
  const style = {
    color: "white",
    backgroundColor: "whiteSmoke"
  }
}

export default LeftNav
