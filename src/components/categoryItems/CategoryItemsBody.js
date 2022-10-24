import React from "react";
import { Input } from "../formElements/Input";

const CategoryItemsBody = ({
  categorySubItems,
  categoryItemID,
  updateCategorySubItems,
}) => {
  return (
    <div className="card-body">
      <form autoComplete="off">
        {categorySubItems.map((subItem) => (
          <div className="mb-3 mt-3" key={subItem.categorySubItemsID}>
            <label htmlFor={subItem.name}>{subItem.name}</label>
            <Input
              //defaultChecked={subItem.value}
              type={subItem.type}
              className={subItem.type !== "checkbox" ? "form-control" : ""}
              placeholder={`Enter ${subItem.name}`}
              value={subItem.value}
              onChange={(e) =>
                updateCategorySubItems(
                  e,
                  subItem.type,
                  subItem.categorySubItemsID,
                  categoryItemID
                )
              }
              name={"value"}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default CategoryItemsBody;
