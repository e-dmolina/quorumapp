import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NewsList } from "../../components/NewsList";
import { ARTICLE_VIEW } from "../../constants/navigation";

export const NewsByCategory = () => {
  const navigate = useNavigate();

  const { newsByCategorySelected } = useSelector((state) => state.news);
  const handleClick = (id) => navigate(`/${ARTICLE_VIEW}/${id}`);

  return <NewsList news={newsByCategorySelected} onClick={handleClick} />;
};
