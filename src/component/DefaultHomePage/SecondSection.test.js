import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SecondSection from "./SecondSection";

describe("<SecondSection />", () => {
  test("it should mount", () => {
    expect(true).toEqual(true);
    render(<SecondSection />);

    const secondSection = screen.getByTestId("SecondSection");

    expect(secondSection).toBeInTheDocument();
  });
});
