import React, { useState } from "react";
import { Box, Flex, Text, Image, Button, IconButton, Stack } from "@chakra-ui/react";
// import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import WithStyles from "./WithStyles";

const ProductSlider = ({ products }) => {
  return (
    <Stack spaceX={"10px"} >
      <Carousel 
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite={false}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 6,
          partialVisibilityGutter: 80,
          
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={2}
      swipeable
    >
      {
        // image,title,price,mrp,tag=""
        products.map((product) => {
          return (
            <WithStyles 
              key={product.id}
              image={product.image}
              title={product.name}
              price={product.price}
              mrp={product.originalPrice}
              tag={""}
            />
          );
        })
      }
    </Carousel>
    </Stack>
  );
};

export default ProductSlider;
