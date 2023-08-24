import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProfileCompletion from "./ProfileCompletion";

describe("<ProfileCompletion />", () => {
  test("it should mount", () => {
    expect(true).toEqual(true);
    render(<ProfileCompletion />);

    const profileCompletion = screen.getByTestId("ProfileCompletion");

    expect(profileCompletion).toBeInTheDocument();
  });
});
