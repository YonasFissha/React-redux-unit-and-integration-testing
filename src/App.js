import React from "react";
import Header from "./components/header/index";
import Headline from "./components/headline";
import GetPostButton from "./components/button";
import Post from "./components/Post";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import "./app.css";
import { useSelector } from "react-redux";
function App() {
  const todo = useSelector((state) => state.postsReducer);
  return (
    <div className="App">
      <Header />
      <Divider />
      <Container maxWidth="sm" className="main">
        <Headline header={"Posts"} desc="Click the button to render posts" />
        <GetPostButton buttonText="Get Posts" />
        <Divider />
        {todo
          ? todo.map((to) => {
              return <Post title={to.title} desc={to.body} />;
            })
          : null}
      </Container>
    </div>
  );
}

export default App;
