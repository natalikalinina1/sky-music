import SidebarList from './SidebarList'
import * as S from '../style/style'

function Sidebar() {
    return (
        <S.Sidebar>
            <S.SidebarPersonal>
                <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
                <S.SidebarAvatar></S.SidebarAvatar>
            </S.SidebarPersonal>
            <SidebarList />
        </S.Sidebar>
    )
}

export default Sidebar