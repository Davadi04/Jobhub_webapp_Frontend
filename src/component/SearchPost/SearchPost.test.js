import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchPost from "./SearchPost";

describe("<SearchPost />", () => {
  test("it should mount", () => {
    expect(true).toEqual(true);
    render(<SearchPost />);

    const searchPost = screen.getByTestId("SearchPost");

    expect(searchPost).toBeInTheDocument();
  });
});
