import Bar from '../components/Bar'
import CenterBlock from '../components/CenterBlock/CenterBlock'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar/Sidebar'

import * as S from '../components/style/style'

function MainPage() {
    return (
        <S.Wrapper>
            <S.Container>
                <S.Main>
                    <Nav />
                    <CenterBlock />
                    <Sidebar />
                </S.Main>
                <Bar />
            </S.Container>
        </S.Wrapper>
    )
}

export default MainPage