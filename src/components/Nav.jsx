import { useState } from "react";
import Burger from "./BurgerMenu/Burger";
import Menu from "./BurgerMenu/Menu";
//src\components\BurgerMenu\Burger.jsx
import * as S from './style/style';
function Nav() {
  const [isMenuOpen, setMenuOpen] = useState()
  const isOpenMenuCallBack = (isMenuOpen) => {
      setMenuOpen(isMenuOpen)
  }
  return (
      <S.MainNav>
          <S.NavLogo>
              <S.LogoImg src="img/logo.png" alt="logo" />
          </S.NavLogo>
          <Burger isOpenMenuCallBack={isOpenMenuCallBack} />
          {isMenuOpen ? <Menu /> : null}
      </S.MainNav>
  )
}

export default Nav;
