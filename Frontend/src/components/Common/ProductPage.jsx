import { Box, Button, Image, Text, Select, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  
  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) to cart.`);
  };

  return (
    <Box maxW="600px" mx="auto" p="4">
      <Image 
        src="https://via.placeholder.com/300" 
        alt="Product Image" 
        borderRadius="lg" 
      />
      <Heading size="lg" mt="4">Claro Highball Glasses, 17 oz. (Set of 4)</Heading>
      <Text fontSize="xl" fontWeight="bold" mt="2" color="purple.600">$24.49</Text>
      <Text mt="2">Lead-free crystal glassware, BPA-free, dishwasher safe.</Text>
      
      <Flex mt="4" align="center">
        <Text mr="2">Quantity:</Text>
        <Select w="80px" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {[...Array(10)].map((_, i) => (
            <option key={i} value={i + 1}>{i + 1}</option>
          ))}
        </Select>
      </Flex>

      <Button 
        colorScheme="purple" 
        mt="4" 
        width="full" 
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>
    </Box>
  );
};

export default ProductPage;
