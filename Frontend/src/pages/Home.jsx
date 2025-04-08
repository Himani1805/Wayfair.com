import { Box, Grid, Image, Text, Button, Heading, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/products") // Backend API URL
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  if (loading) return <Spinner size="xl" m="auto" display="block" mt="20" />;

  return (
    <Box maxW="1200px" mx="auto" p="4">
      <Heading mb="6" textAlign="center">Our Products</Heading>
      <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap="6">
        {products.map((product) => (
          <Box key={product._id} p="4" borderWidth="1px" borderRadius="lg" textAlign="center">
            <Image src={product.image} alt={product.name} borderRadius="md" mb="2" />
            <Text fontWeight="bold" fontSize="lg">{product.name}</Text>
            <Text color="purple.600" fontWeight="bold" mt="1">${product.price}</Text>
            <Button 
              mt="3" 
              colorScheme="purple" 
              onClick={() => navigate(`/product/${product._id}`)}
            >
              View Details
            </Button>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
