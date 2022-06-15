import DetailMovie from "../../components/DetailMovie";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Movies from "../../components/movies/Movies";
import ENDPOINTS from "../../utils/constanst/endpoints";

function Detail() {
  const params = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getRecomendationsMovies();
  }, [params.id]);

  async function getRecomendationsMovies() {
    const response = await axios(ENDPOINTS.DETAIL(params.id));
    setMovies(response.data.results);
  }

  console.log(movies);

  return (
    <>
      <DetailMovie />
      <Movies title="Recomendations" movies={movies} />
    </>
  );
}

export default Detail;
