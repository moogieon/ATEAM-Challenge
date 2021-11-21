import { useState } from "react";
import { Wrapper, Item, Name, ItemBox } from "./dropDown-1.styles";

interface Iprops {
  onClickMethodList: any;
}
export function DropDown1(props: Iprops) {
  const dataLists = [
    { id: 1, name: "밀랑" },
    { id: 2, name: "선반" },
  ];
  return (
    <>
      <Wrapper>
        {dataLists.map((data) => (
          <ItemBox>
            <Name>
              <Item
                key={data.id}
                type="checkbox"
                id={data.name}
                onChange={props.onClickMethodList(data.name)}
                checked={props.Methodfillter.includes(data.name) ? true : false}
              />
              {data.name}
            </Name>
          </ItemBox>
        ))}
      </Wrapper>
    </>
  );
}
