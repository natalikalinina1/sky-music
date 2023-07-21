import { useState } from "react";
import Burger from "./BurgerMenu/Burger";
import Menu from "./BurgerMenu/Menu";
//src\components\BurgerMenu\Burger.jsx
function Nav() {
  const [isMenuOpen, setMenuOpen] = useState();
  const isOpenMenuCallBack = (isMenuOpen) => {
    setMenuOpen(isMenuOpen);
  }
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
     <Burger isOpenMenuCallBack={isOpenMenuCallBack}/>
      {isMenuOpen ? <Menu/> : null}
    </nav>
  );
}

export default Nav;