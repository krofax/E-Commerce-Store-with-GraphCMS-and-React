import React, { Component } from 'react';
import { Query } from 'react-apollo';
import PRODUCTS_QUERY from './all-products/index';
import Product from './Product';
import Cart from './Cart';
import Navbar from './Navbar';

class Products extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cartitems: []
    };
    this.addItem = this.addItem.bind(this);
  }

    addItem(item){
      this.setState({
          cartitems : this.state.cartitems.concat([item])
      });
    }

    showModal = () => {
      this.setState({ show: true });
    };

    hideModal = () => {
      this.setState({ show: false });
    };

  render() {

    return (
          <Query query={PRODUCTS_QUERY}>
           {({ loading, error, data }) => {

              if (loading) return <div>Fetching</div>
              if (error)   return <div>Error</div>

              const items = data.productses
              const itemssent = this.state.cartitems;
              console.log('items', items)

              return (
                <div>
                 <Navbar cart={itemssent} show={this.showModal} />
                 <Cart show={this.state.show} items={itemssent} handleClose={this.hideModal}>
                  </Cart>
                  <div className="container mt-4">
                    <div className="row">
                       {items.map(item => <Product key={item.id} product={item} addItem={this.addItem} />)}
                    </div>
                  </div>
                </div>
              )
            }}
          </Query>
      )
   };
};

export default Products;