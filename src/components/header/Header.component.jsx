import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20%;
  min-height: 200px;
  padding-top: 65px;
  margin-bottom: 90px;
  h1 {
    text-align: center;
    color: rgba(0, 0, 0, 70%);
  }
  span {
    color: #8f181a;
  }
`

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  a {
    padding: 0 5px;

    &:not(:last-child):after {
      content: " |";
      color: #707070;
    }
  }
`

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>
        Pracownia Projektowa <span>Red</span>
      </h1>
      <MenuWrapper>
        <Link
          to="/"
          activeStyle={{
            color: "#8f181a",
          }}
        >
          kim jestem
        </Link>
        <Link
          to="/portfolio"
          activeStyle={{ color: "#8f181a" }}
          partiallyActive={true}
        >
          portfolio
        </Link>
        <Link to="/oferta" activeStyle={{ color: "#8f181a" }}>
          oferta
        </Link>
        <Link to="/kontakt" activeStyle={{ color: "#8f181a" }}>
          kontakt
        </Link>
      </MenuWrapper>
    </HeaderWrapper>
  )
}

export default Header
