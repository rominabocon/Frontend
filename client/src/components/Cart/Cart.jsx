import React from 'react';
import style from "./Cart.module.css";
//To add context below here

// It is much better to add events listeners to keep a clean code
// Take into consideration the stock when increasing or decreasing amount

function Cart(){
  // Provisional
  const itemsCart = ["Clothe", "Clothe", "Clothe", "Clothe"];

  return(
    <div className="containerCart">
      {
        itemsCart.map(item => {
          return(
            <div className="itemContainer">
              <div className='imgContainer'>
                <img src="" alt="iconOff" />
                <img src="" alt="product" />
              </div>

              <div className="infoContainer">
                <h3>Name Product</h3>
                <p>Product Price</p>

                <div className="itemButtons">
                  <div className="counterContainer">
                    <button>-</button>
                    <p>2</p>
                    <button>+</button>
                  </div>

                  <div className="containerButtons">
                    <div className="containerDiscount">
                      <input type="text" placeholder="Discount Code"/>
                      <input type="submit" value="Apply" />
                    </div>
                    <button className="removeButton">
                      <img src="" alt="" />
                      <p>Remove</p>
                    </button>
                  </div>

                </div>
              </div>
            </div>
          )
        })
      }

      <div className="purchaseContainer">
        <p>Total due <span className="totalPrice">900</span></p>
        <button className="buyButton" onClick={console.log("working")}>Buy</button>
      </div>
    </div>
  )
}

export default Cart;