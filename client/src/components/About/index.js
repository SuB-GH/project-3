import React from 'react';
import coverImage from "../../assets/cover-image.jpg";

function About() {
  return (
    <section className='about'>
      <img src={coverImage} style={{ width: "100%" }} alt="cover" />
      <div className="cover-info">
        <p>
          This is all the info we want to add about the site!
        </p>
      </div>
    </section>
  );
}

export default About;