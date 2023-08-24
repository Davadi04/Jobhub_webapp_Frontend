import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import VerifyScreen from "./VerifyScreen";

describe("<VerifyScreen />", () => {
  test("it should mount", () => {
    expect(true).toEqual(true);
    render(<VerifyScreen />);

    const verifyScreen = screen.getByTestId("VerifyScreen");

    expect(verifyScreen).toBeInTheDocument();
  });
});
