import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../style/detail.module.css";
function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [showComment, setShowComment] = useState(
    localStorage.getItem(`comments${id}`)
  );
  const [buttonColor, setButtonColor] = useState(false);
  const comments = [];

  function paintComment(newComment) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newComment;
  }
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
  };

  function saveComments() {
    localStorage.setItem(`comments${id}`, JSON.stringify(comments));
  }

  useEffect(() => {
    getMovie();
  }, []);

  const savedComment = localStorage.getItem(`comments${id}`);
  if (savedComment !== null) {
    const parsedComment = JSON.parse(savedComment);
  }

  return (
    <div className={styles.detailBody}>
      <div>
        <img src={`${detail.background_image}`} className={styles.thumb} />
      </div>
      <div className={styles.detailContainer}>
        <h1 className={styles.title}>{detail.title_long}</h1>
        <div className={styles.program_info_box}>
          <span>★{detail.rating}</span>
          <span className={styles.icon_dotted}></span>
          <span>{`${detail.genres}`}</span>
          <span className={styles.icon_dotted}></span>
          <span>{`${detail.runtime}분`}</span>
        </div>
        <span className={styles.story}>{detail.description_full}</span>
        <h1 className={styles.commentTitle}>댓글</h1>
        <ul className={styles.commentList}></ul>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (buttonColor === false) {
              alert("댓글을 입력해주세요.");
            } else {
              const newComment = event.target.comment.value;
              comments.push(newComment);
              paintComment(newComment);
              saveComments();
            }
          }}
        >
          <input
            type="text"
            name="comment"
            placeholder="댓글을 입력해주세요"
            onChange={(event) => {
              setButtonColor(true);
              if (event.target.value === "") {
                setButtonColor(false);
              }
            }}
          ></input>
          <input
            type="submit"
            value="입력"
            className={styles.commentEnter}
            style={{ backgroundColor: buttonColor ? "blue" : "" }}
          ></input>
        </form>
      </div>
    </div>
  );
}
export default Detail;
