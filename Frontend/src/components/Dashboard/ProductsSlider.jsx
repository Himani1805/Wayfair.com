import { useState, useEffect } from "react";
import { Box, Button, Image, Text, Flex } from "@chakra-ui/react";

const ProductSlider = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <Box position="relative" w="full" maxW="600px" mx="auto" overflow="hidden" p={4}>
      <Flex justify="center" align="center">
        {products.map((product, index) => (
          <Box
            key={product.id}
            display={index === currentIndex ? "block" : "none"}
            textAlign="center"
            transition="opacity 0.5s ease-in-out"
          >
            <Image src={product.image} alt={product.name} boxSize="300px" objectFit="cover" mx="auto" />
            <Text mt={2} fontSize="lg" fontWeight="bold">
              {product.name}
            </Text>
          </Box>
        ))}
      </Flex>
      <Button position="absolute" left="0" top="50%" transform="translateY(-50%)" onClick={prevSlide}>
        {"<"}
      </Button>
      <Button position="absolute" right="0" top="50%" transform="translateY(-50%)" onClick={nextSlide}>
        {">"}
      </Button>
    </Box>
  );
};

export default ProductSlider;
