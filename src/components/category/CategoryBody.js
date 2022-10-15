import React from "react";
import { useDispatch } from "react-redux";
import { UPDATE_CATEGORY } from "../../actions/types";
import { Input } from "../formElements/Input";
import CategoryForm from "./CategoryForm";

const CategoryBody = ({ item, index }) => {
  const dispatch = useDispatch();
  const updateCategory = (e) => {
    const prepData = {
      index: index,
      name: e.target.name,
      value: e.target.value,
    };
    dispatch({
      type: UPDATE_CATEGORY,
      payload: prepData,
    });
  };
  return (
    <div className="card-body">
      <form autoComplete="off">
        <div className="mb-3 mt-3">
          <label htmlFor="categoryName">Category Name</label>
          <Input
            type="text"
            className="form-control"
            placeholder="Enter category name"
            value={item.categoryName}
            onChange={updateCategory}
            name="categoryName"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title">Title Field</label>
          <select className="form-select mt-3">
            {item.categoryFields.map((item, index) => (
              <option key={index} value={item.type}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <CategoryForm
          categoryFields={item.categoryFields}
          categoryIndex={index}
        />
      </form>
    </div>
  );
};

export default CategoryBody;
