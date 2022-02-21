import React from "react";

import "./custom-button.styles.scss";

type Props = {
  children: any;
  isGoogleSignIn: boolean;
  inverted: boolean;
};

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}: Props) => (
  <button
    className={`${inverted} ? "inverted" : "", ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
