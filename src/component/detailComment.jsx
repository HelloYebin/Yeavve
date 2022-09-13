import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "../style/detailComment.module.css";

function DetailComment() {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
  };
  let lis = [];

  const savedComment = localStorage.getItem(`comments${id}`);
  if (savedComment !== null) {
    const parsedComment = JSON.parse(savedComment);
    lis = parsedComment;
    for (let i = 0; i < parsedComment.length; i++) {
      lis.push(<li key={i}>{parsedComment[i]}</li>);
    }
  }

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      <ul className={styles.commentList}>{lis}</ul>
    </>
  );
}
export default DetailComment;
