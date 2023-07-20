import Navbar from "./components/Navbar";
import Checkout from "./Checkout";
import { useState } from "react";

const Landingpage = () => {

  const [cart, setCart] = useState(false)

  const showCart = () => {
    setCart(prev => !prev)
  }

  return (
    <div>
      <Navbar showCart={showCart} />
      <div>
        <h1>High quality table lamps</h1>
        <button>Learn more</button>
      </div>
      {cart ? <Checkout /> : null}
    </div>
  )
}

export default Landingpage;
