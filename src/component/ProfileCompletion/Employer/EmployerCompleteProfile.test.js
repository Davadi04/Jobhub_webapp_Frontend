import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EmployerCompleteProfile from "./EmployerCompleteProfile";

describe("<EmployerCompleteProfile />", () => {
  test("it should mount", () => {
    expect(true).toEqual(true);
    render(<EmployerCompleteProfile />);

    const employerCompleteProfile = screen.getByTestId(
      "EmployerCompleteProfile"
    );

    expect(employerCompleteProfile).toBeInTheDocument();
  });
});
