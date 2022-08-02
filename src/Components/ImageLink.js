import react from "react";
function ImageLink(props) {
  return <div className="ImageLink container mt-5 pt-5">
  <label htmlFor="basic-url " className="form-label text-white"><h2>number of image urls you have entered</h2><h4>your current rank is </h4> <h4>5</h4></label>
  <div className="input-group mb-3">
    <span className="input-group-text" id="basic-addon3">image link </span>
    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" onChange={() => {props.onInputChange}} />
    <span className="input-group-text" id="basic-addon3"><button type="button" className="btn btn-outline-dark">submit</button></span>
  </div> </div>;
}

export default ImageLink;
