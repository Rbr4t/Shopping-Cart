import Navbar from "./Navbar";
import Checkout from "../Checkout";
import { useState } from "react";
import styles from '../styles/LandingPage.module.css'
import '../styles/LandingPage.css'

const Landingpage = () => {

  const [cart, setCart] = useState(false)

  const showCart = () => {
    setCart(prev => !prev)
  }

  return (
    <div>
      <Navbar showCart={showCart} />
      <div className={`centre ${cart ? styles.two : styles.one}`}>
        <div>
          <h1>High quality table lamps</h1>
          <button>Learn more</button>
        </div>
        {cart ? <Checkout /> : null}

      </div>
    </div>
  )
}

export default Landingpage;
