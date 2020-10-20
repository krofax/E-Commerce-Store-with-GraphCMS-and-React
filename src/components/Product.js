import React from 'react';

const Product = ({product, addItem}) => {
  return (
      <div className="col-sm-4">
          <div className="card" style={{width: "18rem"}}>
            <img src={product.image.url} className="card-img-top" alt="shirt"/>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-title">$ {product.price}</p>
              <p className="card-title">{product.description}</p>
              <button className="btn btn-primary" onClick={() => addItem(product)}>Buy now</button>
            </div>
          </div>
      </div>
  );
}
export default Product;