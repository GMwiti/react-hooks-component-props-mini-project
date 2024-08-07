import React from 'react'

function HeaderElement(blogHeader){
  const {name} = blogHeader
    return(
      <header>
  <h1>{name}</h1>
  </header>
    );
}

export default HeaderElement 