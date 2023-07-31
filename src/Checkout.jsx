import { useEffect, useState } from "react";
import './styles/Global.css'
import styles from './styles/Checkout.module.css'
import trash from './assets/trash.png'

const Checkout = ({ callBackToParent }) => {
    const [orders, setOrders] = useState(() => JSON.parse(localStorage.getItem('orders')) || [] )
    const productIcons = {
        "1": "../src/assets/images/pic1_1.avif",
        "2": "../src/assets/images/pic2_1.avif",
        "3": "../src/assets/images/pic3_1.avif",
        "4": "../src/assets/images/pic4_1.avif",
        "5": "../src/assets/images/pic5_1.avif",
     }
    const [totalSum, setTotalSum] = useState(0);

    const removeFromOrder = (id) => {
        const order = orders.filter(v => {
            return v.id !== id
        })
        setOrders(order)
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
        setTotalSum(0)
        orders.map((order) => {
            setTotalSum(prev => prev + order.quantity*order.price)
        })
        callBackToParent(orders)
        window.dispatchEvent(new Event("storage"));
    }, [orders])

    return (
        <div className="cart">
            <h2>Your cart:</h2>

            <div className={styles.cart_section}>
                <table>
                    <thead>
                        <tr>
                            <th colSpan={2}>Product</th>
                            
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.map((order) => {
                            return (
                                <tr key={order.id}>
                                    <td><img src={productIcons[order.id]} height="90" alt="" /></td>
                                    <td>{order.name}</td>
                                    <td>{order.price}€</td>
                                    <td>{order.quantity}</td>
                                    <td>
                                        <div className="checkout">
                                            <button onClick={() => handleOrderChange(order.id, 0)} className="quantity">-</button>
                                            <button onClick={() => handleOrderChange(order.id, 1)} className="quantity">+</button>
                                            <button style={{backgroundColor: "white"}} onClick={() => removeFromOrder(order.id)}>
                                                <img src={trash} height={28}></img>
                                            </button>
                                        </div>
                                        
                                    </td>
                                    
                                </tr>
                                
                        )})}
                    </tbody>

                </table>
                
                <button className="payorder" disabled={totalSum>0? false: true}> <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">Continue {totalSum}€</a></button>

            </div>
            
        </div>
    )
};

export default Checkout;