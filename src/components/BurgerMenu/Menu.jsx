import * as S from './style.BurgerMenu'
function Menu() {
    const deleteToken = () => {
        document.cookie = "token=''=;max-age=-1"
    }
    return (
        <S.MenuList>
            <S.MenuItem>
                <S.MenuLink to="/">Главное</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
                <S.MenuLink to="/my-tracks">Мои треки</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
                <S.MenuLink to="/login" onClick={deleteToken}>
                    Выйти
                </S.MenuLink>
            </S.MenuItem>
        </S.MenuList>
    )
}

export default Menu