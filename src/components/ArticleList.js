import React from 'react';
import Article from "./Article"

function ArticleList (blogPosts){
  const {posts = []}=blogPosts
    return(
        <main>
     {posts.map((post)=>{
        return <Article key={post.id} post={post}/>
     })}
        </main>
    )
}

export default ArticleList