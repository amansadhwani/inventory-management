import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AddCategory from "./AddCategory";
import CategoryBody from "./CategoryBody";
import CategoryHeader from "./CategoryHeader";
import CateogryFooter from "./CateogryFooter";

const Category = () => {
  const { category } = useSelector((state) => state.category);

  useEffect(() => {
    //let checkData=localStorage.getItem("data",)
  }, []);

  return (
    <>
      <div className="container-fluid mt-3">
        <div className="container mt-3">
          <AddCategory />
          <div className="row">
            {category.map((item, index) => (
              <div className="col-12 col-md-4 mb-3" key={item.id}>
                <div className="card">
                  <CategoryHeader id={item.id} titleName={item.categoryName} />
                  <CategoryBody item={item} index={index} />
                  <CateogryFooter index={index} />
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
