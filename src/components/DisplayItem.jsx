import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Global.css'
import styles from '../styles/DisplayItem.module.css'


const Item= ({ name, id, price, description="", image=null, callbackToParent }) => {

    const [quantity, setQuantity] = useState(1)

    const handleClick = () => {
        callbackToParent({id, name, price, quantity});
    }

    return (
        <div className={styles.main}>
            <div className={styles.first}>
                <Link to={`../product/${id}`}><img src={image? image[1]: null} height={200} alt=""></img></Link>
                <div className={styles.first_inside}>
                    <h2>{name}</h2>
                    <h4>{price}€</h4>
                </div>
                

            </div>
            <div className={styles.add}>
                
                <p>Quantity: {quantity}</p>

                <div className={styles.second}>
                    <button className="quantity" onClick={() => setQuantity(quantity + 1)}>+</button>
                    <button className="quantity" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}>-</button>
                    <button onClick={handleClick}>Add to cart</button>

                </div>
            

            </div>
            
        </div>
    )
}

export default Item
