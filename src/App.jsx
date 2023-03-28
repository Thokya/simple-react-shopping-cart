import React from "react";

import axios from "./apis/getProduct";
import useFetchHook from "./hooks/useFetchHooks";
import Cards from "./components/Cards";
import { ShoppingCartProvider } from "./context/shoppingCartContext";

function App() {
  const [response, error, loading] = useFetchHook({
    axiosInstance: axios,
    method: "POST",
    url: "/",
  });

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && response && (
        <ShoppingCartProvider>
          <Cards props={response} />
        </ShoppingCartProvider>
      )}
    </>
  );
}

export default App;
