import React from "react";
import { useSelector } from "react-redux";
import CategoryBody from "./CategoryBody";
import CategoryHeader from "./CategoryHeader";
import CateogryFooter from "./CateogryFooter";
import { ADD_NEW_CATEGORY } from "../../actions/types";
import { useDispatch } from "react-redux";
import { Button } from "../formElements/Button";

const Category = () => {
  const { category } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const addNewCategory = () => {
    dispatch({
      type: ADD_NEW_CATEGORY,
    });
  };

  return (
    <>
      <div className="container-fluid mt-3">
        <div className="container mt-3">
          <Button
            type="button"
            onClick={addNewCategory}
            name="Add Category"
            className="btn btn-primary mb-3"
          />
          <div className="row">
            {category.map((item) => (
              <div className="col-12 col-md-4 mb-3" key={item.id}>
                <div className="card">
                  <CategoryHeader id={item.id} titleName={item.categoryName} />
                  <CategoryBody item={item} />
                  <CateogryFooter categoryID={item.id} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
