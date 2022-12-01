/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./carousel.css";
import Slider from "@../../../node_modules/react-slick";
import ReactAudioPlayer from "react-audio-player";
import Button from "@components/ButtonExport/Button";
import Title from "@components/Title/Title";
import Rating from "../rating/Rating";
import NextArrow from "./Arrow/NextArrow";
import PrevArrow from "./Arrow/PrevArrow";
import RecipeName from "./Arrow/RecipeName";

function Carousel({ selectionArray, musicArea }) {
  const [imageIndex, setImageIndex] = useState(0);

  const arrayLength = selectionArray.length;
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="carouselPage">
      <div className={arrayLength < 4 ? "carouselNoSlider" : "carousel"}>
        {arrayLength > 3 ? (
          <>
            <div>
              <RecipeName
                imageIndex={imageIndex}
                selectionArray={selectionArray}
              />
            </div>
            <div
              className={arrayLength < 4 ? "divMinusFour" : "noDivMinusFour"}
            >
              <Slider {...settings}>
                {selectionArray.map((img, idx) => (
                  <div
                    className={
                      idx === imageIndex ? "slide activeSlide" : "slide"
                    }
                  >
                    <img src={img.strMealThumb} alt={img.strMeal} />
                    <div className={idx === imageIndex ? "star" : "noStar"}>
                      <Rating />
                    </div>
                    <Link to={`/Recette/${img.idMeal}`}>
                      <Button
                        content="VIEW RECIPE"
                        myClass={
                          idx === imageIndex ? "viewRecipe" : "viewNoRecipe"
                        }
                      />
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>
          </>
        ) : (
          <div className="noSliderContainer">
            {selectionArray.map((img) => (
              <div className="noSliderOneContainer">
                <Title
                  title={img.strMeal}
                  myClass="recipeNameTitle"
                  myContainerClass="nameNoSliderContainer"
                />
                <div key={img.idx} className="noSlider">
                  <div className="imageNoSlider">
                    <img src={img.strMealThumb} alt={img.strMeal} />
                  </div>
                  <div className="starNoSlider">
                    <Rating />
                  </div>
                  <Link to={`/Recette/${img.idMeal}`}>
                    <Button content="VIEW RECIPE" myClass="recipeNoSlider" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {musicArea && (
        <ReactAudioPlayer
          src={`music/${musicArea}.mp3`}
          autoPlay="true"
          controls
          className="music"
        />
      )}
    </div>
  );
}

Carousel.propTypes = {
  selectionArray: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
  musicArea: PropTypes.string.isRequired,
};

export default Carousel;
