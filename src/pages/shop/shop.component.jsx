import React from 'react';
import SHOP_DATA from '../../components/menu-item/shop-data';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    let { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...collectionProps }) => (
          <PreviewCollection key={id} {...collectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
