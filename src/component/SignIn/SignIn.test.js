import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SignIn from "./SignIn";

describe("<SignIn />", () => {
  test("it should mount", () => {
    expect(true).toEqual(true);
    render(<SignIn />);

    const signIn = screen.getByTestId("SignIn");

    expect(signIn).toBeInTheDocument();
  });
});
