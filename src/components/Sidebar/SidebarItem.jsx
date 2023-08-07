import * as S from './style.Sidebar'
import { Link } from 'react-router-dom'


function SidebarItem({ img, alt, linkTo }) {
    return (
        <S.SidebarItem>
            <Link to={linkTo}>
                <img src={img} alt={alt} />
            </Link>
        </S.SidebarItem>
    )
}

export default SidebarItem