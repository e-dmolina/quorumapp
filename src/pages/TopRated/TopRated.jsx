import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NewsList } from "../../components/NewsList";
import { ARTICLE_VIEW } from "../../constants/navigation";
import { KEY_FOR_SEARCH } from "../../constants/strings";
import { orderByKey } from "../../helper/helper";

export const TopRated = () => {
  const { news } = useSelector((state) => state.news);
  const navigate = useNavigate();

  const handleClick = (id) => navigate(`/${ARTICLE_VIEW}/${id}`);
  const topRated = orderByKey(news, KEY_FOR_SEARCH.TOP_RATED, 9);

  return <NewsList news={topRated} onClick={handleClick} />;
};
