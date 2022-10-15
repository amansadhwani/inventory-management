import React from "react";
import { ADD_NEW_CATEGORY_FIELDS_ITEM } from "../../actions/types";
import { useDispatch } from "react-redux";
import { Button } from "../formElements/Button";
import { prepareNewCategoryFieldsData } from "../../helper";

const AddCategoryFields = ({ category, categoryData }) => {
  const dispatch = useDispatch();
  const addNewCategoryItem = () => {
    const data = prepareNewCategoryFieldsData(category, categoryData);
    dispatch({
      type: ADD_NEW_CATEGORY_FIELDS_ITEM,
      payload: data,
    });
  };
  return (
    <Button
      type="button"
      onClick={addNewCategoryItem}
      name="Add Item"
      className="btn btn-primary"
    />
  );
};

export default AddCategoryFields;
