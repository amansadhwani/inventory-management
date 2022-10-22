import "./App.css";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Category from "./components/category/Category";
import { AllRoutes } from "./routes/AllRoutes";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_CATEGORY } from "./actions/types";

function App() {
  const { category } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const didMount = useRef(false);

  useEffect(() => {
    let category = JSON.parse(localStorage.getItem("category"));
    dispatch({
      type: ADD_CATEGORY,
      payload: category,
    });
  }, [dispatch]);

  useEffect(() => {
    if (didMount.current) {
      localStorage.setItem("category", JSON.stringify(category));
    } else {
      didMount.current = true;
    }
  }, [category]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/*" element={<AllRoutes />} />
      </Routes>
    </>
  );
}

export default App;
