import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AppSignUp from "./AppSignUp";

describe("<AppSignUp />", () => {
  test("it should mount", () => {
    expect(true).toEqual(true);
    render(<AppSignUp />);

    const appSignUp = screen.getByTestId("AppSignUp");

    expect(appSignUp).toBeInTheDocument();
  });
});
