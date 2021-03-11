import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeStore";
import {
  FilterForm,
  FilterUl,
  FilterLi,
  FilterInput,
  FilterLabel,
  DarkFilterInput,
  DarkFilterLabel,
} from "./FilterBtnsStyles";

const FilterBtns = ({ onClickAll, all, onClick, filters }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {theme === "dark" ? (
        <FilterForm>
          <FilterUl>
            <FilterLi onClick={onClickAll}>
              <DarkFilterInput type="checkbox" checked={all} />
              <DarkFilterLabel htmlFor="all">All</DarkFilterLabel>
            </FilterLi>

            {filters.map((filter, i) => (
              <FilterLi key={i} data-index={i} onClick={onClick}>
                <DarkFilterInput
                  id={filter.name}
                  type="checkbox"
                  checked={filter.status}
                />
                <DarkFilterLabel htmlFor={filter.name}>
                  {filter.name}
                </DarkFilterLabel>
              </FilterLi>
            ))}
          </FilterUl>
        </FilterForm>
      ) : (
        <FilterForm>
          <FilterUl>
            <FilterLi onClick={onClickAll}>
              <FilterInput type="checkbox" checked={all} />
              <FilterLabel htmlFor="all">All</FilterLabel>
            </FilterLi>

            {filters.map((filter, i) => (
              <FilterLi key={i} data-index={i} onClick={onClick}>
                <FilterInput
                  id={filter.name}
                  type="checkbox"
                  checked={filter.status}
                />
                <FilterLabel htmlFor={filter.name}>{filter.name}</FilterLabel>
              </FilterLi>
            ))}
          </FilterUl>
        </FilterForm>
      )}
    </>
  );
};

export default FilterBtns;
