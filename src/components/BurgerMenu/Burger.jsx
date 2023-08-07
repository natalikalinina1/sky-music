import { useEffect, useState, useCallback,useMemo } from 'react'
import * as S from './style.BurgerMenu'

function Burger({ isOpenMenuCallBack }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    isOpenMenuCallBack(isMenuOpen);
  }, [isOpenMenuCallBack, isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prevState => !prevState);
  }, []);

  const burgerLines = useMemo(() => Array.from({ length: 3 }).map((i, index) => (
    <S.BurgerLine key={index} />
  )), []);

  return (
    <S.NavBurger onClick={toggleMenu}>
      {burgerLines}
    </S.NavBurger>
  );
}

export default Burger;