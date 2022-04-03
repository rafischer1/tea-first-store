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
    expect(
      customButton.container.getElementsByTagName("button")[0]
    ).toContainHTML("<button class='sc-bdvvtL dleHu'>Test Button</button>");
  });
});
