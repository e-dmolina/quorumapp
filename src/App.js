import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { AppRouter } from "./router/AppRouter";
import { fetchNews } from "./store/slices/news/newsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return <AppRouter />;
}

export default App;
