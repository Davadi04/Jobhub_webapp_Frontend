import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SavedBody from "./SavedBody";

describe("<SavedBody />", () => {
  test("it should mount", () => {
    expect(true).toEqual(true);
    render(<SavedBody />);

    const savedBody = screen.getByTestId("SavedBody");

    expect(savedBody).toBeInTheDocument();
  });
});
