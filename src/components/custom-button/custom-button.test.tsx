import React from "react";
import CustomButton from "./custom-button.component";
import { render } from "@testing-library/react";

describe("<CustomButton />", () => {
  test("should display a <button>", async () => {
    const customButton = render(
      <CustomButton isGoogleSignIn={false} inverted={true}>
        Test Button
      </CustomButton>
    );
    expect(customButton).toBeTruthy();
    expect(customButton.container.children).toHaveTextContent("Test Button");
    // expect(customButton.container.props()).toContainEqual("inverted: true");
  });
});
