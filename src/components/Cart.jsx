import { BsCart3 } from "react-icons/bs";
import { useId } from "react";
import { useCart } from "../hook/useCart";

export default function Cart() {
    const cartId = useId();
    const { clearCart, cart, addToCart,subtractToCart } = useCart();


    function CartItem(props) {    
        return(
        <ul className="p-4">
            <li className="mb-4">
                <img
                    className="max-w-full"
                    src={props.image}
                    alt="Product image"
                />
            </li>
            <div className="mb-4">
                <strong>{props.name}</strong>
            </div>
            <footer className="flex justify-between items-center">
                <small>Qty: {props.quantity}</small>
                <button onClick={() => subtractToCart(props)} className="bg-blue-500 text-white px-2 py-1 rounded">-</button>
                <button onClick={() => addToCart(props)} className="bg-blue-500 text-white px-2 py-1 rounded">+</button>
            </footer>
        </ul>
        )
    }

    return (
        <>
            <label htmlFor={cartId} className="cursor-pointer flex items-center gap-1">
                <BsCart3 /> 
                <p>Cart</p>
            </label>
            <input id={cartId} type="checkbox" hidden className="peer" />
            <aside className="fixed top-0 right-0  overflow-scroll w-64 h-full bg-white shadow-lg transform translate-x-full peer-checked:translate-x-0 transition-transform duration-300 ease-in-out z-50"> 
                {cart.map((product) => (
                    <CartItem
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        name={product.title}
                        price={product.price}
                        quantity={product.quantity}
                    />
                ))}
            <button onClick={clearCart}>Vaciar carrito</button>
            </aside>
            <label
                htmlFor={cartId}
                className="fixed inset-0  bg-black black opacity-40 hidden peer-checked:block z-40 cursor-pointer"
            ></label>
        </>
    );
}