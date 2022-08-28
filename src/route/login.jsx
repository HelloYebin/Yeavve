import Footer from "../component/footer";
import Header from "../component/header";
import styles from "../style/login.module.css";
import { Link } from "react-router-dom";

function Login(usersInfo) {
  function onLogin(event) {
    event.preventDefault();
    const idValue = localStorage.getItem("users");
    console.log(idValue);
  }
  return (
    <div>
      <Header />
      <div className={styles.login}>
        <div className={styles.loginPage}>
          <h1 className={styles.loginH1}>로그인</h1>
          <h3>yeavve 계정으로 로그인</h3>
          <form className={styles.loginForm}>
            <input
              type="text"
              placeholder="아이디 주소 또는 아이디"
              maxLength="25"
              name="id"
            />
            <input type="password" placeholder="비밀번호" maxLength="15" />
            <input
              type="submit"
              value="로그인"
              className={styles.loginBtn}
              name="password"
              onClick={onLogin}
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
      <Footer />
    </div>
  );
}
export default Login;
