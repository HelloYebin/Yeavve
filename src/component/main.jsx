import { useEffect, useState } from "react";
import img from "../image/logo.png";
import styles from "../style/main.module.css";

function Main() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    )
      .then((response) => response.json())
      .then((json) => setMovies(json.data.movies));
    console.log(movies);
  }, []);

  return (
    <div>
      <div className={styles.moviesTop}>
        <a className={styles.topic}>실시간 인기 프로그램</a>
        <a className={styles.more}>더보기 ＞</a>
      </div>
      <section className={styles.movies}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.movie}>
            <div className={styles.imgBox}>
              <img src={movie.medium_cover_image} className={styles.movieImg} />
            </div>
            <a>
              {movie.title.length > 27
                ? `${movie.title.slice(0, 27)}...`
                : movie.title}
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}
export default Main;
