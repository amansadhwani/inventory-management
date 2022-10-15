import React from "react";
import { useDispatch } from "react-redux";
import { DELETE_CATEGORY_FIELD } from "../../actions/types";
import { CardHeader } from "../card/CardHeader";

const CategoryFieldsHeader = ({ id, titleName }) => {
  const dispatch = useDispatch();
  const deleteCategory = () => {
    dispatch({
      type: DELETE_CATEGORY_FIELD,
      payload: id,
    });
  };
  return <CardHeader titleName={titleName} onClickAction={deleteCategory} />;
};

export default CategoryFieldsHeader;
