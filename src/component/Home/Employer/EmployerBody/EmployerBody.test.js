import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EmployerBody from "./EmployerBody";

describe("<EmployerBody />", () => {
  test("it should mount", () => {
    expect(true).toEqual(true);
    render(<EmployerBody />);

    const employerBody = screen.getByTestId("EmployerBody");

    expect(employerBody).toBeInTheDocument();
  });
});
