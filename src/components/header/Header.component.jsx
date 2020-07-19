import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20%;
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
    color: "#707070";

    &:not(:last-child):after {
      content: " |";
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
        <Link name={0} to="/" activeStyle={{ color: "#8f181a" }}>
          kim jestem
        </Link>
        <Link name={1} to="/portfolio" activeStyle={{ color: "#8f181a" }}>
          portfolio
        </Link>
        <Link name={2} to="/oferta" activeStyle={{ color: "#8f181a" }}>
          oferta
        </Link>
        <Link name={3} to="/kontakt" activeStyle={{ color: "#8f181a" }}>
          kontakt
        </Link>
      </MenuWrapper>
    </HeaderWrapper>
  )
}

export default Header
