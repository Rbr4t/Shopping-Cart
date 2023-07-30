import { Link } from "react-router-dom";
import cart from '../assets/shopping-cart.png'
import cartStyles from '../styles/Cart.module.css'
import navStyles from '../styles/Navbar.module.css'
import lamp from '../assets/light-bulb.png'


const Navbar = ({ showCart }) => {
    return (
        <div>
<nav className={navStyles}>
            
            <Link to="/"><h3 style={{display: "flex", alignItems: "center"}}>
                <img src={lamp}></img> LightStore
            </h3></Link>
            <br></br>
            <Link to="/store"><h3>Store</h3></Link>
            <br></br>
            <Link onClick={showCart}>
                <div className={cartStyles.parent} >
                    <div className={cartStyles.wrapper}>
                        <img className={cartStyles.shopping_cart} alt="shopping cart" src={cart}></img>
                        
                    </div>
                    <div className={cartStyles.notification}>4</div>
                </div>
                
            </Link>
        </nav>
        </div>
        
    )
}

export default Navbar;