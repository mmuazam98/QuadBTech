import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import MovieContext from "../MovieContext";
import "../styles/MovieInfo.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
const MovieInfo = () => {
  const { shows } = useContext(MovieContext);
  const location = useLocation();
  const [show, setShow] = useState();
  useEffect(() => {
    const id = parseInt(location.pathname.substr(1));
    const movie = shows.filter((mov) => {
      console.log(mov.show.id === id);
      return mov.show.id === id;
    });
    console.log(movie);
    setShow(movie[0]);
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container list">
      <Link to="/">
        <ArrowBackIcon className="back-btn" />
      </Link>
      {show ? (
        <div className="movie-container">
          <div className="column">
            <div className="image-container">
              <img src={show.show.image.original} alt="" />
            </div>
          </div>
          <div className="column">
            <div className="content">
              <div className="movie-title">
                <h2>{show.show.name}</h2>
                <div className="movie-rating">
                  <StarBorderIcon /> <span>{show.show.rating.average || "n/a"}</span>
                </div>
              </div>
              <div className="info">
                <div className="item">{show.show.premiered.split("-")[0]}</div>-<div className="item">{show.show.language}</div>
              </div>
              <div className="genre-container">
                {show.show.genres.map((e, index) => {
                  return (
                    <span key={index} class="genre">
                      {e}
                    </span>
                  );
                })}
              </div>

              <div className="movie-description">
                <p>{show.show.summary.replace(/(<([^>]+)>)/gi, "")}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MovieInfo;
