import React from "react";
import { useDispatch } from "react-redux";
import {
  DELETE_CATEGORY_FIELD,
  UPDATE_CATEGORY_FIELD,
} from "../../actions/types";
import { FIELD_TYPES } from "../../constants";

const CategoryForm = ({ categoryFields, categoryID }) => {
  const dispatch = useDispatch();
  const updateCategoryField = (name, value, categoryFieldId) => {
    const prepData = {
      categoryID,
      categoryFieldId,
      name,
      value,
    };
    dispatch({
      type: UPDATE_CATEGORY_FIELD,
      payload: prepData,
    });
  };

  const deleteCategoryField = (categoryFieldId) => {
    dispatch({
      type: DELETE_CATEGORY_FIELD,
      payload: { categoryFieldId },
    });
  };
  return (
    <>
      {categoryFields.map((item) => (
        <div className="input-group mb-3" key={item.categoryId}>
          <input
            name="name"
            type="text"
            className="form-control"
            value={item.name}
            onChange={(e) =>
              updateCategoryField(
                e.target.name,
                e.target.value,
                item.categoryID,
                item
              )
            }
          />
          <button
            className="btn btn-outline-secondary dropdown-toggle text-capitalize"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {item.type}
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {FIELD_TYPES.map((itemType, keyIndex) => (
              <li
                key={keyIndex}
                className="dropdown-item"
                onClick={() =>
                  updateCategoryField(
                    "type",
                    itemType.type,
                    item.categoryID,
                    item
                  )
                }
              >
                {itemType.name}
              </li>
            ))}
            <li
              key="delete-category-id"
              className="dropdown-item"
              onClick={() => deleteCategoryField(item.categoryID)}
            >
              Delete <i aria-hidden="true" className="fa fa-trash"></i>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default CategoryForm;
