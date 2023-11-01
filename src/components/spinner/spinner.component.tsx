import React, { useContext } from "react";
import "./spinner.styles.scss";
import { ColorContext } from "../../contexts/color.context";
import { colorNameMap } from "../../shared/colorContextDef";

const Spinner = () => {
  const { color } = useContext(ColorContext);
  return (
    <div className="loader">
      <div style={{ fontSize: 30 }}>{colorNameMap[color]}</div>
    </div>
  );
};

export default Spinner;
