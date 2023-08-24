import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Accounsetting from "./Accounsetting";

describe("<Accounsetting />", () => {
  test("it should mount", () => {
    expect(true).toEqual(true);
    render(<Accounsetting />);

    const accounsetting = screen.getByTestId("Accounsetting");

    expect(accounsetting).toBeInTheDocument();
  });
});
