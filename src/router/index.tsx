import React from "react";
import { createRoutesFromElements, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";

export const routesConfig = (prefixPath: string) => {
  return {
    prefixPath,
    elements: (
      <>
        <Route path={`${prefixPath}/`} element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </>
    ),
  };
};

export const devRoutes = createRoutesFromElements(routesConfig("/").elements);

// eslint-disable-next-line react/display-name
export default () => {
  return <Routes>{routesConfig("").elements}</Routes>;
};
