import React from "react";
import { firstChartUppercase, formateYearMonthDay } from "../../helper/helper";
import { FaRss, FaCalendar } from "react-icons/fa";
import { HiEye } from "react-icons/hi";
import { COMMON_CARD } from "../../constants/strings";

export const CommonCard = ({
  id,
  title,
  thumbnailUrl,
  category,
  views,
  createdAt,
  onClick,
}) => {
  return (
    <div className='col' style={{ minWidth: 300 }}>
      <div className='card'>
        <img
          src={thumbnailUrl}
          className='card-img-top'
          alt={title}
          height='500rem'
        />
        <div className='card-body pb-0'>
          <h5
            className='card-title'
            style={{ fontFamily: "Helvetica Neue", fontweight: "bold" }}
          >
            {title}
          </h5>
          <div className='d-flex justify-content-between'>
            <div className='card-text d-flex' style={{ width: "40%" }}>
              <FaRss style={{ margin: 3 }} />
              <p>{firstChartUppercase(category)}</p>
            </div>
            <div className='card-text d-flex' style={{ marginRight: 40 }}>
              <HiEye style={{ margin: 3 }} />
              <p>{views}</p>
            </div>
          </div>
        </div>
        <div className='card-footer d-flex justify-content-between'>
          <div className='card-text d-flex'>
            <FaCalendar style={{ margin: 3 }} />
            <p>{formateYearMonthDay(createdAt, "/")}</p>
          </div>
          <button
            onClick={() => onClick(id)}
            className='btn'
            style={{
              backgroundColor: "rgb(161, 117, 211)",
              color: "rgb(255, 255, 255)",
              cursor: "pointer",
              marginRight: 30,
            }}
          >
            {COMMON_CARD.BUTTON_TEXT}
          </button>
        </div>
      </div>
    </div>
  );
};
