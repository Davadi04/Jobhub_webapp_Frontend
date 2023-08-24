import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DefaultHomePage from "./DefaultHomePage";

describe("<DefaultHomePage />", () => {
  test("it should mount", () => {
    expect(true).toEqual(true);
    render(<DefaultHomePage />);

    const defaultHomePage = screen.getByTestId("DefaultHomePage");

    expect(defaultHomePage).toBeInTheDocument();
  });
});
