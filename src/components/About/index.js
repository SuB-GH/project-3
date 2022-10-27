import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";
function About() {
  return (
    <section>
      <h1 id="about">Inspired Travels</h1>
      <img src={coverImage} style={{ width: "100%" }} alt="cover" />
    </section>
  );
}

export default About;