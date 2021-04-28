import React, { useState } from 'react'
import ProductCaisse from '../ProductCaisse/ProductCaisse'
import ProductCart from '../ProductCart/ProductCart'
import "./CartCaisse.css"

function CartCaisse(props) {
    const[Selectedproduct,setSelectedproduct]=useState(null)
    return (
        <div className="scroll-list-cart"  onDragOver={(e)=>props.onDragOver(e)} onDrop={(e)=>{props.onDrop(e);console.log("droped in all caisse")}}>

          { 
        props.cart.map((el,index) => {
             
         return   ( <ProductCart product={el} remove={()=>{props.removeFromCart(index)}}   ></ProductCart>)
                       })

        
            }
           
          
        </div>
    )
}

export default CartCaisse
