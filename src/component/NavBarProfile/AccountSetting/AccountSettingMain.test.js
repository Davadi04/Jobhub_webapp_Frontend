import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AccountSettingMain from "./AccountSettingMain";

describe("<AccountSettingMain />", () => {
  test("it should mount", () => {
    expect(true).toEqual(true);
    render(<AccountSettingMain />);

    const accountSettingMain = screen.getByTestId("AccountSettingMain");

    expect(accountSettingMain).toBeInTheDocument();
  });
});
