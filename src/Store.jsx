import Navbar from "./components/Navbar";
import Item from "./components/Item";
import { useEffect, useState } from "react";

const Store = () => {

    const [orders, addOrder] = useState(() => JSON.parse(localStorage.getItem('orders')) || [] )

    const data = [
        { name: "table lamp", id: 1, price: 100},
        { name: "night lamp", id: 2, price: 200},
        { name: "salt lamp", id: 3, price: 250},
        { name: "green lamp", id: 4, price: 150},
    ]

    const manageOrders = (data) => {
        if(orders.map(obj => Object.values(obj).includes(data.name)).some((v) => v===true)) {
            orders.map((v) => {
                if(v.id === data.id) {
                    v.quantity += data.quantity
                    addOrder([...orders])
                }
            });
        } else {
            addOrder([...orders, data])
        }
    }

    // for saving our order data to localStorage
    useEffect( () => {
        localStorage.setItem('orders', JSON.stringify(orders))
    }, [orders])

    return (
        <div>
            <Navbar />
            <h1>Store</h1>

            {data.map((item) => {
                return <Item key={item.id} id={item.id} name={item.name} price={item.price} callbackToParent={manageOrders} />
            })
            }

        </div>
    )
};

export default Store;