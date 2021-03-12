import React, { useState } from "react";
import FilterBtns from "../FilterBtns/FilterBtns";
import PhotoCards from "../PhotoCards/PhotoCards";
import Gallery from "../../components/Gallery/Gallery";

const mainImages = [
  {
    src:
      "https://drive.google.com/uc?export=view&id=1WrysAfbSG533-MeKBx_dx0wZja6DUCn5",
  },
  {
    author: "Daria Shevtsova",
    tag: "Food",
    src:
      "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/2.jpg?raw=true",
  },
  {
    author: "Kasuma",
    tag: "Animals",
    src:
      "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/3.jpg?raw=true",
  },
  {
    author: "Dominika Roseclay",
    tag: "Plants",
    src:
      "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/4.jpg?raw=true",
  },
  {
    author: "Scott Webb",
    tag: "Plants",
    src:
      "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/5.jpg?raw=true",
  },
  {
    author: "Jeffrey Czum",
    tag: "People",
    src:
      "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/6.jpg?raw=true",
  },
  {
    author: "Dominika Roseclay",
    tag: "Food",
    src:
      "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/7.jpg?raw=true",
  },
  {
    author: "Valeria Boltneva",
    tag: "Animals",
    src:
      "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/8.jpg?raw=true",
  },
  {
    src:
      "https://drive.google.com/uc?export=view&id=1WrysAfbSG533-MeKBx_dx0wZja6DUCn5",
  },
  {
    author: "Daria Shevtsova",
    tag: "Food",
    src:
      "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/2.jpg?raw=true",
  },
  {
    author: "Kasuma",
    tag: "Animals",
    src:
      "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/3.jpg?raw=true",
  },
  {
    author: "Dominika Roseclay",
    tag: "Plants",
    src:
      "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/4.jpg?raw=true",
  },
  {
    author: "Scott Webb",
    tag: "Plants",
    src:
      "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/5.jpg?raw=true",
  },
  {
    author: "Jeffrey Czum",
    tag: "People",
    src:
      "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/6.jpg?raw=true",
  },
  {
    author: "Dominika Roseclay",
    tag: "Food",
    src:
      "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/7.jpg?raw=true",
  },
  {
    author: "Valeria Boltneva",
    tag: "Animals",
    src:
      "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/8.jpg?raw=true",
  },
];

const mainFilters = [
  { name: "People", status: false },
  { name: "Animals", status: false },
  { name: "Plants", status: false },
  { name: "Food", status: false },
];

const PhotosGallery = () => {
  const [images, setImages] = useState(mainImages);
  const [filters, setFilters] = useState(mainFilters);
  const [all, setAll] = useState(true);

  const setFilter = (e) => {
    e.preventDefault();
    const { index } = e.currentTarget.dataset;
    filters[index].status = !filters[index].status;
    setFilters(filters);
    updateFilters();
    updateImages();
  };

  const setForAll = () => {
    setAll(true);
    filters.forEach((filter) => {
      filter.status = false;
    });

    setFilters([...filters]);
  };

  const updateFilters = () => {
    const allFiltersTrue = filters.every((filter) => filter.status === true);
    const allFiltersFalse = filters.every((filter) => filter.status === false);

    if (allFiltersTrue || allFiltersFalse) {
      setForAll();
    } else {
      setAll(false);
    }
  };

  const updateImages = () => {
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
