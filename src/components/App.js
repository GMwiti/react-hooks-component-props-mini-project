import React from "react";
import blogData from "../data/blog";
import HeaderElement from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
     <HeaderElement blogHeader={blogData}/>
     <About blogAbout = {blogData}/>
      <ArticleList blogPosts={blogData}/>
    </div>
  );
}


export default App;
