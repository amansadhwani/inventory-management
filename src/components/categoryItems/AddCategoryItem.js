import React from "react";
import { Button } from "../formElements/Button";

const AddCategoryItem = ({ addNewCategoryItem }) => {
  return (
    <Button
      type="button"
      onClick={addNewCategoryItem}
      name="Add Item"
      className="btn btn-primary"
    />
  );
};

export default AddCategoryItem;
