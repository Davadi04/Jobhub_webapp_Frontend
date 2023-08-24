import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import JobSeeker from "./JobSeeker";

describe("<JobSeeker />", () => {
  test("it should mount", () => {
    expect(true).toEqual(true);
    render(<JobSeeker />);

    const jobSeeker = screen.getByTestId("JobSeeker");

    expect(jobSeeker).toBeInTheDocument();
  });
});
