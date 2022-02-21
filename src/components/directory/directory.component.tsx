import React from "react";
import { connect } from "react-redux";
import MenuItem from "../menu-item/menu-item.component";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import "./directory.styles.scss";
import { DirectorySection } from "../../redux/directory/directory.interface";

const Directory = ({ sections }: { sections: DirectorySection[] }) => {
  return (
    <div className="directory-menu">
      {sections.map((item) => {
        return <MenuItem key={item.id} item={item} subtitle="SHOP NOW" />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
