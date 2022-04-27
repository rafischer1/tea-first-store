import React, { FC } from "react";
import { CustomButtonContainer } from "./custom-button.styles";

type Props = {
  children: any;
  isGoogleSignIn: boolean;
  inverted: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: any;
};

const CustomButton: FC<Props> = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}: Props) => (
  <CustomButtonContainer
    isGoogleSignIn={isGoogleSignIn}
    inverted={inverted}
    {...otherProps}
  >
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
