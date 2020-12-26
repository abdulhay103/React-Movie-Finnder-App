import React from "react";

const MovieSearchBox = (props) => {
  console.log(props.value);
  return (
    <div className="col col-sm-4">
      <input
        className="from-control"
        value={props.value}
        placeholder="Type to search..."
        onChange={(e) => props.setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default MovieSearchBox;
