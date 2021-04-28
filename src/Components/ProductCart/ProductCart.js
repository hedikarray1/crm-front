import React from 'react'
import "./ProductCart.css"
function ProductCart(props) {
    return (
        <div className="space"  >



            <div className="product-item-cart">

                <div className="quantity">
                    5
            </div>

                <div className="prod-data">
                    <div className="text-title"> {props.product.title}</div>
                    <div className="row-data">
                    <div>Prix:</div>
                    <div>{props.product.price}</div>
                   
                    </div>
                    <div className="row-data">
                    <div>Total:</div>
                    <div>{props.product.price*5}</div>
                   
                    </div>

                </div>
                <div className="cancel" onClick={(e)=>{props.remove()}} >
                X
                </div>





            </div>

        </div>
    )
}

export default ProductCart
