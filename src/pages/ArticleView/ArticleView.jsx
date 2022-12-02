import React, { useEffect, useState } from "react";
import { FaCalendar, FaRss } from "react-icons/fa";
import { HiEye } from "react-icons/hi";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { formateYearMonthDay } from "../../helper/helper";

export const ArticleView = () => {
  const { id } = useParams();

  const [article, setArticle] = useState({});
  const { news } = useSelector((state) => state.news);

  useEffect(() => {
    const findArticle = () => news.find((n) => n.id === id);
    setArticle(findArticle());
  }, [news, id]);

  return (
    <div className='m-2'>
      <div className='card-body'>
        <h1 className='card-title'>{article.title}</h1>
        <div className='d-flex justify-content-evenly m-2'>
          <div className='card-text d-flex'>
            <FaCalendar style={{ margin: 3 }} />
            <p>{formateYearMonthDay(article.createdAt, "-")}</p>
          </div>
          <div className='card-text d-flex'>
            <HiEye style={{ margin: 3 }} />
            <p>{article.views}</p>
          </div>
          <div className='card-text d-flex'>
            <FaRss style={{ margin: 3 }} />
            <p>{article.category}</p>
          </div>
        </div>
        <img
          src={article.imageUrl}
          className='card-img-top px-5 mb-2'
          alt={article.title}
        />
        <h5
          className='card-title my-2'
          style={{ fontFamily: "Helvetica Neue", fontweight: "bold" }}
        >
          {article.subtitle}
        </h5>
        <p
          className='card-text'
          style={{ fontFamily: "Helvetica Neue Regular" }}
        >
          {article.body}
        </p>
      </div>
    </div>
  );
};
