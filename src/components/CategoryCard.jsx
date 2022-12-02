import React from "react";
import { firstChartUppercase } from "../helper/helper";

export const CategoryCard = ({ category, onClick }) => {
  const imageUrl = `/assets/img/Thumbnail_channel_${category}@3x.png`;

  return (
    <div className='col'>
      <div className='card'>
        <div className='row no-gutters'>
          <img src={imageUrl} className='card-img-top' alt={category} />
          <div className='card-body'>
            <h5
              onClick={() => onClick(category)}
              className='card-title px-3 pt-2'
              style={{
                color: "rgb(161, 117, 211)",
                cursor: "pointer",
                fontFamily: "Helvetica Neue",
                fontweight: "bold",
                fontSize: "12pt",
              }}
            >
              {firstChartUppercase(category)}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
