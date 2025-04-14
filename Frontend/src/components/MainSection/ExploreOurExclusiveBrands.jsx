import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  VStack,
  List
} from "@chakra-ui/react";
import React from "react";

export default function ExploreOurExclusiveBrands() {
  return (
    <VStack >
      <Flex flexDirection={"column"}>
        <Box lineHeight={"40px"} marginLeft={"15px"}>
          <Heading width={'100%'} textAlign={"left"} fontWeight={"700"}>Explore Our Exclusive Brands</Heading>
          <Text>
            Bring your vision to life with hand-curated collections, priced just
            right.
          </Text>
          <List.Root listStyleType={"none"}>
            <List.Item>
              <Link href="myOrders" textDecoration={"underline"} color={"#7c189f"} _hover={{ textDecoration: "none", textDecorationColor: "purple.500" }} >Shop all</Link>
            </List.Item>
          </List.Root>
        </Box>
        <Flex paddingBottom={"20px"}>
          <Box _hover={{ border: "1px solid gray",  borderRadius: "5px" }} p={"10px"}>
            <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112837/Mercuray_Row_lhcwbx.webp" borderRadius={"5px"} />
          </Box>
          <Box _hover={{ border: "1px solid gray", borderRadius: "5px" }} p={"10px"}>
            <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112839/Sand_Stable_x2sryw.webp" borderRadius={"5px"} />
          </Box>
          <Box _hover={{ border: "1px solid gray",  borderRadius: "5px" }} p={"10px"}>
            <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112838/Refine_bxifdy.webp" borderRadius={"5px"} />
          </Box>
          <Box _hover={{ border: "1px solid gray",  borderRadius: "5px" }} p={"10px"}>
            <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112840/Three_Posts_enzoy8.webp" borderRadius={"5px"} />
          </Box>
        </Flex>
      </Flex>
      <Flex _hover={{ border: "1px solid gray", bg: "#f3f6f4", borderRadius: "5px" }} p={"10px"} >
        <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112837/financing_available._find_the_payment_option_that_s_right_for_you._learn_more_dclkmz.webp" borderRadius={"5px"} />
      </Flex>
    </VStack>
  );
}
