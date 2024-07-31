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
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="skills" className={style.container}>
      <div className="titleWrapper">
        <h1 className="backgroundTitle">HABILIDADES</h1>
        <h2 className="foregroundTitle">HABILIDADES</h2>
      </div>

      <Slider {...settings} className={style.slider}>
        {icons.slice(0, 6).map((icon, index) => (
          <div key={index}>
            <div key={index} className={style.skillItem}>
              <img src={icon.src} alt={icon.alt} className={style.icon} />
              <span className={style.iconName}>{icon.alt}</span>
            </div>
          </div>
        ))}
      </Slider>

      <Slider {...settings2} className={style.slider}>
        {icons.slice(6, 12).map((icon, index) => (
          <div key={index}>
            <div key={index} className={style.skillItem}>
              <img src={icon.src} alt={icon.alt} className={style.icon} />
              <span className={style.iconName}>{icon.alt}</span>
            </div>
          </div>
        ))}
      </Slider>

      <Slider {...settings} className={style.slider}>
        {icons.slice(12, 18).map((icon, index) => (
          <div key={index}>
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
