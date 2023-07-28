import { useState } from "react";
import { Link } from "react-router-dom";


const Item= ({ name, id, price, description="", image=null, callbackToParent }) => {

    const [quantity, setQuantity] = useState(1)

    const handleClick = () => {
        callbackToParent({id, name, price, quantity});
    }
    const handleClickItem = (data) => {
        console.log(data)
    }

    return (
        <div>
            <Link to={`../product/${id}`}><img src={image? image[1]: null} height={200} alt=""></img></Link>
            <h2>{name}</h2>
            <h4>{price}€</h4>
            <p>{description}</p>
            <div>
                <p>Quantity: {quantity}</p>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
                <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}>-</button>
            </div>
            

            <button onClick={handleClick}>Add to cart</button>
        </div>
    )
}

export default Item
