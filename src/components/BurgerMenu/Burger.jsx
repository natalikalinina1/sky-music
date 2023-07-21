import { useEffect, useState } from "react";

function Burger({ isOpenMenuCallBack }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    isOpenMenuCallBack(isMenuOpen);
  }, [isOpenMenuCallBack, isMenuOpen]);
  return (
    <div
      className="nav__burger burger"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <span className="burger__line"></span>
      <span className="burger__line"></span>
      <span className="burger__line"></span>
    </div>
  );
}

export default Burger;

