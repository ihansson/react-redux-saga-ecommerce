export interface IProduct {
  id: number;
  name: string;
  price: number;
  material: materialType;
  on_sale: boolean;
}

export type materialType = "metal" | "wooden";

export type filterCallback<T> = (x: T) => T;

export interface IPriceFilter {
  name: "price";
  min: number;
  max: number;
  current: [number, number];
}

export interface IMaterialFilter {
  name: "material";
  options: IMaterialFilterOption[];
  current: string;
}

export interface IMaterialFilterOption {
  name: string;
  value: string;
}

export interface IOnSaleFilter {
  name: "on_sale";
  value: boolean;
}

export type IFilter = IPriceFilter | IMaterialFilter | IOnSaleFilter;
