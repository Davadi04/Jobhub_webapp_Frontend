import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import JobSeekerBody from "./JobSeekerBody";

describe("<JobSeekerBody />", () => {
  test("it should mount", () => {
    expect(true).toEqual(true);
    render(<JobSeekerBody />);

    const jobSeekerBody = screen.getByTestId("JobSeekerBody");

    expect(jobSeekerBody).toBeInTheDocument();
  });
});
