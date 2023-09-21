import styled from 'styled-components'


export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;

export const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  margin-right: 10px;
`;

export const Button = styled.div`
  cursor: pointer;
  :hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
  :active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
`;

export const FilterButton = styled(Button)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-color: ${(props) => (props.active ? "#b672ff" : "#ffffff")};
  color: ${(props) => (props.active ? "#b672ff" : "#ffffff")};
  border-radius: 60px;
  padding: 6px 20px;
`;

export const FilterContainer = styled.div`
  position: absolute;
  top: 50px;
  width: 200px;
  background-color: #2f3640;
  color: #f5f6fa;
  transition: all 0.4s;
  border-radius: 8px;
  opacity: 1;
  max-height: 250px;
  overflow-y: scroll;
  padding: 12px;
  font-size: 14px;
  ::-webkit-scrollbar {
    width: 5px;
    background-color: #0d141f;
    border-radius: 0 8px 8px 0;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ##b672ff;
    border-radius: 0 8px 8px 0;
  }
`;
export const CenterblockFilter = styled.div`
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
  margin-bottom: 51px;
`;

export const FilterOps = styled.div`

margin-bottom: 18px;
:hover {
  color: #b672ff;
  text-decoration:underline;
}
color: ${(props) => (props.selected ? "#b672ff" : "#ffffff")};

`;
export const FilterOpsRadio = styled.input`
  display: none;
`;
export const SelectedCategory = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50px;
  background-color: #ad61ff;
  color: white;
  position: absolute;
  top: -5px;
  right: 0px;
  text-align: center;
`;
