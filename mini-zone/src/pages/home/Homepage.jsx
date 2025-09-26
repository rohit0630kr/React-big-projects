import { useLoaderData } from "react-router";
import Menu from "../../features/menu/Menu";
import Products from "../../features/product/Products";
import { useDispatch, useSelector } from "react-redux";

import {
  registerAvailableProducts,
  registerProducts,
} from "../../store/productSlice";
import { useEffect } from "react";

function Homepage() {
  const data = useLoaderData();
  const dispatch = useDispatch();

  const { categories, products } = useSelector(
    (store) => store.products.registered
  );

  console.log(categories, products);

  useEffect(
    function () {
      dispatch(registerProducts(data));
      dispatch(registerAvailableProducts(data));
    },
    [data]
  );

  return (
    <div>
      <Menu />
      <Products categories={categories} products={products} />
    </div>
  );
}

async function loader() {
  const res = await fetch("http://localhost:3000/products");
  const data = await res.json();
  return data;
}

export { loader };

export default Homepage;
