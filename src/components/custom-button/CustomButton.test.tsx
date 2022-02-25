import React from "react";
import CustomButton from "./custom-button.component";
import { shallow } from "enzyme";

describe("<CustomButton />", () => {
  test("should display a <button>", async () => {
    const customButton = shallow(
      <CustomButton isGoogleSignIn={false} inverted={true}>
        Test Button
      </CustomButton>
    );
    expect(customButton).toBeTruthy();
    expect(customButton.children).toHaveTextContent("Test Button");
    expect(customButton.props()).toContainEqual("inverted: true");
  });
});
