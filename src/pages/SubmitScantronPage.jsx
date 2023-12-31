import React, { useState } from "react";

export const SubmitScantronPage = () => {
  const [file, setFile] = useState();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="scantron-submit">
      <h1>Submit a Scantron!</h1>
      <h2>Add Image:</h2>
      <input type="file" onChange={handleChange} />
      <img src={file} />
    </div>
  );
};
