export const getAllNews = async () => {
  const response = await fetch(process.env.REACT_APP_API_URL);
  const res = await response.json();
  return Object.values(res);
};
