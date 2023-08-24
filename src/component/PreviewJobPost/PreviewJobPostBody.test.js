import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PreviewJobPostBody from "./PreviewJobPostBody";

describe("<PreviewJobPostBody />", () => {
  test("it should mount", () => {
    expect(true).toEqual(true);
    render(<PreviewJobPostBody />);

    const previewJobPostBody = screen.getByTestId("PreviewJobPostBody");

    expect(previewJobPostBody).toBeInTheDocument();
  });
});
