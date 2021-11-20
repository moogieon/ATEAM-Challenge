export interface ILayoutHeaderUI {
  categoryList: string | any;
  onClickCategory: (data: string | any) => () => void;
  onClickBasket: () => void;
  onClickTitle: () => void;
}
