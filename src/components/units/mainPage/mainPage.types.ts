import { ChangeEventHandler, InputHTMLAttributes } from "react";

export interface IMainUIPorps {
  serverData: any;
  isMethod: boolean;
  isMaterial: boolean;
  onClickMethod: () => void;
  onClickMaterial: () => void;
  onClickMaterialList: ChangeEventHandler<HTMLInputElement>;
  onClickMethodList: ChangeEventHandler<HTMLInputElement>;
}
export interface IMainStylePorps {
  isEdit: string;
  edit: "대기중" | "상담중";
  Methodfillter: [];
  Materialfillter: [];
}
