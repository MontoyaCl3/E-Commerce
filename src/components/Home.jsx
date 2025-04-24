import {AiOutlineShopping} from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router";

export default function Home() {
    return(
        <>
        <section className="max-w-5xl mx-auto h-[400px] flex flex-row items-center relative justify-between">
            <article className="max-w-5xl h-full bg-white m-10 flex flex-col justify-between">
                <h1 className="text-7xl mt-[60px]">Collections</h1>
                <p className="text-xl max-w-[480px]">You can explore and shop many different collection from various brands here.</p>
                <div className="mb-[60px]">
                    <IconContext.Provider className="" value={{ color: "white", className: "global-class-name" }}>
                    <Link to="/products"className="text-2xl flex flex-row max-w-[230px] items-center text-white bg-[#1E2832] p-[20px] justify-center"><AiOutlineShopping />  Shop Now</Link>
                    </IconContext.Provider>
                </div>
            </article>
            <article className="relative inline-block m-10">
            <img className="max-h-[300px] max-w-[300px] m-10 rounded-tl-[100px] rounded-br-[100px]" src="/public/model.jpg"></img>
            <div className="max-h-[300px] max-w-[250px] absolute top-[50px] left-[50px] inset-0 rounded-tl-[100px] rounded-br-[100px] border-2 border-[#B7B7B8] -z-10" />
            </article>
        </section>
        </>
    )
}