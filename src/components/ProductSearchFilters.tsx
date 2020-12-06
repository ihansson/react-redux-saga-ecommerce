import React from "react";
import { IFilter } from "../data/schema";

export const ProductSearchFilters: React.FunctionComponent<{
  filters: IFilter[];
}> = ({ filters }) => {
  return (
    <div>
      {filters.map((filter) => (
        <div key={filter.name}>
          <h4>{filter.name}</h4>
          {filter.name === "price" ? <Slider /> : null}
          {filter.name === "material" ? <RadioList /> : null}
          {filter.name === "on_sale" ? <Checkbox /> : null}
        </div>
      ))}
    </div>
  );
};

export const Slider = () => {
  return <div>Slider</div>;
};

export const RadioList = () => {
  return <div>RadioList</div>;
};

export const Checkbox = () => {
  return <div>Checkbox</div>;
};
