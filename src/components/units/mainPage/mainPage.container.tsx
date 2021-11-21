import axios from "axios";
import { useEffect, useState } from "react";
import MainUI from "./mainPage.presenter";

export default function Main() {
  // Mok Data
  const [serverData, setServerData] = useState([] as any);
  // 가공 방식 체크박스
  const [Methodfillter, setMethodfillter] = useState([]);
  const [isMethod, setIsMethod] = useState(false);
  // 재료 체크박스
  const [Materialfillter, setMaterialfillter] = useState([]);
  const [isMaterial, setIsMaterial] = useState(false);
  useEffect(() => {
    async function geData() {
      const result = await axios.get("http://localhost:4000/requests");
      setServerData(result.data);
    }
    geData();
  }, []);
  const onClickMethod = () => {
    setIsMethod((prev) => !prev);
    setIsMaterial(false);
  };
  const onClickMaterial = () => {
    setIsMaterial((prev) => !prev);
    setIsMethod(false);
  };

  //! 가공 방식 체크박스
  const onClickMethodList = (name) => (event) => {
    if (event.currentTarget.checked) {
      setMethodfillter([...Methodfillter, name]);
      console.log("체크 반영 완료");
    } else {
      setMethodfillter(Methodfillter.filter((el) => el !== name));
      console.log("체크 해제 반영 완료");
    }
  };

  //! 재료 체크박스
  const onClickMaterialList = (name) => (event) => {
    if (event.currentTarget.checked) {
      setMaterialfillter([...Materialfillter, name]);
      console.log("체크 반영 완료");
    } else {
      setMaterialfillter(Materialfillter.filter((el) => el !== name));
      console.log("체크 해제 반영 완료");
    }
  };
  const onClickRefresh = () => {
    setMaterialfillter([]);
    setMethodfillter([]);
  };

  console.log(Methodfillter);

  return (
    <MainUI
      serverData={serverData}
      isMethod={isMethod}
      isMaterial={isMaterial}
      onClickMethod={onClickMethod}
      onClickMaterial={onClickMaterial}
      onClickMethodList={onClickMethodList}
      Methodfillter={Methodfillter}
      onClickMaterialList={onClickMaterialList}
      Materialfillter={Materialfillter}
      onClickRefresh={onClickRefresh}
    />
  );
}
