import { useState } from "react";
import Burger from "../BurgerMenu/Burger";
import Menu from "../BurgerMenu/Menu";
//src\components\BurgerMenu\Burger.jsx
import * as S from './style.Nav';
import { Link } from 'react-router-dom'

function Nav() {
  const [isMenuOpen, setMenuOpen] = useState()
  const isOpenMenuCallBack = (isMenuOpen) => {
      setMenuOpen(isMenuOpen)
  }
  return (
      <S.MainNav>
          <S.NavLogo>
          <Link to="/">
                    <S.LogoImg src="/img/logo.png" alt="logo" />
                </Link>
          </S.NavLogo>
          <Burger isOpenMenuCallBack={isOpenMenuCallBack} />
          {isMenuOpen ? <Menu /> : null}
      </S.MainNav>
  )
}

export default Nav;
