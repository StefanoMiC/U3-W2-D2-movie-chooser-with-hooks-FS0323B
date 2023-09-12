import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieSelect from "./components/MovieSelect";

const App = () => {
  // state = {
  //   movieTitle: "Iron Man"
  // };

  const [movieTitle, setMovieTitle] = useState("Iron Man");

  const changeMovieTitle = e => {
    // this.setState({ movieTitle: e.target.value });
    setMovieTitle(e.target.value);
  };

  console.log("App RENDER State: ", movieTitle);
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} lg={4}>
            <MovieSelect changeMovieTitle={changeMovieTitle} />
          </Col>

          <Col xs={12} lg={4}>
            <MovieCard movieTitle={movieTitle} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
