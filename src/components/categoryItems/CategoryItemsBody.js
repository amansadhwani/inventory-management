import React from "react";
import { Input } from "../formElements/Input";

const CategoryItemsBody = ({ categorySubItems, updateCategorySubItems }) => {
  return (
    <div className="card-body">
      <form autoComplete="off"></form>
      {categorySubItems.map((subItem) => (
        <div className="mb-3 mt-3" key={subItem.categorySubItemsID}>
          <label htmlFor={subItem.label}>{subItem.label}</label>
          <Input
            type={subItem.type}
            className="form-control"
            placeholder={`Enter ${subItem.label}`}
            value={subItem.value}
            onChange={(e) =>
              updateCategorySubItems(e, subItem.categorySubItemsID)
            }
            name={"value"}
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryItemsBody;
