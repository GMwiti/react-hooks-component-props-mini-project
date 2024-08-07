import React from 'react';

function Article (blogArticle){
    const {title,date = "January 1, 1970",preview} = blogArticle
    return(
        <article>
       <h3>{title}</h3>
       <small>{date}</small>
       <p>{preview}</p>
       </article>
    )
}
export default Article