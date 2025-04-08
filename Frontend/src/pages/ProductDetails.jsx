import { Box, Button, Image, Text, Select, Flex, Heading, Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (loading) return <Spinner size="xl" />;

  return (
    <Box maxW="600px" mx="auto" p="4">
      <Image src={product.image} alt={product.name} borderRadius="lg" />
      <Heading size="lg" mt="4">{product.name}</Heading>
      <Text fontSize="xl" fontWeight="bold" mt="2" color="purple.600">${product.price}</Text>
      <Text mt="2">{product.description}</Text>
      
      <Flex mt="4" align="center">
        <Text mr="2">Quantity:</Text>
        <Select w="80px" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {[...Array(10)].map((_, i) => (
            <option key={i} value={i + 1}>{i + 1}</option>
          ))}
        </Select>
      </Flex>

      <Button colorScheme="purple" mt="4" width="full">Add to Cart</Button>
    </Box>
  );
};

export default ProductPage;
