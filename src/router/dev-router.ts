import { createHashRouter, createBrowserRouter } from "react-router-dom";
import { devRoutes } from "./index";

export const createDevRouter = createHashRouter(devRoutes);

export const createAppRouter = createBrowserRouter(devRoutes);
