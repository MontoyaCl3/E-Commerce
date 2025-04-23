import { Link } from "react-router";
import Cart from "./Cart";
import { AiOutlineUser,AiOutlineShopping,AiOutlineSearch} from "react-icons/ai";

export default function Header(){
    return(
        <>
            <header className="relative flex flex-row items-center justify-between max-w-5xl mx-auto my-[20px]">
                <div className="z-10">
                    <AiOutlineSearch />
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <Link to="/"><img src="/logo.svg" alt="Logo" className="max-w-[150px]" /></Link>
                </div>
                <div className="flex flex-row items-center gap-6 z-10">
                    <Link to="/products" className="flex items-center">
                    <AiOutlineShopping /> Shop
                    </Link>
                    <Link to="/checkout" className="flex items-center">
                    <AiOutlineUser /> Account
                    </Link>
                    <div className="flex items-center">
                    <Cart /> Cart
                    </div>
                </div>
            </header>

            <hr className="max-w-5xl mx-auto border-t-1 border-[#E3E3E3]" />

        </>
    )

}