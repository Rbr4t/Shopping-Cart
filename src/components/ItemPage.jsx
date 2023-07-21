import { useState } from "react";
import Navbar from "./Navbar";
import Checkout from "../Checkout";
import { useParams } from "react-router-dom";

const ItemPage = () => {
    const [quantity, setQuantity] = useState(1)
    const [cart, setCart] = useState(false)
    const storeData = [
        
        { "name": "Valentine", "id": 1, "price": 84.50, "img": ["../src/assets/pic1.avif", "../src/assets/pic1_1.avif"], "description": "Valentine table lamp, white marble and metal with a green painted finish"},
        { "name": "Mijal", "id": 2, "price": 111.00, "img": ["../src/assets/pic2.avif", "../src/assets/pic2_1.avif"], "description": "Mijal ceramic table lamp with a white finish"},
        { "name": "Noara", "id": 3, "price": 95.50, "img": ["../src/assets/pic3.avif", "../src/assets/pic3_1.avif"], "description": "Noara magnesium table lamp with a white finish"},
        { "name": "Erna", "id": 4, "price": 44.50, "img": ["../src/assets/pic4.avif", "../src/assets/pic4_1.avif"], "description": "Erna bamboo ceiling lampshade with natural, white finish Ø 40 cm"},
        { "name": "Benicarlo", "id": 5, "price": 62.50, "img": ["../src/assets/pic5.avif", "../src/assets/pic5_1.avif"], "description": "Benicarlo table lamp in wood with a natural, beige finish"}
    ]
    const params = useParams();
    const data = storeData[params.productId-1]

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