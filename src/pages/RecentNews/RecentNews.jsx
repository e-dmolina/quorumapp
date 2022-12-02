import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NewsList } from "../../components/NewsList";
import { ARTICLE_VIEW } from "../../constants/navigation";
import { KEY_FOR_SEARCH } from "../../constants/strings";
import { orderByDate } from "../../helper/helper";

export const RecentNews = () => {
  const { news } = useSelector((state) => state.news);
  const recentNews = orderByDate(news, KEY_FOR_SEARCH.RECENT_NEWS);
  const navigate = useNavigate();

  const handleClick = (id) => navigate(`/${ARTICLE_VIEW}/${id}`);

  return <NewsList news={recentNews} onClick={handleClick} />;
};
