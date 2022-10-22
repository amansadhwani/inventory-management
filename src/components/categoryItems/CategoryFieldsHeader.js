import React from "react";
import { CardHeader } from "../card/CardHeader";

const CategoryFieldsHeader = ({ deleteCategoryItem, titleName }) => {
  return (
    <CardHeader titleName={titleName} onClickAction={deleteCategoryItem} />
  );
};

export default CategoryFieldsHeader;
