import { Box, VStack, Text, Link } from "@chakra-ui/react";

const AccountMenu = () => {
  return (
    <Box w="250px" p={4} bg="white" boxShadow="md" borderRadius="md">
      <Text fontSize="lg" fontWeight="bold">Welcome</Text>
      <VStack align="start" spacing={3} mt={2}>
        <Link>&#x1F464; My Account</Link>
        <Link>&#x1F4E6; My Orders</Link>
        <Link>&#x2665; Lists</Link>
        <Link>&#x1F50D; Review My Purchases</Link>
        <Link>&#x1F5D3; Recently Viewed</Link>
        <Link>&#x2139; Help & Contact</Link>
        <Link>&#x1F5A8; Design Services</Link>
      </VStack>
      
      {/* <Divider my={3} /> */}
      
      <VStack align="start" spacing={3}>
        <Link>&#x1F381; Gift Card</Link>
        <Link>&#x1F4E6; Wayfair Rewards</Link>
        <Link>&#x1F4B3; Wayfair Credit Card</Link>
        <Link>&#x1F4B8; Wayfair Financing</Link>
      </VStack>
      
      <Text fontSize="sm" mt={3}>
        On a public or shared device? <Link color="blue.500">Sign Out</Link>
      </Text>
    </Box>
  );
};

export default AccountMenu;
