import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./app/pages/HomePage";
import AdminLoginPage from "./app/pages/AdminLoginPage";
import "./index.css";

import PopularRoutesPage from "./app/pages/GetInspiredPage/PopularRoutesPage";
import BlogPage from "./app/pages/GetInspiredPage/Blog";
import ContactPage from "./app/pages/CantactPage";
import RecipesPage from "./app/pages/GetInspiredPage/Recipes";

import VanDetailPage from "./app/pages/CampervansPage/VanDetailPage";
import CampervansPage from "./app/pages/CampervansPage";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />

        <Route path="/campervans">
          <Route index element={<CampervansPage />}/>
          <Route path=":id" element={<VanDetailPage />} />
        </Route>
        
        <Route
          path="/get-inspired/popular-routes"
          element={<PopularRoutesPage />}
        />
        <Route path="/get-inspired/blog" element={<BlogPage />} />
        <Route path="/get-inspired/recipes" element={<RecipesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        <Route path="/admin" element={<AdminLoginPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

