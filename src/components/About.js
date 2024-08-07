import React from 'react';


function About (blogAbout){
    const { image = "https://via.placeholder.com/215", about } = blogAbout;
    return(
        <aside>
            <img src={image} alt="blog logo"/>
            <p>{about}</p>
        </aside>
    );
}
export default About

