import React from "react";
import { render, findByText, findAllByText } from "@testing-library/react";
import CustomButton from "../components/custom-button/custom-button.component";
import exp from "constants";

type Props = {
  children: any;
  isGoogleSignIn: boolean;
  inverted: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: any;
};

describe("<CustomButton />", () => {
  test("should display a <button>", async () => {
    const x = renderCustomButton({
      type: "button",
      inverted: false,
      isGoogleSignIn: false,
      onClick: () => "hi",
      children: [],
    });
    console.log(x.container);
  });
});

function renderCustomButton(props: Partial<Props> = {}) {
  const defaultProps: Props = {
    type: "button",
    inverted: false,
    isGoogleSignIn: false,
    onClick: () => "hi",
    children: [],
  };
  return render(
    <CustomButton
      {...defaultProps}
      {...props}
      children={defaultProps.children}
    />
  );
}
