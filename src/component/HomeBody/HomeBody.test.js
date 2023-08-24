import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HomeBody from "./HomeBody";

describe("<HomeBody />", () => {
  test("it should mount", () => {
    expect(true).toEqual(true);
    render(<HomeBody />);

    const homeBody = screen.getByTestId("HomeBody");

    expect(homeBody).toBeInTheDocument();
  });
});
