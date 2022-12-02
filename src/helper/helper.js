import dayjs from "dayjs";

export const filterKey = (array, key) => {
  let auxArray = [];
  let categoriesArray = [];
  array.forEach((n) => {
    if (!auxArray.includes(n[key])) {
      auxArray.push(n[key]);
      categoriesArray.push(n);
    }
  });
  return categoriesArray;
};

export const orderByKey = (array, key, top = 10) => {
  const arrayCopy = [...array];
  return arrayCopy
    .sort((a, b) => {
      return b[key] - a[key];
    })
    .filter((_, index) => index < top);
};

export const orderByDate = (array, key, top = 10) => {
  const arrayCopy = [...array];
  return arrayCopy
    .sort((a, b) => new Date(b[key]) - new Date(a[key]))
    .filter((_, index) => index < top);
};

export const formateYearMonthDay = (dateString, separator) =>
  dayjs(dateString).format(`YYYY${separator}MM${separator}DD`);

export const firstChartUppercase = (word) =>
  word.charAt(0).toUpperCase() + word.slice(1);
