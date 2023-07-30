import { Link } from "react-router-dom";
import cart from '../assets/shopping-cart.png'
import cartStyles from '../styles/Cart.module.css'
import navStyles from '../styles/Navbar.module.css'



const Navbar = ({ showCart }) => {
    return (
        <div>
<nav className={navStyles}>
            <Link to="/">Home</Link>
            <br></br>
            <Link to="/store">Store</Link>
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