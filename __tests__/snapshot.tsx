import { render } from "@testing-library/react";
import PhotoGallery from "../components/PhotoGallery";
import SearchBar from "../components/SearchBar";

export const mockGallery = [
  {
    albumId: 1,
    id: 1,
    title: "mock1",
    url: "mock1",
    thumbnailUrl: "mock1",
  },
];

it("renders photog gallery unchanged", () => {
  const { container } = render(<PhotoGallery gallery={mockGallery} />);
  expect(container).toMatchSnapshot();
});

it("renders photog gallery unchanged", () => {
  const { container } = render(<SearchBar query="mock" setQuery={() => {}} />);
  expect(container).toMatchSnapshot();
});
