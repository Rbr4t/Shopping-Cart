import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <br></br>
            <Link to="/store">Store</Link>
            <br></br>
            <Link to="/checkout">Checkout</Link>
        </div>
    )
}

export default Navbar;