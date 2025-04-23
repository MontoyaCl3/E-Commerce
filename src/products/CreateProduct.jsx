import React, { useEffect, useState } from 'react';
import { useCart } from '../hook/useCart';


export default function CreateProduct(props) {
    const {addToCart,removeToCart, cart} = useCart()

    const checkProductInCart = product => {
      return cart.some(item => item.id === props.id)
    }
     
    return(
      
        <section className="w-50  overflow-hidden h-80 border-2 border-gray-200 rounded-lg shadow-md flex flex-col items-center justify-center p-4 m-4 bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out">

            <div className='w-4/5 h-1/2 flex flex-col items-center justify-center'>
              <img src={props.image} className='max-w-25 max-h-30'/>
            </div>
            <footer className="w-full h-2/5 flex flex-col items-center justify-center p-4 gap-2">
              <div className='flex flex-col items-center gap-2'>
                <h1 className='line-clamp-2 overflow-hidden'>{props.name}</h1>
                <p>${props.price}</p>
              </div>
              <div>
                <button onClick={() => {checkProductInCart(props) ? removeToCart(props) :addToCart(props)}} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 ease-in-out"> 
                {checkProductInCart(props) ? 'Remove' : 'Add to Cart'}
                  </button>
              </div>
            </footer>
        </section>
      )
}