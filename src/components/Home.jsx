import {AiOutlineShopping} from "react-icons/ai";
import { IconContext } from "react-icons";

export default function Home() {
    return(
        <>
        <section className="max-w-5xl mx-auto bg-amber-400 h-[400px] flex flex-col items-center justify-center relative">
            <article className="max-w-5xl bg-white">
                <h1 className="text-5xl my-[30px]">Collections</h1>
                <p className="text-xl">you can explore ans shop many differnt collection</p>
                <p className="text-xl">from various barands here.</p>
                <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                <button className="flex flex-row items-center text-white bg-[#1E2832]"><AiOutlineShopping />shop now</button>
                </IconContext.Provider>
            </article>
            <image></image>
        </section>
        </>
    )
}