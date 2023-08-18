
import styled from 'styled-components'

export const MainSidebar = styled.div`
  width: 418px;
  padding: 20px 90px 20px 78px;
  @media (max-width: 1430px) {
    width: 218px;
    padding: 20px 60px 20px 58px;
  }
`;

export const SidebarPersonal = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding: 12px 0 15px 0;
  @media (max-width: 1430px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const SidebarPersonalName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-right: 16px;
`;

export const SidebarAvatar = styled.div`
  width: 43px;
  height: 43px;
  background-color: #313131;
  border-radius: 50%;
  cursor: pointer;
`;

export const SidebarAvatarSvg = styled.svg`
  width: 100%;
  height: 100%;`
  
export const SidebarBlock = styled.div`
  height: 100%;
  padding: 240px 0 0 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 32px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

export const SidebarList = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  row-gap: 30px;
`;

export const SidebarItem = styled.div`
  width: 250px;
  height: 150px;
  background-color: #313131;
  :not(:last-child) {
    margin-bottom: 30px;
  }
  @media (max-width: 1430px) {
    width: 190px;
  }
`;

export const SidebarLink = styled.div`
  width: 100%;
  height: 100%;
`;

export const SidebarImg = styled.img`
  width: 100%;
  height: 100%;
 
`;

