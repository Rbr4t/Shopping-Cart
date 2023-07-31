import { useState } from "react";
import Navbar from "./Navbar";
import Checkout from "../Checkout";
import { useNavigate, useParams } from "react-router-dom";
import ItemCss from '../styles/ItemPage.module.css'
import ImageSlider from "./ImageSlider";
import Footer from "./Footer";
import styles from '../styles/Modal.module.css'

const ItemPage = () => {
    const [cart, setCart] = useState(false);  // src/assets/images
    const storeData = [
        
        { "name": "Valentine", "id": 1, "price": 84.50, "img": ["../src/assets/images/pic1.png", "../src/assets/images/pic1_1.png"], "description": "Valentine table lamp, white marble and metal with a green painted finish"},
        { "name": "Mijal", "id": 2, "price": 111.00, "img": ["../src/assets/images/pic2.png", "../src/assets/images/pic2_1.png"], "description": "Mijal ceramic table lamp with a white finish"},
        { "name": "Noara", "id": 3, "price": 95.50, "img": ["../src/assets/images/pic3.png", "../src/assets/images/pic3_1.png"], "description": "Noara magnesium table lamp with a white finish"},
        { "name": "Erna", "id": 4, "price": 44.50, "img": ["../src/assets/images/pic4.png", "../src/assets/images/pic4_1.png"], "description": "Erna bamboo ceiling lampshade with natural, white finish Ø 40 cm"},
        { "name": "Benicarlo", "id": 5, "price": 62.50, "img": ["../src/assets/images/pic5.png", "../src/assets/images/pic5_1.png"], "description": "Benicarlo table lamp in wood with a natural, beige finish"}
    ]
    const params = useParams();
    const data = storeData[params.productId-1]
    const navigate = useNavigate()

    const showCart = () => {        
        setCart(prev => !prev)
    }

    return (
        <main>
            <Navbar showCart={showCart} />
            <div className={`${ItemCss.center} `}>
                <button onClick={() => navigate(-1)} className={`${cart ? 'hidden' : null}`}>←</button>
                <div className={`${cart ? styles.two : styles.one}`} style={{width: '100%'}} >
                    <div className={`${cart ? 'hidden' : null} ${ItemCss.layout}`} disabled={cart}>
                        <div>
                            <ImageSlider slides={data}/>
                        </div>

                        <div style={{padding: '1rem'}}>
                            <h2>{data.name}</h2>
                            <p>{data.description}</p>
                            <p><strong>{data.price} € + VAT</strong></p>

                            <div>
                                <p>Availability: <span style={{color: "green"}}>In stock</span></p>
                            
                            </div>
                        </div>
                    </div>
                    
                    {cart ? <Checkout callBackToParent={() => null} /> : null}
                </div>
                
                

                
            </div>
            <Footer />

        </main>
    )
}

export default ItemPage;