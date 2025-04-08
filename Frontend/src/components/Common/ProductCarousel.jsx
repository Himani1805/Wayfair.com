import React, { useState } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import ProductCard from './ProductCard'; // Import your ProductCard component

const ProductCarousel = ({ products }) => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleProductsCount = 5;

    const endIndex = (startIndex + visibleProductsCount) % products.length;

    const visibleProducts =
        endIndex > startIndex
            ? products.slice(startIndex, endIndex)
            : [...products.slice(startIndex), ...products.slice(0, endIndex)];

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + visibleProductsCount) % products.length);
    };

    const handlePrevious = () => {
        setStartIndex((prevIndex) =>
            (prevIndex - visibleProductsCount + products.length) % products.length
        );
    };

    return (
        <Box w="100%" overflow="hidden" position="relative">
            <Flex align="center" position="relative" w="100%">
                {/* Previous Button */}
                <Button
                    position="absolute"
                    top="30%"
                    left="10"
                    transform="translateY(-50%)"
                    onClick={handlePrevious}
                    zIndex="10"
                >
                    -
                </Button>

                {/* Product Cards */}
                <Flex
                    wrap="nowrap"
                    gap="0"
                    w="100%"
                    overflow="hidden"
                    justify="flex-start"
                // height={"400px"}
                >
                    {visibleProducts.map((product) => (
                        <Box key={product.id} flex="0 0 calc(100% / 5)"  >
                            {/* Set each card to take equal width */}
                            <ProductCard product={product} />
                        </Box>
                    ))}
                </Flex>

                {/* Next Button */}
                <Button
                    position="absolute"
                    top="30%"
                    right="10%"
                    transform="translateY(-50%)"
                    onClick={handleNext}
                    zIndex="10"
                >
                    +
                </Button>
            </Flex>
        </Box>
    );
};

export default ProductCarousel;