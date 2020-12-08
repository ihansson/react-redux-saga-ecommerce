import React from "react";
import ReactSlider from "react-slider";
import {
  IFilter,
  IMaterialFilter,
  IOnSaleFilter,
  IPriceFilter,
} from "../server/schema";
import { action } from "../store";

export const ProductSearchFilters: React.FunctionComponent<{
  filters: IFilter[];
}> = ({ filters }) => {
  return (
    <div>
      {filters.map((filter) => (
        <div key={filter.name}>
          <h4>{filter.name}</h4>
          {filter.name === "price" ? <PriceFilter filter={filter} /> : null}
          {filter.name === "material" ? (
            <MaterialFilter filter={filter} />
          ) : null}
          {filter.name === "on_sale" ? <OnSaleFilter filter={filter} /> : null}
        </div>
      ))}
    </div>
  );
};

export const PriceFilter: React.FunctionComponent<{ filter: IPriceFilter }> = ({
  filter,
}) => {
  return (
    <div style={{ height: "1em" }}>
      <ReactSlider
        defaultValue={[filter.min, filter.max]}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        pearling
        minDistance={1}
      />
    </div>
  );
};

export const MaterialFilter: React.FunctionComponent<{
  filter: IMaterialFilter;
}> = ({ filter }) => {
  return (
    <div>
      {filter.options.map((option) => (
        <div key={option.name}>
          <input
            type="radio"
            name={filter.name}
            defaultChecked={filter.current === option.value}
            value={option.value}
          />{" "}
          {option.name}
        </div>
      ))}
    </div>
  );
};

export const OnSaleFilter: React.FunctionComponent<{
  filter: IOnSaleFilter;
}> = ({ filter }) => {
  return (
    <div>
      <input
        onChange={(e: any) =>
          action({
            type: "UPDATE_FILTER",
            filterIndex: 2,
            value: e.target.checked,
          })
        }
        type="checkbox"
        name={filter.name}
        defaultChecked={filter.current}
      />
    </div>
  );
};
