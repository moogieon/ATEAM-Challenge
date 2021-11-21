import {
  Wrapper,
  Header,
  Body,
  Title,
  SubTitle,
  SelectBox,
  Contents,
  ContentsHead,
  Product,
  Status,
  Company,
  Date,
  ContentsBody,
  Colum,
  Colum2,
  Stuff,
  Amount,
  ContentsFooter,
  GoDetail,
  GoChat,
  Method,
  Material,
  DorpBox,
  ResetFillrer,
  RefreshImg,
} from "./mainPage.styles";
import { IMainUIPorps } from "./mainPage.types";
import { DropDown1 } from "../../commons/dropDown-1/dropDown-1";
import { DropDown2 } from "../../commons/dropDown-2/dropDown-2";
export default function MainUI(props: IMainUIPorps) {
  return (
    <>
      <Wrapper>
        <Header>
          <Title>들어온 요청</Title>
          <SubTitle>파트너님에게 딱 맞는 요청서를 찾아보세요.</SubTitle>
          <DorpBox>
            <SelectBox>
              <Method
                onClick={props.onClickMethod}
                Methodfillter={props.Methodfillter}
              >
                {props.Methodfillter.length ? (
                  <text>가공방식({props.Methodfillter.length})</text>
                ) : (
                  <text>가공방식</text>
                )}
                <text>▼</text>
              </Method>
            </SelectBox>
            {props.isMethod && (
              <DropDown1
                onClickMethodList={props.onClickMethodList}
                Methodfillter={props.Methodfillter}
              />
            )}
            <SelectBox>
              <Material
                onClick={props.onClickMaterial}
                Materialfillter={props.Materialfillter}
              >
                {props.Materialfillter.length ? (
                  <text>재료({props.Materialfillter.length})</text>
                ) : (
                  <text>재료</text>
                )}
                <text>▼</text>
              </Material>
              {props.isMaterial && (
                <DropDown2
                  onClickMaterialList={props.onClickMaterialList}
                  Materialfillter={props.Materialfillter}
                />
              )}
            </SelectBox>
            <ResetFillrer onClick={props.onClickRefresh}>
              <RefreshImg src={"images/refresh_24px.png"} />
              필터링 리셋
            </ResetFillrer>
          </DorpBox>
        </Header>
        <Body>
          {props.serverData.map((data) => (
            <Contents key={data.id}>
              <ContentsHead>
                <Colum>
                  <Product>{data.title}</Product>
                  <Status isEdit={data.status}>{data.status}</Status>
                </Colum>
                <Company>{data.client}</Company>
                <Date>{data.due}까지 납기</Date>
              </ContentsHead>
              <ContentsBody>
                <Colum2>
                  <Stuff>도면개수</Stuff> <Amount>{data.count || "0"}개</Amount>
                </Colum2>
                <Colum2>
                  <Stuff> 총 수량 </Stuff> <Amount>{data.amount}개</Amount>
                </Colum2>
                <Colum2>
                  <Stuff>가공방식</Stuff> <Amount>{data.method}</Amount>
                </Colum2>
                <Colum2>
                  <Stuff>재료</Stuff>
                  <Amount>{data.material.join(",")}</Amount>
                </Colum2>
              </ContentsBody>
              <ContentsFooter>
                <GoDetail>요청 내역 보기</GoDetail>
                <GoChat>채팅하기</GoChat>
              </ContentsFooter>
            </Contents>
          ))}
        </Body>
      </Wrapper>
    </>
  );
}
