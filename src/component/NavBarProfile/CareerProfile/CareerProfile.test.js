import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CareerProfile from "./CareerProfile";

describe("<CareerProfile />", () => {
  test("it should mount", () => {
    expect(true).toEqual(true);
    render(<CareerProfile />);

    const careerProfile = screen.getByTestId("CareerProfile");

    expect(careerProfile).toBeInTheDocument();
  });
});
