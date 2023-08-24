import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import JobSeekerCompleteProfile from "./JobSeekerCompleteProfile";

describe("<JobSeekerCompleteProfile />", () => {
  test("it should mount", () => {
    expect(true).toEqual(true);
    render(<JobSeekerCompleteProfile />);

    const jobSeekerCompleteProfile = screen.getByTestId(
      "JobSeekerCompleteProfile"
    );

    expect(jobSeekerCompleteProfile).toBeInTheDocument();
  });
});
