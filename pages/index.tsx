import { FC, useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { Gallery } from "../interfaces";
import PhotoGallery from "../components/PhotoGallery";
import { API_URL } from "../constants";
import { debounce } from "ts-debounce";
import Loader from "../components/Loader";

type IndexTypes = {
  gallery: Gallery[];
};
const Index: FC<IndexTypes> = () => {
  const [gallery, setGallery] = useState<Gallery[]>([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const requestURL = query ? `${API_URL}?title_like=${query}` : API_URL;

  useEffect(() => {
    const fetchPhotos = async () => {
      setIsLoading(true);
      const res = await fetch(requestURL);
      const gallery: Gallery[] = await res.json();
      setGallery(gallery);
      setIsLoading(false);
    };

    const debouncedFetchPhotos = debounce(fetchPhotos, 1500);
    debouncedFetchPhotos();
  }, [query]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 overflow-x-auto bg-slate-100 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <SearchBar query={query} setQuery={setQuery} />
          <PhotoGallery gallery={gallery} />
        </>
      )}
    </div>
  );
};

export default Index;
