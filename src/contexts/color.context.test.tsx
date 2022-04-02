import React from "react";
import { ColorContext, colorNameMap } from "./color.context";
import { render, screen } from "@testing-library/react";
import { ReactChild, ReactFragment, ReactPortal } from "react";

describe("Color Context", () => {
  const customRender = (
    ui: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined,
    { providerProps, ...renderOptions }: any
  ) => {
    return render(
      <ColorContext.Provider value={providerProps}>{ui}</ColorContext.Provider>,
      renderOptions
    );
  };

  it("Displayed element shows value from color context provider", () => {
    const providerProps = {
      color: "white",
    };
    customRender(<div>Color: {colorNameMap[providerProps.color]}</div>, {
      providerProps,
    });
    expect(screen.getByText(/^Color:/).textContent).toEqual("Color: ⚪️");
  });
});
