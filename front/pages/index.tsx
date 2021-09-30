import { useDispatch } from "react-redux";
import { fetchAPI } from "../lib/api";
import { getCategory } from "../redux/actions/actions";

const Home = ({ articles, categories, homepage }) => {
  const dispatch = useDispatch();

  dispatch(getCategory(categories));
  return <div className="container">bhai</div>;
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
}

export default Home;
