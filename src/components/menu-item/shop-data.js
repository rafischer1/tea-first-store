const SHOP_DATA = [
  {
    id: 1,
    title: 'Applesauce',
    routeName: 'applesauce',
    items: [
      {
        id: 1,
        name: 'Peregrine 7"',
        imageUrl: 'https://f4.bcbits.com/img/a2942409710_2.jpg',
        price: 5
      },
      {
        id: 2,
        name: 'Prayer to Ganesh (Download)',
        imageUrl: 'https://f4.bcbits.com/img/a3375086484_2.jpg',
        price: 2
      },
      {
        id: 3,
        name: 'Applesauce Dub (Cassette)',
        imageUrl: 'https://f4.bcbits.com/img/a2435772498_2.jpg',
        price: 5
      },
      {
        id: 4,
        name: 'Applesauce II (Cassette)',
        imageUrl: 'https://f4.bcbits.com/img/a2929660240_2.jpg',
        price: 5
      },
      {
        id: 5,
        name: 'Applesauce III (Cassette)',
        imageUrl: 'https://f4.bcbits.com/img/a4186904572_2.jpg',
        price: 5
      },
      {
        id: 6,
        name: 'Unstoppable Death Machine (Applesauce B-sides)',
        imageUrl: 'https://f4.bcbits.com/img/a0636309115_2.jpg',
        price: 5
      },
      {
        id: 7,
        name: 'Applesauce Cassette Trilogy',
        imageUrl:
          'https://3.bp.blogspot.com/-hy62mYmHeOI/WgpXFLzFkhI/AAAAAAAAAQo/JqS7wcTAzsYLuRtEIW4e6nJ6a0QYeBLLACLcBGAs/s320/appleloo1.jpg',
        price: 12
      }
    ]
  },
  {
    id: 2,
    title: 'Selbyville',
    routeName: 'selbyville',
    items: [
      {
        id: 1,
        name: 'Mansions',
        imageUrl: 'https://f4.bcbits.com/img/a1543980671_16.jpg',
        price: 15
      },
      {
        id: 2,
        name: 'Quiet Until the Thaw LP',
        imageUrl: 'https://f4.bcbits.com/img/a1748546458_16.jpg',
        price: 20
      },
      {
        id: 3,
        name: "Plum Puddinger's Voyage EP",
        imageUrl: 'https://f4.bcbits.com/img/a3363139976_16.jpg',
        price: 5
      },
      {
        id: 4,
        name: 'Send Selbyville to Disneyworld (Cassette)',
        imageUrl: 'https://f4.bcbits.com/img/a2036108834_16.jpg',
        price: 8
      }
    ]
  },
  {
    id: 3,
    title: 'Dracula Songs',
    routeName: 'dracula',
    items: [
      {
        id: 1,
        name: 'Dracula Songs (Cassette)',
        imageUrl:
          'https://1.bp.blogspot.com/_-F5oRQdMYYQ/TOLsswn_fbI/AAAAAAAAAA4/s06GB4IU6rE/s200/draculasongscover.jpg',
        price: 125
      },
      {
        id: 2,
        name: 'Dracula Songs II (Cassette)',
        imageUrl:
          'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/1/1/3/d/ceee-bc1e-4dd6-9afb-1d35f7d64abc.jpg',
        price: 5
      },
      {
        id: 3,
        name: 'Dracula Songs III (Cassette) (COMING SOON)',
        imageUrl: ' https://f4.bcbits.com/img/a3924038074_16.jpg',
        price: 5
      }
    ]
  },
  {
    id: 4,
    title: 'Releases',
    routeName: 'releases',
    items: [
      {
        id: 1,
        name: 'Mind Wheel - Moses Blake Road',
        imageUrl:
          'https://3.bp.blogspot.com/-NdZvq_Svays/WgpdOTtrhxI/AAAAAAAAAQ4/-60vcmGPWSAjOfukXobfP3Ni8WRvUZzYACLcBGAs/s1600/mosesblakediscface.jpg',
        price: 10
      },
      {
        id: 2,
        name: 'Graham/Drab Pony (Casette)',
        imageUrl:
          'https://4.bp.blogspot.com/-Yk7r15OfHDg/T9YE02a7nxI/AAAAAAAAAFc/toEpRXJ5oag/s200/grahamdrabponysmall.jpg',
        price: 5
      },
      {
        id: 3,
        name: 'Graham - Grimpen Mire',
        imageUrl:
          'https://3.bp.blogspot.com/_-F5oRQdMYYQ/TOLstY4pZkI/AAAAAAAAAA8/oJvJLktylyc/s200/grimpenmirecover.jpg',
        price: 10
      },
      {
        id: 4,
        name: 'Blind Pelican/Artie Appleseed (Cassette)',
        imageUrl:
          'https://4.bp.blogspot.com/-D7RsBql-zSo/UC0L3t_vnnI/AAAAAAAAAn8/Q917B8virDk/s200/187873731-1.jpg',
        price: 80
      }
    ]
  }
  // {
  //   id: 5,
  //   title: 'Random',
  //   routeName: 'random',
  //   items: [
  //     {
  //       id: 1,
  //       name: 'Camo Down Vest',
  //       imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
  //       price: 325
  //     },
  //     {
  //       id: 2,
  //       name: 'Floral T-shirt',
  //       imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
  //       price: 20
  //     },
  //     {
  //       id: 3,
  //       name: 'Black & White Longsleeve',
  //       imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
  //       price: 25
  //     },
  //     {
  //       id: 4,
  //       name: 'Pink T-shirt',
  //       imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
  //       price: 25
  //     },
  //     {
  //       id: 5,
  //       name: 'Jean Long Sleeve',
  //       imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
  //       price: 40
  //     },
  //     {
  //       id: 6,
  //       name: 'Burgundy T-shirt',
  //       imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
  //       price: 25
  //     }
  //   ]
  // }
];

export default SHOP_DATA;
