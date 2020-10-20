import React, { useState } from "react";
import { useQuery } from "react-apollo-hooks";
import PRODUCTS_QUERY from "./all-products/index";
import Product from "./Product";
import Cart from "./Cart";
import Navbar from "./Navbar";
const Allproducts = () => {
  const [cartItems, setCartItems] = useState([]);
  const [modal, setModal] = useState(false);

  const addItem = item => {
    setCartItems([...cartItems, item]);
  };
  const { data, error, loading } = useQuery(PRODUCTS_QUERY);
  try {
      if (loading) {
        return <div>Loading...</div>;
      }
      return (
        <div>
          <Navbar cart={cartItems} show={() => setModal(true)} />
          <Cart
            show={modal}
            items={cartItems}
            handleClose={() => setModal(false)}
          ></Cart>
          <div className="row">
            {data.productses.map((item) => (
              <Product key={item.id} product={item} addItem={addItem} />
            ))}
          </div>
        </div>
      );
  } catch (error) {
      if (error) {
        return <div>Error! </div>;
      }
  }


};
export default Allproducts;
