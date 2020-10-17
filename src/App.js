import React from "react";
import Header from "./components/header/index";
import Headline from "./components/headline";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import "./app.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Divider />
      <Container maxWidth="sm" className="main">
        <Headline header={"Posts"} desc="Click the button to render posts" />
        <Divider />
      </Container>
    </div>
  );
}

export default App;
