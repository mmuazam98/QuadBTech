import React, { useContext } from "react";
import "../styles/MovieList.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Link } from "react-router-dom";
import MovieContext from "../MovieContext";
const MovieList = () => {
  const { shows } = useContext(MovieContext);

  return (
    <div className="container">
      <div className="movies">
        {shows.map((show, index) => {
          if (index !== 4)
            return (
              <Link key={show.show.id} to={`/${show.show.id}`}>
                <div className="movie">
                  <div className="image">
                    {show.show.image && <img src={show.show.image.medium} alt="movie" />}
                    <div className="rating">
                      <StarBorderIcon /> <span>{show.show.rating.average || "n/a"}</span>
                    </div>
                  </div>
                  <div className="heading">
                    <div className="title">{show.show.name}</div>
                    <span className="language">{show.show.language.substr(0, 3)}</span>
                  </div>
                  <div className="description">
                    <p>{show.show.summary.replace(/(<([^>]+)>)/gi, "")}</p>
                  </div>
                </div>
              </Link>
            );
          else return null;
        })}
      </div>
    </div>
  );
};

export default MovieList;
