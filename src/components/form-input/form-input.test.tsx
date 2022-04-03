import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockStore } from "../../mocks/mock-store";
import FormInput from "./form-input.component";

describe("FormInput", () => {
  let component: any;
  beforeEach(() => {
    component = render(
      <Provider store={mockStore}>
        <FormInput
          handleChange={() => {}}
          label={"Test"}
          name={"Test Name"}
          required={false}
          type={"text"}
          value={"fake"}
        />
      </Provider>
    );
  });

  it("should render FormInput component", () => {
    expect(component).toBeTruthy();
  });

  it("should render FormInput label props", () => {
    expect(
      component.container.getElementsByTagName("label").item(0)?.innerHTML
    ).toEqual("Test");
  });
});
