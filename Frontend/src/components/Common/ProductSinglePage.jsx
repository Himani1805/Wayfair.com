import React from "react";
import { Box, Image, Text, Button, Flex, Select, Badge } from "@chakra-ui/react";
// import { useCart } from "./CartContext";

const ProductSinglePage = ({ product }) => {
  // const { addToCart } = useCart();

  return (
    <Box maxW="900px" mx="auto" p={5}>
      <Flex gap={6}>
        {/* Product Image */}
        <Box flex="1">
          <Image src={product.image} alt={product.name} borderRadius="md" />
          <Flex mt={3} gap={2}>
            {product.extraImages?.map((img, idx) => (
              <Image key={idx} src={img} alt={`Extra ${idx}`} boxSize="50px" borderRadius="md" />
            ))}
          </Flex>
        </Box>
        
        {/* Product Details */}
        <Box flex="2">
          <Text fontSize="2xl" fontWeight="bold">{product.name}</Text>
          <Text fontSize="lg" color="gray.600">{product.brand}</Text>
          <Badge colorScheme="purple" my={2}>{product.discount}% Off</Badge>
          <Text fontSize="xl" fontWeight="bold">${product.price}</Text>
          <Text as="s" color="gray.500">${product.originalPrice}</Text>

          {/* Color Options */}
          <Text mt={3} fontWeight="bold">Color: {product.color}</Text>
          <Flex gap={2} mt={1}>
            {product.availableColors?.map((clr, idx) => (
              <Box key={idx} boxSize="20px" bg={clr} borderRadius="full" border="1px solid black" cursor="pointer" />
            ))}
          </Flex>

          {/* Quantity Selection */}
          {/* <Flex mt={4} align="center">
            <Text fontWeight="bold" mr={2}>Quantity:</Text>
            <Select w="100px">
              {[1, 2, 3, 4, 5].map((q) => (
                <option key={q} value={q}>{q}</option>
              ))}
            </Select>
          </Flex> */}

          {/* Add to Cart Button */}
          <Button mt={5} colorScheme="purple" w="full" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>

          {/* Product Description */}
          <Text mt={6} fontWeight="bold">Description</Text>
          <Text color="gray.600">{product.description}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductSinglePage;
