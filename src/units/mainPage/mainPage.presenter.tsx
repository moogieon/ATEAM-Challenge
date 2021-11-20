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
  Company,
  Date,
  ContentsBody,
  Stuff,
  Amount,
  ContentsFooter,
  GoDetail,
  GoChat,
} from "./mainPage.styles";
export default function MainUI() {
  return (
    <>
      <Wrapper>
        <Header>
          <Title>들어온 요청</Title>
          <SubTitle>파트너님에게 딱 맞는 요청서를 찾아보세요.</SubTitle>
          <SelectBox></SelectBox>
        </Header>
        <Body>
          <Contents>
            <ContentsHead>
              <Product>자동차 시제품</Product>
              <Company>A 고객사</Company>
              <Date>2021.12.14까지</Date>
            </ContentsHead>
            <ContentsBody>
              <Stuff>
                도면개수 <Amount>2개</Amount>
              </Stuff>
              <Stuff>
                총 수량 <Amount></Amount>
              </Stuff>
              <Stuff>
                가공방식 <Amount></Amount>
              </Stuff>
              <Stuff>
                재료 <Amount></Amount>
              </Stuff>
            </ContentsBody>
            <ContentsFooter>
              <GoDetail>요청 내역 보기</GoDetail>
              <GoChat>채팅하기</GoChat>
            </ContentsFooter>
          </Contents>
        </Body>
      </Wrapper>
    </>
  );
}
