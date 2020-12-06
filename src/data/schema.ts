export interface IProduct {
  id: number;
  name: string;
  price: number;
  material: materialType;
  on_sale: boolean;
}

export type materialType = "metal" | "wooden";

export type filterCallback<T> = (x: T) => T;
