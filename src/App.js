import "./App.css";
import Header from "./component/header";
import Main from "./component/main";
import Banner from "./component/banner";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Main topic={"인기영화"} detail={"minimum_rating=8"} />
      <Main topic={"평점 9점이상의 명작영화"} detail={"minimum_rating=9"} />
      <Main
        topic={"다음 이야기가 궁금해지는 미스터리물"}
        detail={"minimum_rating=8&genre=Thriller"}
      />
      <Main
        topic={"가족과 함께 보는 영화"}
        detail={"minimum_rating=8&genre=Family"}
      />
    </div>
  );
}

export default App;
