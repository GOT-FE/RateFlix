import { useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const MovieDetail = () => {
  const { movieId } = useParams();

  return (
    <>
      <Layout />
      <div>
        <h2>Movie ID: {movieId}</h2>
      </div>
    </>
  );
};

export default MovieDetail;
