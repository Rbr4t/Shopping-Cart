import { Link } from "react-router-dom";
import cart from '../assets/shopping-cart.png'
import cartStyles from '../styles/Cart.module.css'
import navStyles from '../styles/Navbar.module.css'
import lamp from '../assets/light-bulb.png'
import { useEffect, useState } from "react";


const Navbar = ({ showCart, orders }) => {
    const [count, setCount]  = useState(0)

    const showOrderCount = () => {
        
        if(orders===undefined) {
            orders = JSON.parse(localStorage.getItem('orders'))
            console.log(orders)
        }
        setCount(0)
        orders.map((e) => {
            setCount(prev => prev + e.quantity)
        })
    }

    useEffect(() => {
        showOrderCount()
    }, [orders])

    window.addEventListener('storage', () => {
        showOrderCount()
    })
    window.removeEventListener('storage', () => {
        showOrderCount()
    })
    
    return (
        <div>
            <nav className={navStyles}>
            
            <Link to="/"><h3 style={{display: "flex", alignItems: "center"}}>
                <img src={lamp}></img> LightStore
            </h3></Link>
            <div className={navStyles.shop}>
                <Link to="/store"><h3>Store</h3></Link>
                <Link onClick={showCart}>
                    <div className={cartStyles.parent} >
                        <div className={cartStyles.wrapper}>
                            <img className={cartStyles.shopping_cart} alt="shopping cart" src={cart}></img>
                            
                        </div>
                        {count>0 ? <div className={cartStyles.notification}>{count}</div> : null}
                        
                    </div>
                </Link>
            </div>
            
            </nav>
        </div>
        
    )
}

export default Navbar;