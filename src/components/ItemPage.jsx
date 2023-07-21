import { useState } from "react";
import Navbar from "./Navbar";
import Checkout from "../Checkout";

const ItemPage = ({ data }) => {
    const [quantity, setQuantity] = useState(1)
    const [cart, setCart] = useState(false)

    const showCart = () => {        
        setCart(prev => !prev)
    }

    return (
        <div>
            <Navbar showCart={showCart} />
            <div disabled={cart}>
                <button>←</button>
                <img src={data.img[0]} alt={`${data.name} main`} height={250}></img>
                <img src={data.img[1]} alt={`${data.name} main`} height={250}></img>

                <h2>{data.name}</h2>
                <p>{data.description}</p>
                <p><strong>{data.price} € + VAT</strong></p>

                <div>
                    <p>Availability: <span style={{color: "green"}}>In stock</span></p>
                    <div>
                        <p>Quantity: {quantity}</p>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}>-</button>
                    </div>
                    <button>Buy now!</button>
                </div>
            </div>
            {cart ? <Checkout /> : null}
            

        </div>
    )
}

export default ItemPage;