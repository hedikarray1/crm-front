import React from 'react'
import ProductCaisse from '../ProductCaisse/ProductCaisse'
import "./AllProductsCaisse.css"
function AllProductsCaisse(props) {
   let Selectedproduct=null;

    return (
        <div className="scroll-list"   onDragOver={(e)=>{ props.onDragOver(e)}} onDrop={(e)=>{props.onDrop(e);console.log("droped in all products")}}>
            {
        props.products.map((el) => {
          return(   <ProductCaisse product={el} addToCart={(product)=>{ props.addToCart(product)}} draggable={true} onDrag={(e,product)=>{props.onDrag(e,product);}} ></ProductCaisse>)
                       })
                    }
                    </div>
    )
}

export default AllProductsCaisse
