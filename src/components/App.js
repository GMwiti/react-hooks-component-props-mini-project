import React from "react";
import blogData from "../data/blog";
import HeaderElement from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
     <HeaderElement name={blogData.name}/>
     <About about= {blogData.about} image={blogData.image}/>
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}


export default App;
