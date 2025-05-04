import React, { useState, useEffect } from "react";
import UserForm from "./component/UserForm";
import Greeting from "./component/Greeting";

const App = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    console.log("App Mounted");

    return () => {
      console.log("App Unmounted");
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Mini Project</h1>
      <UserForm setUserName={setUserName} />
      {userName && <Greeting name={userName} />}
    </div>
  );
};

export default App;
