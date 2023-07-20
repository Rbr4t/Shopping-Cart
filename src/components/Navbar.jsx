import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const Navbar = ({ showCart }) => {
    return (
        <div>
            <Link to="/">Home</Link>
            <br></br>
            <Link to="/store">Store</Link>
            <br></br>
            <Link onClick={showCart}>Checkout</Link>
        </div>
    )
}

export default Navbar;