const Item= ({ name, id, price, description="", image=null }) => {
    return (
        <div>
            <img src={image}></img>
            <h2>{name}</h2>
            <h4>{price}</h4>
            <p>
                {description}
            </p>

            <button onClick={() => console.log(id)}>Add to cart</button>
        </div>
    )
}

export default Item
