import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FouthSection from "./FouthSection";

describe("<FouthSection />", () => {
  test("it should mount", () => {
    expect(true).toEqual(true);
    render(<FouthSection />);

    const fouthSection = screen.getByTestId("FouthSection");

    expect(fouthSection).toBeInTheDocument();
  });
});
