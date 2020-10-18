import React from "react";
import Header from "./components/header/index";
import Headline from "./components/headline";
import GetPostButton from "./components/button";
import Post from "./components/Post";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import "./app.css";
import { connect } from "react-redux";
function App({ posts }) {
  return (
    <div className="App" data-test="appComponent">
      <Header />
      <Divider />
      <Container maxWidth="sm" className="main">
        <Headline header={"Posts"} desc="Click the button to render posts" />
        <GetPostButton buttonText="Get Posts" />
        <Divider />
        {posts
          ? posts.map((post) => {
              return <Post title={post.title} desc={post.body} />;
            })
          : null}
      </Container>
    </div>
  );
}
function mapStatetoProps(state) {
  return {
    posts: state.postsReducer,
  };
}
export default connect(mapStatetoProps)(App);
