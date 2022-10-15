import React from "react";
import { ADD_NEW_CATEGORY } from "../../actions/types";
import { useDispatch } from "react-redux";
import { Button } from "../formElements/Button";

const AddCategory = () => {
  const dispatch = useDispatch();
  const addNewCategory = () => {
    dispatch({
      type: ADD_NEW_CATEGORY,
    });
  };
  return (
    <Button
      type="button"
      onClick={addNewCategory}
      name="Add Category"
      className="btn btn-primary mb-3"
    />
  );
};

export default AddCategory;
