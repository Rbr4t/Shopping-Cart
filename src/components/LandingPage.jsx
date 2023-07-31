import Navbar from "./Navbar";
import Checkout from "../Checkout";
import { useState } from "react";
import styles from '../styles/Modal.module.css'
import '../styles/Global.css'
import Footer from './Footer'

const Landingpage = () => {

  const [cart, setCart] = useState(false)

  const showCart = () => {
    setCart(prev => !prev)
  }

  return (
    <main>
      <Navbar showCart={showCart} />
      <div className={`bg centre ${cart ? styles.two : styles.one}`}>
        <div className="info">
          <h1>High quality table lamps</h1>
          <button>Learn more</button>
        </div>
        {cart ? <Checkout callBackToParent={() => null}/> : null}

      </div>
      <Footer />
    </main>
  )
}

export default Landingpage;
