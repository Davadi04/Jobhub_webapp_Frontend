import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HomeNavbar from "./HomeNavbar";

describe("<HomeNavbar />", () => {
  test("it should mount", () => {
    expect(true).toEqual(true);
    render(<HomeNavbar />);

    const homeNavbar = screen.getByTestId("HomeNavbar");

    expect(homeNavbar).toBeInTheDocument();
  });
});
