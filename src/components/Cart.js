import React from 'react';


const Cart = ({ handleClose, show, items }) => {

  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="main-modal">
        {items.map(item =>
           <div className="card" style={{width: "18rem"}}>
              <img src={item.image.url} className="card-img-top" alt="shirt"/>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h6 className="card-title">$ {item.price}</h6>
              </div>
            </div>
        )}
         Total items: {items.length}
        <button className="btn btn-warning ml-2" onClick={handleClose}>close</button>
      </section>
    </div>
  );

};

export default Cart;