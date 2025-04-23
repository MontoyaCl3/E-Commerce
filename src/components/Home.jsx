import {AiOutlineShopping} from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router";

export default function Home() {
    return(
        <>
        <section className="max-w-5xl mx-auto bg-amber-400 h-[400px] flex flex-row items-center relative justify-between">
            <article className="max-w-5xl bg-white m-10">
                <h1 className="text-5xl my-[30px]">Collections</h1>
                <p className="text-xl">you can explore ans shop many differnt collection</p>
                <p className="text-xl">from various barands here.</p>
                <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                <Link to="/products"className="flex flex-row items-center text-white bg-[#1E2832]"><AiOutlineShopping />shop now</Link>
                </IconContext.Provider>
            </article>
            <img className="max-lg:h-[300px] max-w-[300px] m-10" src="/public/model.jpg"></img>
        </section>
        </>
    )
}