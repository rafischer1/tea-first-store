import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

export default class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        {
          title: 'applesauce',
          imageUrl:
            'http://2.bp.blogspot.com/-Ugrne9n9cCI/T7GH-TXzJvI/AAAAAAAAAEo/fF6IBrNGaz4/s1600/tea005appleseedcoversquare.jpg',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'selbyville',
          imageUrl:
            'https://farm3.static.flickr.com/2764/4075571980_9e5c60f067_m.jpg',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'dracula songs',
          imageUrl:
            'https://4.bp.blogspot.com/-UZQGQv_KOrs/WgcxeNSYo9I/AAAAAAAAAQQ/7IkJW1ViwfwFArKiGqV1oJ0wkEXcng3MgCLcBGAs/s320/dracIII.jpg',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'releases',
          imageUrl:
            'https://2.bp.blogspot.com/-KCjROUtNROM/T7ExPojqPGI/AAAAAAAAAD0/gKGNFtdXhJE/s640/6896550500_ff10d031cf_o.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'merch',
          imageUrl:
            'https://4.bp.blogspot.com/-fcjJRo_mFFM/Wgd5NIxUZNI/AAAAAAAADB0/3oHOweZOk2watC3LuX5nnOKzN_lT1dffQCLcBGAs/s640/Myrdallsjokul%2BIceland%2B.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className='directory-menu'>
        {sections.map(({ title, id, imageUrl, size }) => {
          return (
            <MenuItem
              key={id}
              title={title}
              size={size}
              imageUrl={imageUrl}
              subtitle='SHOP NOW'
            />
          );
        })}
      </div>
    );
  }
}
