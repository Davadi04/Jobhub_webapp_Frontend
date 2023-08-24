import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Saved from "./Saved";

describe("<Saved />", () => {
  test("it should mount", () => {
    expect(true).toEqual(true);
    render(<Saved />);

    const saved = screen.getByTestId("Saved");

    expect(saved).toBeInTheDocument();
  });
});
