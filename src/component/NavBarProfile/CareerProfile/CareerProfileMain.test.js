import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CareerProfileMain from "./CareerProfileMain";

describe("<CareerProfileMain />", () => {
  test("it should mount", () => {
    expect(true).toEqual(true);
    render(<CareerProfileMain />);

    const careerProfileMain = screen.getByTestId("CareerProfileMain");

    expect(careerProfileMain).toBeInTheDocument();
  });
});
