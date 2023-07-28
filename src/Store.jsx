import Navbar from "./components/Navbar";
import DisplayItem from "./components/DisplayItem";
import { useEffect, useState } from "react";
import Checkout from "./Checkout";
import './styles/Store.css'

const Store = () => {

    const [orders, addOrder] = useState(() => JSON.parse(localStorage.getItem('orders')) || [] )
    const [cart, setCart] = useState(false)
    
    const data = [
        { name: "Valentine", id: 1, price: 84.50, img: ['./src/assets/pic1.avif', './src/assets/pic1_1.avif'], description: 'Valentine table lamp, white marble and metal with a green painted finish'},
        { name: "Mijal", id: 2, price: 111.00, img: ['./src/assets/pic2.avif', './src/assets/pic2_1.avif'], description: 'Mijal ceramic table lamp with a white finish'},
        { name: "Noara", id: 3, price: 95.50, img: ['./src/assets/pic3.avif', './src/assets/pic3_1.avif'], description: 'Noara magnesium table lamp with a white finish'},
        { name: "Erna", id: 4, price: 44.50, img: ['./src/assets/pic4.avif', './src/assets/pic4_1.avif'], description: 'Erna bamboo ceiling lampshade with natural, white finish Ø 40 cm'},
        { name: "Benicarlo", id: 5, price: 62.50, img: ['./src/assets/pic5.avif', './src/assets/pic5_1.avif'], description: 'Benicarlo table lamp in wood with a natural, beige finish'},
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
                        return <DisplayItem key={item.id} id={item.id} name={item.name} price={item.price}image={item.img} callbackToParent={manageOrders} />
                    })
                    }

            </div>
            {cart ? <Checkout /> : null}
            
        </div>
    )
};

export default Store;