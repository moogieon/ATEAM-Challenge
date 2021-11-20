import { Menu, Dropdown, Space } from "antd";
import { ILayoutHeaderUI } from "./layoutHeader.types";
import {
  Wrapper,
  HeaderWrapper,
  HeaderLeftWrapper,
  HeaderRightWrapper,
  Title,
  TitleImg,
  FactoryIcon,
  Factoryitle,
  Logout,
} from "./layoutHeader.styles";

export default function LayoutHeaderUI(props: ILayoutHeaderUI): JSX.Element {
  // const categoryList = (
  //   <Menu>
  //     <Menu.Item></Menu.Item>
  //   </Menu>
  // );

  return (
    <>
      <Wrapper>
        <HeaderWrapper>
          <HeaderLeftWrapper>
            <Title>
              <TitleImg
                src={"images/자산 1@3x 3.png"}
                onClick={props.onClickTitle}
              />
            </Title>
          </HeaderLeftWrapper>
          <HeaderRightWrapper>
            <FactoryIcon src={"images/Vector(1).png"} />
            <Factoryitle>A 가공 업체</Factoryitle>
            <Logout>로그아웃</Logout>
          </HeaderRightWrapper>
        </HeaderWrapper>
      </Wrapper>
    </>
  );
}
