import { useState } from "react";

const Item= ({ name, id, price, description="", image=null, callbackToParent }) => {

    const [quantity, setQuantity] = useState(1)

    const handleClick = () => {
        callbackToParent({id, name, price, quantity});
    }

    return (
        <div>
            <img src={image} alt=""></img>
            <h2>{name}</h2>
            <h4>{price}</h4>
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
