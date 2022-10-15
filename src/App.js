import "./App.css";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Category from "./components/category/Category";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
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
