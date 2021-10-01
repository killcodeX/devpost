import Layout from "../components/layout";
import Seo from "../components/seo";
import Articles from "../components/articles";
import { fetchAPI } from "../lib/api";

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      <div className="container">
        <Articles articles={articles} />
      </div>
    </Layout>
  );
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
