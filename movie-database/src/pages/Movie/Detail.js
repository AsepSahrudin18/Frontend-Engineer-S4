import DetailMovie from "../../components/DetailMovie";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Movies from "../../components/movies/Movies";
import ENDPOINTS from "../../utils/constanst/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../Features/MoviesSlice";

function Detail() {
  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    getRecomendationsMovies();
  }, [params.id]);

  async function getRecomendationsMovies() {
    const response = await axios(ENDPOINTS.DETAIL(params.id));

    dispatch(updateMovies(response.data.results));
  }

  return (
    <>
      <DetailMovie />
      <Movies title="Recomendations" />
    </>
  );
}

export default Detail;
