import React, { useState, useEffect } from "react";

const UserForm = ({ setUserName }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(input);
  };

  useEffect(() => {
    console.log("UserForm Mounted/Updated");
    return () => {
      console.log("UserForm Cleanup");
    };
  }, [input]);

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter Your Name: </label>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
