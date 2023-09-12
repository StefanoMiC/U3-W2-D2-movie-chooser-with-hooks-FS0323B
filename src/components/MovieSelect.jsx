import { Form } from "react-bootstrap";

const MovieSelect = props => {
  return (
    <>
      <Form.Label className="display-4 mt-5">Scegli un film</Form.Label>
      <Form.Select onChange={props.changeMovieTitle}>
        {/* e => {this.setState({ movieTitle: e.target.value })} */}
        <option>Iron Man</option>
        <option>Black Panther</option>
        <option>Doctor Strange</option>
        <option>The Batman</option>
        <option>Spiderman</option>
        <option>Wonder Woman</option>
        <option>Black Widow</option>
      </Form.Select>
    </>
  );
};
export default MovieSelect;
