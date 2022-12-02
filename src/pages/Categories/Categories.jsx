import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CategoryCard } from "../../components";
import { NEWS_CATEGORY } from "../../constants/navigation";
import { CATEGORIES, KEY_FOR_SEARCH } from "../../constants/strings";
import { filterKey } from "../../helper/helper";
import { setNewsCategorySelected } from "../../store/slices/news/newsSlice";

export const Categories = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.news);
  const categories = filterKey(news, KEY_FOR_SEARCH.CATEGORIES);

  const newsByCategory = (category) => {
    const newsByCategorySeleced = news.filter((n) => n.category === category);
    dispatch(setNewsCategorySelected(newsByCategorySeleced));
    navigate(`/${NEWS_CATEGORY}`);
  };

  return (
    <>
      <h1>{CATEGORIES.TITLE}</h1>
      <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {categories?.map((n) => (
          <CategoryCard
            key={n.id}
            category={n.category}
            imageUrl={n.imageUrl}
            onClick={newsByCategory}
          />
        ))}
      </div>
    </>
  );
};
