import React, { useState } from "react";
import Home from "./Home.jsx";
import OrderForm from "./OrderForm.jsx";
import Success from "./Success.jsx";

export default function App() {
  const [page, setPage] = useState("home");
  const [order, setOrder] = useState(null); // form verisi burada tutulacak

  return (
    <>
      {page === "home" && <Home onStart={() => setPage("form")} />}

      {page === "form" && (
        <OrderForm
          onBack={() => setPage("home")}
          onSuccess={(createdOrder) => {
            setOrder(createdOrder);
            setPage("success");
          }}
        />
      )}

      {page === "success" && (
        <Success
          order={order}
          onRestart={() => {
            setOrder(null);
            setPage("home");
          }}
        />
      )}
    </>
  );
}

