import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components";
import {
  ANY_ROUTE,
  ARTICLE_VIEW,
  CATEGORIES,
  NEWS_CATEGORY,
  RECENT_NEWS,
  TOP_RATED,
} from "../constants/navigation";
import { ArticleView } from "../pages/ArticleView/ArticleView";
import { Categories } from "../pages/Categories/Categories";
import { NewsByCategory } from "../pages/NewsByCategory/NewsByCategory";
import { RecentNews } from "../pages/RecentNews/RecentNews";
import { TopRated } from "../pages/TopRated/TopRated";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <div className='m-2'>
        <Routes>
          <Route path={CATEGORIES} element={<Categories />} />
          <Route path={RECENT_NEWS} element={<RecentNews />} />
          <Route path={TOP_RATED} element={<TopRated />} />
          <Route path={NEWS_CATEGORY} element={<NewsByCategory />} />
          <Route path={`${ARTICLE_VIEW}/:id`} element={<ArticleView />} />
          <Route path={ANY_ROUTE} element={<Categories />} />
        </Routes>
      </div>
    </>
  );
};
