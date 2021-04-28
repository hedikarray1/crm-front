import React, { useState } from 'react'
import "./CaissePage.css"
import CartCaisse from '../../Components/CartCaisse/CartCaisse'
import AllProductsCaisse from '../../Components/AllProductsCaisse/AllProductsCaisse'
import { Row } from 'react-bootstrap'
import AllUsersListCaisse from '../../Components/AllUsersCardCaisse/AllUsersListCaisse'
import CustomCards from '../../Components/Cards/CustomCards'
function CaissePage() {


    const AllProductsData = [{ title: "hedi", description: " ceci est une description", instock: true, price: 50 }, { title: "hedi1", description: " ceci est une description1", instock: true, price: 501 }];
    const [AllProductsCaisseData, setAllProductsCaisseData] = useState([]);

    let Selectedproduct = null;
    const onDrag = (e, product) => {
        e.dataTransfer.setData("text", e.target.id);
        Selectedproduct = product;
    };
    const onDrop = (ev) => {
        console.log("product droped")
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        //  AllProductsData.push(Selectedproduct);

        setAllProductsCaisseData([...AllProductsCaisseData, Selectedproduct])
        console.log("all products:", AllProductsData);
        console.log("all caisse:", AllProductsCaisseData);
        //  ev.target.appendChild(document.getElementById(data));
    };

    const allowDrop = (ev) => {
        ev.preventDefault();
    }

    const addToCart = (product) => {
        setAllProductsCaisseData([...AllProductsCaisseData, product])
    }

    const removeFromCart = (index) => {
        let products = AllProductsCaisseData;
        products.splice(index, 1);
        setAllProductsCaisseData(products);
        setAllProductsCaisseData([...AllProductsCaisseData])
    }

    return (
        <div className="container-fluid" style={{ display:"flex",flexDirection:"row"}}>
            <div className="col-md-9">

                <Row>
                    <div className="col-md-8 ">
                        <div className="all-products-title-content">
                            <div className="all-products-title">Liste des fake</div>

                        </div>
                        <div className="cart-caisse">
                            <CartCaisse removeFromCart={removeFromCart} cart={AllProductsCaisseData} Selectedproduct={Selectedproduct} onDrag={onDrag} onDragOver={allowDrop} onDrop={onDrop} />
                        </div>
                    </div>
                    <div className="col-md-4 ">
                            <div className="cart-caisse-action">
                            <div className="all-users">

                               <CustomCards>
                               <AllUsersListCaisse></AllUsersListCaisse>
                               </CustomCards>
                            </div>
                        </div>
                        <div className="all-products-title-content">
                            <div className="all-products-title">Liste des produits dans le panier</div>

                        </div>
                        <div className="cart-caisse">
                    <CartCaisse removeFromCart={removeFromCart} cart={AllProductsCaisseData} Selectedproduct={Selectedproduct} onDrag={onDrag} onDragOver={allowDrop} onDrop={onDrop} />

                  
                        </div>

                    </div>

                </Row>
            </div>
            <div className="col-md-3 segment">
                <CustomCards>
                <div className="all-products-title-content">
                    <div className="all-products-title">Liste des produits</div>

                </div>
                <AllProductsCaisse addToCart={addToCart} products={AllProductsData} Selectedproduct={Selectedproduct} onDrag={onDrag} onDragOver={allowDrop} onDrop={onDrop} />
          
                </CustomCards>
                 </div>
        </div>
    )
}

export default CaissePage
