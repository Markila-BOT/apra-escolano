import React, { FC, useState } from "react";
import ImgsViewer from "react-images-viewer";
import ReactPaginate from "react-paginate";
import { ITEMS_PER_PAGE } from "../constants";
import { Gallery } from "../interfaces";

type PhotoGalleryTypes = {
  gallery: Gallery[];
};

const PhotoGallery: FC<PhotoGalleryTypes> = ({ gallery }) => {
  const [isOpenImgViewer, setIsOpenImgViewer] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const offset = currentPage * ITEMS_PER_PAGE;
  const slicedGallery = gallery.slice(offset, offset + ITEMS_PER_PAGE);
  const pageCount = Math.ceil(gallery.length / ITEMS_PER_PAGE);
  const imagesSource = slicedGallery.map((gallery) => {
    return { src: gallery.url, caption: `Title: ${gallery.title}` };
  });

  const handlePageClick = ({ selected: selectedPage = 0 }) => {
    setCurrentPage(selectedPage);
  };

  return (
    <div className="flex flex-col mt-8">
      <div className="py-2 -my-2">
        <ImgsViewer
          imgs={imagesSource}
          isOpen={isOpenImgViewer}
          currImg={currentImageIndex}
          onClickPrev={() => setCurrentImageIndex((prev) => prev - 1)}
          onClickNext={() => setCurrentImageIndex((prev) => prev + 1)}
          onClose={() => setIsOpenImgViewer(false)}
        />
        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  ID
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Title
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Thumbnail
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {slicedGallery.map((gallery, index) => (
                <tr key={gallery.id} className="odd:bg-white even:bg-slate-50">
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div
                      className="text-sm font-medium leading-5 text-gray-900 cursor-pointer hover:text-blue-600"
                      onClick={() => {
                        setCurrentImageIndex(index);
                        setIsOpenImgViewer(true);
                      }}
                    >
                      {gallery.id}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-500">
                      {gallery.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center justify-center">
                      <img
                        className="w-10 h-10 rounded-full cursor-pointer"
                        src={gallery.thumbnailUrl}
                        alt="gallery item"
                        onClick={() => {
                          setCurrentImageIndex(index);
                          setIsOpenImgViewer(true);
                        }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">>"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"flex justify-end space-x-1 m-3"}
          pageClassName={
            "px-3 py-2 border border-gray-300 rounded hover:bg-gray-100"
          }
          activeClassName={
            "px-3 py-2 border border-blue-500 rounded bg-blue-500 text-white hover:bg-blue-500"
          }
          previousClassName={
            "px-3 py-2 border border-gray-300 rounded hover:bg-gray-100"
          }
          nextClassName={
            "px-3 py-2 border border-gray-300 rounded hover:bg-gray-100"
          }
        />
      </div>
    </div>
  );
};

export default PhotoGallery;
