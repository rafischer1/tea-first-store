import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

export default class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        {
          title: "applesauce",
          imageUrl:
            "http://2.bp.blogspot.com/-Ugrne9n9cCI/T7GH-TXzJvI/AAAAAAAAAEo/fF6IBrNGaz4/s1600/tea005appleseedcoversquare.jpg",
          id: 1,
          linkUrl: "shop/applesauce",
        },
        {
          title: "selbyville",
          imageUrl:
            "https://farm3.static.flickr.com/2764/4075571980_9e5c60f067_m.jpg",
          id: 2,
          linkUrl: "shop/selbyville",
        },
        {
          title: "dracula songs",
          imageUrl:
            "https://4.bp.blogspot.com/-UZQGQv_KOrs/WgcxeNSYo9I/AAAAAAAAAQQ/7IkJW1ViwfwFArKiGqV1oJ0wkEXcng3MgCLcBGAs/s320/dracIII.jpg",
          id: 3,
          linkUrl: "shop/dracula",
        },
        {
          title: "releases",
          imageUrl:
            "https://2.bp.blogspot.com/-KCjROUtNROM/T7ExPojqPGI/AAAAAAAAAD0/gKGNFtdXhJE/s640/6896550500_ff10d031cf_o.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/releases",
        },
        {
          title: "photos",
          imageUrl:
            "https://64.media.tumblr.com/846b6e397af9f56e6efc3917d9f46c08/tumblr_ni2vs1In2C1qk629no1_1280.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/photos",
        },
      ],
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ id, ...sectionProps }) => {
          return <MenuItem key={id} {...sectionProps} subtitle="SHOP NOW" />;
        })}
      </div>
    );
  }
}
