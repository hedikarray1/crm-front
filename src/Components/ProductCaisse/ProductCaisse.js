import React from 'react'
import { Row } from 'react-bootstrap';
import CustomCards from '../Cards/CustomCards'
import "./ProductCaisse.css"
function ProductCaisse(props) {
    let instock=true;
    return (
         <div className="space" draggable={true} onDrag={(e)=>{props.onDrag(e,props.product);}}>
                         <div className="in-stock-container">
               <div className={ props.product.instock? "in-stock" : "not-in-stock"}> oui </div> 
               </div>

                <CustomCards >
              
                       <div className="product-item">
                   
             
                <img src="https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340" className="prod-picture"></img>
                <div className="prod-data" >
              
                    <div className="text-title">{props.product.title} </div>

                    <div className="row-data">
                        <div className="text-labels"> Description: </div>
                        <div className="text-labels-value"> {props.product.description} </div>
                    </div>
                    <div className="row-data">
                        <div className="text-labels"> Prix: </div>
                        <div className="text-labels-value"> {props.product.price} dt </div>
                    </div>
                      <button className="btn-add" onClick={(e)=>props.addToCart(props.product)}>+ panier</button>

                </div>
             
                </div>
            </CustomCards>
       
         </div>
    )
}

export default ProductCaisse
