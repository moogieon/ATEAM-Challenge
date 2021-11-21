import styled from "@emotion/styled";
import { IMainStylePorps } from "./mainPage.types";

export const Wrapper = styled.div`
  padding: 40px 10% 60px 10%;
  display: flex;
  flex-direction: column;
`;
export const Header = styled.div`
  margin-bottom: 32px;
`;
export const Body = styled.div`
  display: grid;
  height: 728px;

  grid-template-rows: repeat(3, 356px);
  grid-template-columns: repeat(3, 1fr);
  gap: 16px 16px;
`;
export const Title = styled.div`
  font-size: 20px;
  color: #323d45;
  font-weight: 600;
`;
export const SubTitle = styled.div`
  color: #323d45;
  font-size: 16px;
`;
export const SelectBox = styled.div`
  height: 32px;
  margin-top: 32px;
  display: flex;
`;
export const Contents = styled.div`
  width: 366px;
  height: 356px;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  padding: 24px 26px 24px 16px;
  :hover {
    outline: 2px solid #2196f3;
    cursor: pointer;
  }
`;

export const ContentsHead = styled.div`
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 16px;
`;
export const Colum = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  width: 100%;
  height: 24px;
`;
export const Product = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #323d45;
`;

export const Status: any = styled.div`
  text-align: center;
  line-height: 22px;
  font-size: 12px;
  font-weight: 500;
  color: ${(props: IMainStylePorps) => {
    const edit = {
      대기중: " grey",
      상담중: "#ffa000",
    };
    return edit[props.isEdit];
  }};
  border: ${(props: IMainStylePorps) => {
    const edit = {
      대기중: " 1px solid grey",
      상담중: "1px solid #ffa000",
    };
    return edit[props.isEdit];
  }};
  border-radius: 12px;
  width: 50px;
  height: 24px;
`;
export const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #323d45;
`;
export const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #939fa5;
  margin-top: 24px;
`;
export const ContentsBody = styled.div`
  margin-top: 32px;
`;

export const Colum2 = styled.div`
  display: flex;
  margin-bottom: 8px;
  width: 100%;
`;
export const Stuff = styled.div`
  width: 70px;
  height: 20px;
  color: #323d45;
`;
export const Amount = styled.div`
  font-size: 16px;
  font-weight: 600;
  width: 232px;
  height: 20px;
  color: #323d45;
  margin-left: 32px;
`;
export const ContentsFooter = styled.div`
  display: flex;
  margin-top: 24px;
`;
export const GoDetail = styled.button`
  width: 108px;
  height: 32px;
  margin-right: 10px;
  background-color: #2196f3;
  border-radius: 4px;
  border: none;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
`;
export const GoChat = styled.button`
  width: 76px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid #2196f3;
  background-color: #ffffff;
  color: #2196f3;
  font-size: 14px;
  font-weight: 500;
`;

export const Method = styled.div`
  background-color: ${(props: IMainStylePorps) =>
    props.Methodfillter.length ? "#1565C0" : "#FFFFFF"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 19px 9px 12px;
  color: ${(props: IMainStylePorps) =>
    props.Methodfillter.length ? "#FFFFFF" : "#323d45;"};
  font-size: 12px;
  width: 103px;
  height: 32px;
  border: 1px solid #939fa5;
  border-radius: 4px;
  margin-right: 8px;
  :hover {
    border: 1px solid #2196f3;
    cursor: pointer;
  }
`;
export const Material = styled.div`
  background-color: ${(props: IMainStylePorps) =>
    props.Materialfillter.length ? "#1565C0" : "#FFFFFF"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 19px 9px 12px;
  color: ${(props: IMainStylePorps) =>
    props.Materialfillter.length ? "#FFFFFF" : "#323d45;"};
  font-size: 12px;
  width: 91px;
  height: 32px;
  border: 1px solid #939fa5;
  border-radius: 4px;
  :hover {
    border: 1px solid #2196f3;
    cursor: pointer;
  }
`;
export const DorpBox = styled.div`
  display: flex;
`;
export const ResetFillrer = styled.div`
  margin-top: 32px;
  margin-left: 24px;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  color: #2196f3;
  :hover {
    cursor: pointer;
  }
`;
export const RefreshImg = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 12px;
`;
