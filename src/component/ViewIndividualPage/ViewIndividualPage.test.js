import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ViewIndividualPage from "./ViewIndividualPage";

describe("<ViewIndividualPage />", () => {
  test("it should mount", () => {
    expect(true).toEqual(true);
    render(<ViewIndividualPage />);

    const viewIndividualPage = screen.getByTestId("ViewIndividualPage");

    expect(viewIndividualPage).toBeInTheDocument();
  });
});
