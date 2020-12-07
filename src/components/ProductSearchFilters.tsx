import React from "react";
import ReactSlider from "react-slider";
import {
  IFilter,
  IMaterialFilter,
  IOnSaleFilter,
  IPriceFilter,
} from "../server/schema";
import { store, action } from "../saga";

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
  // Async dispatch here, do stuff like cancel requests if we get multiple
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
  const state = store.getState();
  return (
    <div>
      State: {state}
      <br />
      <input
        onChange={() => action("INCREMENT_ASYNC")}
        type="checkbox"
        name={filter.name}
        defaultChecked={filter.current}
      />
    </div>
  );
};
