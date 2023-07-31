import Navbar from "./components/Navbar";
import DisplayItem from "./components/DisplayItem";
import { useEffect, useState } from "react";
import Checkout from "./Checkout";
import './styles/Global.css'
import modal from './styles/Modal.module.css'
import Footer from "./components/Footer";
import styles from './styles/Store.module.css'

import pic1 from './assets/images/pic1.png';
import pic1_1 from './assets/images/pic1_1.png'
import pic2 from './assets/images/pic2.png';
import pic2_1 from './assets/images/pic2_1.png'
import pic3 from './assets/images/pic3.png';
import pic3_1 from './assets/images/pic3_1.png'
import pic4 from './assets/images/pic4.png';
import pic4_1 from './assets/images/pic4_1.png'
import pic5 from './assets/images/pic5.png';
import pic5_1 from './assets/images/pic5_1.png'

const Store = () => {

    const [orders, addOrder] = useState(() => JSON.parse(localStorage.getItem('orders')) || [] )
    const [cart, setCart] = useState(false)
    
    const data = [
        { name: "Valentine", id: 1, price: 84.50, img: [pic1 , pic1_1], description: 'Valentine table lamp, white marble and metal with a green painted finish'},
        { name: "Mijal", id: 2, price: 111.00, img: [pic2, pic2_1], description: 'Mijal ceramic table lamp with a white finish'},
        { name: "Noara", id: 3, price: 95.50, img: [pic3, pic3_1], description: 'Noara magnesium table lamp with a white finish'},
        { name: "Erna", id: 4, price: 44.50, img: [pic4, pic4_1], description: 'Erna bamboo ceiling lampshade with natural, white finish Ø 40 cm'},
        { name: "Benicarlo", id: 5, price: 62.50, img: [pic5, pic5_1], description: 'Benicarlo table lamp in wood with a natural, beige finish'},
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

    const syncOrders = (orders) => {
        addOrder(orders)
    }

    // for saving our order data to localStorage
    useEffect( () => {
        localStorage.setItem('orders', JSON.stringify(orders))
    }, [orders])

    return (
        <main>
            <Navbar showCart={showCart} orders={orders} />
            <div className={`centre ${cart ? modal.two : null}`}>
                <div className={`${styles.nice_grid} ${cart ? 'hidden' : null}`} >
                    <h1>Store</h1>
                    <div disabled={cart}>
                    
                        <div className={styles.map}>
                            {data.map((item) => {
                                return <DisplayItem key={item.id} id={item.id} name={item.name} price={item.price}image={item.img} callbackToParent={manageOrders} />
                            })
                            }
                        </div>                  

                    </div>
                </div>
                
                {cart ? <Checkout callBackToParent={syncOrders} /> : null}
            </div>
            <Footer />
            
        </main>
    )
};

export default Store;