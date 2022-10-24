import React from "react";
import { useDispatch } from "react-redux";
import { UPDATE_CATEGORY } from "../../actions/types";
import { Input } from "../formElements/Input";
import CategoryForm from "./CategoryForm";

const CategoryBody = ({ item }) => {
  const dispatch = useDispatch();
  const updateCategory = (e) => {
    const prepData = {
      id: item.id,
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
          <label htmlFor="title">Title</label>
          <select
            className="form-select mt-3"
            name="titleID"
            onChange={updateCategory}
          >
            {item.categoryFields.map((element, index) => (
              <>
                <option
                  key={index}
                  value={element.categoryID}
                  selected={item.titleID === element.categoryID}
                >
                  {element.name}
                </option>
              </>
            ))}
          </select>
        </div>
        <CategoryForm
          categoryFields={item.categoryFields}
          categoryID={item.id}
        />
      </form>
    </div>
  );
};

export default CategoryBody;
