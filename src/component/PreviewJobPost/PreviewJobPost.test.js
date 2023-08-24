import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PreviewJobPost from "./PreviewJobPost";

describe("<PreviewJobPost />", () => {
  test("it should mount", () => {
    expect(true).toEqual(true);
    render(<PreviewJobPost />);

    const previewJobPost = screen.getByTestId("PreviewJobPost");

    expect(previewJobPost).toBeInTheDocument();
  });
});
