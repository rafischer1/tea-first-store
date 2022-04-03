import React from "react";
import { render } from "@testing-library/react";
import ErrorBoundary from "./error-boundary.component";

const renderProviders = (ui: React.ReactElement) => render(ui, {});

describe("ErrorBoundary", () => {
  // * IGNORES console.error and just tests ErrorBoundary
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  it(`should render error boundary component when there is an error`, () => {
    const Child = () => {
      throw new Error("here I am");
    };
    const { getByText } = renderProviders(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>
    );

    const errorMessage = getByText("Error Boundary Triggered");
    expect(errorMessage).toBeDefined();
  });
});
