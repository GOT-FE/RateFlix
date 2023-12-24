import Layout from "../components/Layout/Layout";
import Movie from "../components/Movie/Movie";
import MovieList from "../components/Movie/MovieList";

const Home = () => {
  return (
    <Layout>
      <MovieList />
      <MovieList />
      <MovieList />
    </Layout>
  );
};
export default Home;
