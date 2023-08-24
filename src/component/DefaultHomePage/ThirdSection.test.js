import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ThirdSection from "./ThirdSection";

describe("<ThirdSection />", () => {
  test("it should mount", () => {
    expect(true).toEqual(true);
    render(<ThirdSection />);

    const thirdSection = screen.getByTestId("ThirdSection");

    expect(thirdSection).toBeInTheDocument();
  });
});
