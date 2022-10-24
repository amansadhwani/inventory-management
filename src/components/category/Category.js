import React from "react";
import { useSelector } from "react-redux";
import CategoryBody from "./CategoryBody";
import CateogryFooter from "./CateogryFooter";
import { ADD_NEW_CATEGORY, DELETE_CATEGORY } from "../../actions/types";
import { useDispatch } from "react-redux";
import { Button } from "../formElements/Button";
import { CardHeader } from "../card/CardHeader";

const Category = () => {
  const { category } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const addNewCategory = () => {
    dispatch({
      type: ADD_NEW_CATEGORY,
    });
  };

  const deleteCategory = (id) => {
    dispatch({
      type: DELETE_CATEGORY,
      payload: id,
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
                  <CardHeader
                    titleName={item.categoryName}
                    onClickCardHeader={() => deleteCategory(item.id)}
                  />
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
