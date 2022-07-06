import React, { Dispatch, FC, SetStateAction } from "react";

type SearchBarTypes = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

const SearchBar: FC<SearchBarTypes> = ({ query, setQuery }) => {
  function handleOnSearch({ currentTarget = {} }) {
    const { value } = currentTarget as { value: string };
    setQuery(value);
  }

  return (
    <div className="flex items-center justify-center">
      <div className="flex border-2 rounded">
        <input
          name="search"
          type="search"
          autoComplete="off"
          id="search"
          className="px-4 py-2 w-80"
          placeholder="Search keywords on title"
          value={query}
          onChange={handleOnSearch}
        />
        <div className="flex items-center justify-center px-4">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
