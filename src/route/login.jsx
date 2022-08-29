import styles from "../style/login.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login({ changeLog }) {
  const navigate = useNavigate();
  function onLogin(event) {
    event.preventDefault();
    const idInput = event.target.id.value;
    const idValue = localStorage.getItem("id");
    const passwordInput = event.target.password.value;
    const passwordValue = localStorage.getItem("password");
    if (idInput === idValue && passwordInput === passwordValue) {
      alert(`${idValue}님 로그인에 성공하였습니다.`);
      changeLog(true);
      navigate("/Yeavve");
    } else {
      alert("로그인에 실패하였습니다. 다시 입력해주세요.");
    }
  }
  return (
    <div>
      <div className={styles.login}>
        <div className={styles.loginPage}>
          <h1 className={styles.loginH1}>로그인</h1>
          <h3>yeavve 계정으로 로그인</h3>
          <form className={styles.loginForm} onSubmit={onLogin}>
            <input
              type="text"
              placeholder="아이디 주소 또는 아이디"
              maxLength="25"
              name="id"
            />
            <input
              type="password"
              placeholder="비밀번호"
              name="password"
              maxLength="15"
            />
            <input
              type="submit"
              value="로그인"
              className={styles.loginBtn}
            ></input>
          </form>
          <ul className={styles.loginLinks}>
            <li>아이디 찾기</li>
            <li>비밀번호 찾기</li>
            <li>
              <Link to="/Yeavve/join" className={styles.joinBtn}>
                회원가입
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Login;
