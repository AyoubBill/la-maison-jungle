import Banner from "./Banner"
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import "../styles/Layout.css"

function App() {
  
  const localData = localStorage.getItem("cart")
  const [cart, updateCart] = useState(localData ? JSON.parse(localData) : [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  return (
    <div>
      <Banner />
      <div className="imj-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
