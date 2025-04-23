import CreateProduct from '../products/CreateProduct';
import { useState, useEffect, useContext } from 'react';
import Filters from '../products/FiltersButton'; 
import { FiltersContext } from '../context/filters'; 


export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const {filters,  } = useContext(FiltersContext);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching products:', error));
    },[]);

    const filtersProducts = (products) => {
        return products.filter(product => {
            return(
                product.price >= filters.minPrice &&
                (filters.category === 'all' || product.category === filters.category)
            )
        })
       
    };

    const filteredProducts = filtersProducts(products);

    return(
        <>
            <section className="flex flex-col, w-screen , flex-wrap , justify-center , items-center , bg-gray-100">
            <Filters/>
            <div className='flex flex-row flex-wrap justify-center items-center w-full'>
                {filteredProducts.map((product) => (
                    <CreateProduct
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        name={product.title}
                        price={product.price}
                    />
                ))}
            </div>
                </section>
        </>
    )
}