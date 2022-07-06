import { fireEvent, render, screen } from "@testing-library/react";
import PhotoGallery from "../components/PhotoGallery";
import SearchBar from "../components/SearchBar";
import { mockGallery } from "./snapshot";

describe("Photo Gallery", () => {
  it("renders a header label -> ID", () => {
    render(<PhotoGallery gallery={mockGallery} />);
    screen.getByText(/ID/);
  });
});

describe("Search Bar", () => {
  it("renders a header label -> ID", () => {
    render(<SearchBar query="mock" setQuery={() => {}} />);
    screen.getByPlaceholderText("Search keywords on title");
  });
});
