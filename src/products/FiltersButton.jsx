import { FiltersContext } from "../context/filters";
import { useState, useContext, useId} from 'react';

export default function Filters(){
    const {filters, setFilters} = useContext(FiltersContext);
    const minPriceId = useId();
    const categoryId = useId();

    const handleChangeMinPrice = (event) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            minPrice: event.target.value,
        }));
    }

    const handleChangeCategory = (event) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            category: event.target.value,
        }));
    }
    
    return(
        <section className="flex flex-row gap-4">
            <div>
                <label htmlFor={minPriceId}>Min. Price  </label>
                <input type="range" id={minPriceId} min="0" max="1000" onChange={handleChangeMinPrice} value={filters.minPrice}/>
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryId}>Category  </label>
                <select id={categoryId} onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="men's clothing">Men's clothing</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="electronics">Electronics</option>
                    <option value="women's clothing">Women's clothing</option>
                </select>
            </div>
        </section>
    )
}