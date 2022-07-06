import { FC, useState } from "react";
import SearchBar from "../components/SearchBar";
import { Gallery } from "../interfaces";
import Fuse from "fuse.js";
import PhotoGallery from "../components/PhotoGallery";

type IndexTypes = {
  gallery: Gallery[];
};
const Index: FC<IndexTypes> = ({ gallery }) => {
  const [query, setQuery] = useState("");
  const options = {
    keys: ["title"],
    includeScore: true,
  };
  const fuse = new Fuse(gallery, options);
  const results = fuse.search(query);
  const searchResults = query ? results.map((result) => result.item) : gallery;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 overflow-x-auto bg-slate-100 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <SearchBar query={query} setQuery={setQuery} />
      <PhotoGallery gallery={searchResults} />
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/albums/1/photos"
  );
  const json: Gallery[] = await res.json();

  return {
    props: {
      gallery: json,
    },
  };
}

export default Index;
