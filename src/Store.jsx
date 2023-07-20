import Navbar from "./components/Navbar";
import Item from "./components/Item";
import { useEffect, useState } from "react";
import Checkout from "./Checkout";
import './styles/Store.css'

const Store = () => {

    const [orders, addOrder] = useState(() => JSON.parse(localStorage.getItem('orders')) || [] )
    const [cart, setCart] = useState(false)
    
    const data = [
        { name: "table lamp", id: 1, price: 100},
        { name: "night lamp", id: 2, price: 200},
        { name: "salt lamp", id: 3, price: 250},
        { name: "green lamp", id: 4, price: 150},
    ]

    const showCart = () => {
        setCart(prev => !prev)
    }

    const manageOrders = async (data) => {
        const changeCart = (data) => new Promise(resolve => {addOrder(data); resolve(data)})
        // weird way of eliminating error, which occurred when you "trashed an order" 
        // and then immediately placed the same order again ->
        // resulted in the previous order + last order combined
        changeCart(JSON.parse(localStorage.getItem('orders')))
          .then(res => {
            const condition = res.findIndex(
                (order) => order.id === data.id
            );
            
            let newOrdersArr;
            if(condition !== -1) {
                newOrdersArr = [];
                res.forEach(element => {
                    if(element.id === data.id ) {
                        const newElement = {...element}
                        newElement.quantity = data.quantity+newElement.quantity
                        newOrdersArr.push(newElement)
                    } else {
                        newOrdersArr.push(element)
                    }
                });
                addOrder(newOrdersArr)
            } else {
                addOrder(prev => [...prev ,data])
            }  
          })
        
        
    }

    // for saving our order data to localStorage
    useEffect( () => {
        localStorage.setItem('orders', JSON.stringify(orders))
    }, [orders])

    return (
        <div >
            <Navbar showCart={showCart} />
            <div disabled={cart}>
                <h1>Store</h1>

                    {data.map((item) => {
                        return <Item key={item.id} id={item.id} name={item.name} price={item.price} callbackToParent={manageOrders} />
                    })
                    }

            </div>
            {cart ? <Checkout /> : null}
            
        </div>
    )
};

export default Store;