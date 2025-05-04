import React, { useEffect } from "react";

const Greeting = ({ name }) => {
  useEffect(() => {
    console.log(`Greeting component mounted for ${name}`);
    return () => console.log("Greeting unmounted");
  }, [name]);

  return <h2>Hello, {name}! 👋</h2>;
};

export default Greeting;
