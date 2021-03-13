import React, { useState } from "react";
import FilterBtns from "../FilterBtns/FilterBtns";
import PhotoCards from "../PhotoCards/PhotoCards";
import Gallery from "../../components/Gallery/Gallery";
import AllImages from "../../ListOfImages.json";

const mainImages = AllImages;

const mainFilters = [
  { name: "couple", status: false },
  { name: "portrait", status: false },
  { name: "wedding", status: false },
  { name: "engagement", status: false },
  { name: "family", status: false },
  { name: "maternity", status: false },
];

const PhotosGallery = () => {
  const [images, setImages] = useState(mainImages);
  const [filters, setFilters] = useState(mainFilters);
  const [all, setAll] = useState(true);

  const setFilter = async (e) => {
    e.preventDefault();
    const { index } = e.currentTarget.dataset;
    filters[index].status = !filters[index].status;
    setFilters(filters);
    await updateFilters();
    await updateImages();
  };

  const setForAll = async () => {
    setAll(true);
    filters.forEach((filter) => {
      filter.status = false;
    });

    setFilters([...filters]);
  };

  const updateFilters = async () => {
    const allFiltersTrue = filters.every((filter) => filter.status === true);
    const allFiltersFalse = filters.every((filter) => filter.status === false);

    if (allFiltersTrue || allFiltersFalse) {
      await setForAll();
    } else {
      setAll(false);
    }
  };

  const updateImages = async () => {
    let newImages = [];
    let a = 0;

    mainImages.forEach((img) => {
      filters.forEach((filter) => {
        if (img.tag === filter.name && filter.status === true) {
          newImages[a] = img;
          a++;
        }
      });
    });
    setImages(newImages);
  };

  return (
    <Gallery title={"PHOTO GALLERY"}>
      <FilterBtns
        onClickAll={setForAll}
        all={all}
        onClick={setFilter}
        filters={filters}
      />
      {all ? <PhotoCards imgs={mainImages} /> : <PhotoCards imgs={images} />}
    </Gallery>
  );
};

export default PhotosGallery;
