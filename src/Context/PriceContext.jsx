import React, { Children, createContext, useState } from "react";

const priceContext = createContext(null);

const PriceContextPage = ({ children }) => {
  const [price, setprice] = useState();

  const val = {
    price,
    setprice,
  };
  return (
    <>
      <priceContext.Provider value={val}>{Children}</priceContext.Provider>
    </>
  );
};

export default PriceContextPage;
