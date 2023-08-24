import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Applied from "./Applied";

describe("<Applied />", () => {
  test("it should mount", () => {
    expect(true).toEqual(true);
    render(<Applied />);

    const applied = screen.getByTestId("Applied");

    expect(applied).toBeInTheDocument();
  });
});
