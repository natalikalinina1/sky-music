import { useEffect, useState, useCallback } from 'react'
import * as S from '../style/style'

function Burger({ isOpenMenuCallBack }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    useEffect(() => {
        isOpenMenuCallBack(isMenuOpen)
    }, [isOpenMenuCallBack, isMenuOpen])

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prevState => !prevState)
    }, [])

    return (
        <S.NavBurger onClick={toggleMenu}>
            {Array.from({ length: 3 }).map((i, index) => (
                <S.BurgerLine key={index} />
            ))}
        </S.NavBurger>
    )
}

export default Burger

