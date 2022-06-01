import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "../pages/private/home";
import Login from "../pages/login";
// import Department from "../pages/department";

function Routers() {
  const isAuth = false;
  const PublicRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    );
  };

  // const PrivateRoutes = () => {
  //   return (
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/department" element={<Department />} />
  //     </Routes>
  //   );
  // };

  return (
    <BrowserRouter>
      <PublicRoutes />
      {/* {isAuth ? <PrivateRoutes /> : <PublicRoutes />} */}
    </BrowserRouter>
  );
}

export { Routers };
