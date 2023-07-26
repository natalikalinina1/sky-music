import * as S from '../style/style'

function Menu() {
    return (
        <S.MenuList>
            <S.MenuItem>
                <S.MenuLink href="http://">Главное</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
                <S.MenuLink href="http://">Мой плейлист</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
                <S.MenuLink href="http://">Войти</S.MenuLink>
            </S.MenuItem>
        </S.MenuList>
    )
}

export default Menu