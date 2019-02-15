import React, { useContext } from "react";
import ReactDOM from "react-dom";

const GreetContext = React.createContext();

const Greetings = () => {
  const value = useContext(GreetContext);
  return <div>Hello {value}, how are you today?</div>;
};

const App = () => {
  return (
    <GreetContext.Provider value={"Didier"}>
      <Greetings />
    </GreetContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
