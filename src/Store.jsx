import Navbar from "./components/Navbar";
import Item from "./components/Item";

const Store = () => {

    const data = [
        { name: "table lamp", id: 1, price: 100},
        { name: "night lamp", id: 2, price: 200},
        { name: "salt lamp", id: 3, price: 250}
    ]

    return (
        <div>
            <Navbar />
            <h1>Store</h1>

            {data.map((item) => {
                return <Item key={item.id} id={item.id} name={item.name} price={item.price}/>
            })
            }

        </div>
    )
};

export default Store;