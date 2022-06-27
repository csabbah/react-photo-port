import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

const About = ({ string }) => {
  return (
    <section className="my-5">
      <h1 id="about">{string}</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: '100%' }}
        alt="cover"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
        repudiandae atque natus commodi eius iste repellat eaque eum molestiae
        at.
      </p>
    </section>
  );
};

export default About;
