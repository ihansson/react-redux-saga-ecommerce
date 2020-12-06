import React from "react";
import { useGetProducts } from "./data/hooks";
import { IProduct } from "./data/schema";

function App() {
  return (
    <div className="App">
      <ProductSearch />
    </div>
  );
}

export const NoResults = () => <div>No Results Found.</div>;

export const Loading = () => <div>Loading</div>;

export const ProductSearch = () => {
  const [loading, products] = useGetProducts();

  return (
    <div>
      <aside>
        <ProductFilters />
      </aside>
      <main>
        {loading ? <Loading /> : <ProductSearchResults products={products} />}
      </main>
    </div>
  );
};

export const ProductSearchResults: React.FunctionComponent<{
  products: IProduct[];
}> = ({ products }) => {
  if (products.length === 0) return <NoResults />;
  return (
    <section>
      {products.map((product) => (
        <div key={product.id}>
          <h2>
            {product.name} (SKU: {product.id})
          </h2>
          <div>
            <h3>{product.price}</h3>
            <strong>Material: </strong> {product.material}
            <br />
            <strong>On Sale: </strong> {product.on_sale ? "Yes" : "No"}
          </div>
          <button>Buy</button>
        </div>
      ))}
    </section>
  );
};

export const ProductFilters = () => {
  return <div>Filters</div>;
};

export default App;
