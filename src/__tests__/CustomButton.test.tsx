import React from "react";
import CustomButton from "../components/custom-button/custom-button.component";
import { shallow } from "enzyme";

describe("<CustomButton />", () => {
  test("should display a <button>", async () => {
    expect(
      shallow(
        <CustomButton
          isGoogleSignIn={false}
          inverted={false}
          children={"Test Button"}
        />
      )
    ).toHaveTextContent("Test Button");
  });
});
