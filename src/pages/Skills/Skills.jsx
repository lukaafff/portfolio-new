import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import style from './Skills.module.css';
import icons from './icons.js';

function Skills() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };

  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000
  };

  return (
    <section className={style.container}>
      <div className="titleWrapper">
        <h1 className="backgroundTitle">SKILLS</h1>
        <h2 className="foregroundTitle">SKILLS</h2>
      </div>

      <Slider {...settings} className={style.slider}>
        {icons.slice(0, 6).map((icon, index) => (
          <div key={index} className={style.gridWrapper}>
            <div key={index} className={style.skillItem}>
              <img src={icon.src} alt={icon.alt} className={style.icon} />
              <span className={style.iconName}>{icon.alt}</span>
            </div>
          </div>
        ))}
      </Slider>

      <Slider {...settings2} className={style.slider}>
        {icons.slice(6, 12).map((icon, index) => (
          <div key={index} className={style.gridWrapper}>
            <div key={index} className={style.skillItem}>
              <img src={icon.src} alt={icon.alt} className={style.icon} />
              <span className={style.iconName}>{icon.alt}</span>
            </div>
          </div>
        ))}
      </Slider>

      <Slider {...settings} className={style.slider}>
        {icons.slice(12, 18).map((icon, index) => (
          <div key={index} className={style.gridWrapper}>
            <div key={index} className={style.skillItem}>
              <img src={icon.src} alt={icon.alt} className={style.icon} />
              <span className={style.iconName}>{icon.alt}</span>
            </div>
          </div>
        ))}
      </Slider>

    </section>
  );
}

export default Skills;
