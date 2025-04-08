import { Box, VStack, Text, Link, Flex } from "@chakra-ui/react";

const AccountMenu = () => {
  return (
    <Box  padding={"20px 0px 20px 30px"} bg="white" marginLeft={"-100px"}  >
      <Text fontSize="lg" fontWeight="bold">Welcome</Text>
      <VStack align="start" spacing={3} mt={2}>
        <Link href="/account">&#x1F464; My Account</Link>
        <Link href="orders"> &#x1F4E6; My Orders</Link>
        <Link href="/wishlist">&#x2665;  Lists</Link>
        <Link href="/review">&#x1F50D; Review My Purchases</Link>
        <Link href="/recentlyView">&#x1F5D3; Recently Viewed</Link>
        <Link href="/helpContact"> &#x2139; Help & Contact</Link>
        <Link href="designServices">&#x1F5A8; Design Services</Link>
      </VStack>
      
      {/* <Divider my={3} /> */}
      
      <VStack align="/start" spacing={3}>
        <Link href="/giftCard">&#x1F381; Gift Card</Link>
        <Link href="/rewards">&#x1F4E6; Wayfair Rewards</Link>
        <Link href="/card"> &#x1F4B3; Wayfair Credit Card</Link>
        <Link href="/financing">&#x1F4B8; Wayfair Financing</Link>
      </VStack>
      
      <Flex fontSize="xs" mt={3}>
        On a public or shared device? <Link color="blue.500">Sign Out</Link>
      </Flex>
    </Box>
  );
};

export default AccountMenu;
