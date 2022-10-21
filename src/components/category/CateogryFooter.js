import React from "react";
import { FIELD_TYPES } from "../../constants";
import { useDispatch } from "react-redux";
import { ADD_NEW_CATEGORY_FIELD } from "../../actions/types";

const CateogryFooter = ({ categoryId }) => {
  const dispatch = useDispatch();
  const addCategoryField = (type) => {
    dispatch({
      type: ADD_NEW_CATEGORY_FIELD,
      payload: { categoryId, type },
    });
  };

  return (
    <div className="card-footer">
      <button
        type="button"
        className="btn btn-primary dropdown-toggle"
        data-bs-toggle="dropdown"
      >
        Add Field
      </button>
      <ul className="dropdown-menu">
        {FIELD_TYPES.map((item) => (
          <li
            className="dropdown-item"
            key={item.id}
            onClick={() => addCategoryField(item.type)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CateogryFooter;
