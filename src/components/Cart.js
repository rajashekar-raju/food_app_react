import { useDispatch } from "react-redux";
import RestaurantCategoryList from "./RestaurantCategoryList";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { clearCart } from "./redusertoolkit/cartSlice";
import { Link } from "react-router-dom";
const Cart = () => {

    const dispatch = useDispatch();

    const handleRemoveItems = () => {
        dispatch(clearCart());
    }

    const cardItems = useSelector((store)=>store.cart.items);
    return (
       <div className="w-6/12 m-auto">
        <h1 className="font-bold text-2xl text-center">cart</h1>
        <button className="px-4 py-2 border-none bg-green-950 text-white font-bold rounded-lg ml-40"
            onClick={handleRemoveItems}
        >
            Clear Cart
        </button>
        <Link to={"/restaurant/:restaurantId"}><button>Back to Cart</button></Link>
        <div>
            <RestaurantCategoryList lists={cardItems}/>
        </div>
       </div>
    )
}
export default Cart;