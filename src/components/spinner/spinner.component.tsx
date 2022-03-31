import React, { useContext } from "react";
import "./spinner.styles.scss";
import { ColorContext, colorNameMap } from "../../contexts/color.context";

const Spinner = () => {
  const { color } = useContext(ColorContext);
  return (
    <div className="loader">
      <div style={{ fontSize: 30 }}>{colorNameMap[color]}</div>
    </div>
  );
};

export default Spinner;
