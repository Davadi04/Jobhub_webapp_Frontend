import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Employer from "./Employer";

describe("<Employer />", () => {
  test("it should mount", () => {
    expect(true).toEqual(true);
    render(<Employer />);

    const employer = screen.getByTestId("Employer");

    expect(employer).toBeInTheDocument();
  });
});
