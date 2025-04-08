import React from "react";
import {
  Box,
  Heading,
  Text,
  Input,
  Select,
  Checkbox,
  VStack,
  HStack,
  Divider,
  Button,
  Link,
  Flex,
  Grid,
  GridItem
} from "@chakra-ui/react";

const SecureCheckout = () => {
  return (
    <Box maxW="container.lg" mx="auto" p={6}>
      <Heading as="h1" size="lg" mb={6}>Secure Checkout</Heading>
      
      <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={8}>
        {/* Left Column - Shipping Info */}
        <GridItem>
          <Box bg="white" p={6} borderRadius="md" boxShadow="sm">
            <Heading as="h2" size="md" mb={4}>Shipping Address</Heading>
            
            <VStack spacing={4} align="stretch">
              <Input placeholder="Full Name" />
              <Input placeholder="Address" />
              <Input placeholder="Apt, Suite, Unit, Etc" />
              <Input placeholder="Company Name" />
              <Input placeholder="Town/City" />
              
              <HStack>
                <Select placeholder="Select State" flex={1}>
                  {/* State options would go here */}
                </Select>
                <Input placeholder="ZIP Code" flex={1} />
              </HStack>
              
              <Input placeholder="Phone Number" />
              
              <Text fontSize="sm" color="gray.500">
                This number may be used to contact you to schedule or facilitate your delivery or service appointments.
              </Text>
              
              <Checkbox>Set as default shipping address</Checkbox>
            </VStack>
            
            <Divider my={6} />
            
            <Box>
              <Heading as="h3" size="sm" mb={2}>30-Day Returns</Heading>
              <Text fontSize="sm">
                Not loving it? We offer returns for most items within 30 days of delivery for a refund or store credit.
                <Link color="blue.500" ml={1}>Learn More</Link>
              </Text>
            </Box>
          </Box>
        </GridItem>
        
        {/* Right Column - Order Summary */}
        <GridItem>
          <Box bg="white" p={6} borderRadius="md" boxShadow="sm">
            <Heading as="h2" size="md" mb={4}>Order Summary (2) ➤️</Heading>
            
            <VStack spacing={3} align="stretch" mb={4}>
              <Flex justify="space-between">
                <Text>Item Subtotal (2)</Text>
                <Text>$69.05</Text>
              </Flex>
              <Flex justify="space-between">
                <Text>Delivery</Text>
                <Text color="green.500">FREE</Text>
              </Flex>
              <Flex justify="space-between">
                <Text>Estimated Tax</Text>
                <Text>$5.18</Text>
              </Flex>
            </VStack>
            
            <Divider mb={4} />
            
            <Flex justify="space-between" fontWeight="bold" mb={6}>
              <Text>Total</Text>
              <Text>$74.23</Text>
            </Flex>
            
            <Text color="green.500" mb={4}>You Save $25.57</Text>
            
            <Box bg="blue.50" p={4} borderRadius="md" mb={6}>
              <Text fontWeight="bold" mb={2}>Earn 5% back in rewards!</Text>
              <Text fontSize="sm" mb={2}>
                Plus, access number-only votes, free shipping* and more when you join
              </Text>
              <Checkbox>Join now for $20 over</Checkbox>
              <Link color="blue.500" fontSize="sm">Learn More</Link>
            </Box>
            
            <Button colorScheme="blue" w="full" size="lg">Save & Continue</Button>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default SecureCheckout;