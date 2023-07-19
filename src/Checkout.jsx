import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

const Checkout = () => {
    const [orders, setOrders] = useState(() => JSON.parse(localStorage.getItem('orders')) || [] )

    const [totalSum, setTotalSum] = useState(0);

    useEffect(() => {
        setTotalSum(0)
        orders.map((order) => {
            setTotalSum(prev => prev + order.quantity*order.price)
        })
        
    }, [orders])

    const removeFromOrder = (id) => {
        setOrders(orders.filter(v => {
            return v.id !== id
        }))
    }

    const handleOrderChange = (id, operation) => {
        let newOrder;
        if(operation===0) {
            newOrder = orders.map((order) => {
                if(order.id!==id) return order
                if(order.quantity===1) {
                    return 
                }
                return {
                    id: order.id,
                    name: order.name,
                    price: order.price,
                    quantity: order.quantity-1
                }
            })
            newOrder = newOrder.filter(e => e!==undefined)

        } else if(operation===1) {
            newOrder = orders.map((order) => {
                if(order.id!==id) return order
                return {
                    id: order.id,
                    name: order.name,
                    price: order.price,
                    quantity: order.quantity+1
                }
            })
        }
        setOrders(newOrder)
    }

    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders))
    }, [orders])

    return (
        <div>
            <Navbar />
            <h2>Checkout</h2>
            <table>
                
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
                <tbody>
                    {orders.map((order) => {
                        return (
                            <tr key={order.id}>
                                <td>{order.name}</td>
                                <td>{order.price}</td>
                                <td>{order.quantity}</td>
                                <td>
                                    <button onClick={() => handleOrderChange(order.id, 0)}>-</button>
                                    <button onClick={() => handleOrderChange(order.id, 1)}>+</button>
                                    <button onClick={() => removeFromOrder(order.id)}>trash</button>
                                </td>
                                
                            </tr>
                    )})}
                </tbody>

            </table>
            
            <h4>Total: {totalSum}€</h4>

        </div>
    )
};

export default Checkout;