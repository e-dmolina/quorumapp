import React from "react";
import { CommonCard } from "./CommonCard/CommonCard";

export const NewsList = ({ news, onClick }) => {
  return (
    <div className='row rows-cols-1 row-cols-md-3 g-5'>
      {news?.map((n) => {
        return <CommonCard key={n.id} {...n} onClick={onClick} />;
      })}
    </div>
  );
};
