import React from "react";
import { CardHeader } from "../card/CardHeader";

const CategoryFieldsHeader = ({ deleteCategoryItem, titleName }) => {
  return (
    <CardHeader titleName={titleName} onClickCardHeader={deleteCategoryItem} />
  );
};

export default CategoryFieldsHeader;
