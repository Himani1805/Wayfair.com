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
    <VStack my={"60px"}>
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
            <Image src="https://assets.wfcdn.com/im/54624453/scale-h546-w448%5Ecompr-r85/3021/302161978/default_name.jpg" borderRadius={"5px"} />
          </Box>
          <Box _hover={{ border: "1px solid gray", borderRadius: "5px" }} p={"10px"}>
            <Image src="https://assets.wfcdn.com/im/59515358/scale-h546-w448%5Ecompr-r85/2902/290205192/default_name.jpg" borderRadius={"5px"} />
          </Box>
          <Box _hover={{ border: "1px solid gray",  borderRadius: "5px" }} p={"10px"}>
            <Image src="https://assets.wfcdn.com/im/17106914/scale-h546-w448%5Ecompr-r85/3026/302643859/default_name.jpg" borderRadius={"5px"} />
          </Box>
          <Box _hover={{ border: "1px solid gray",  borderRadius: "5px" }} p={"10px"}>
            <Image src="https://assets.wfcdn.com/im/92221860/scale-h546-w448%5Ecompr-r85/2858/285848032/default_name.jpg" borderRadius={"5px"} />
          </Box>
        </Flex>
      </Flex>
      <Flex _hover={{ border: "1px solid gray", bg: "#f3f6f4", borderRadius: "5px" }} p={"10px"} >
        <Image src="https://assets.wfcdn.com/im/22247260/resize-h454-w2000%5Ecompr-r85/2897/289751200/financing_available._find_the_payment_option_that%27s_right_for_you._learn_more.__289751200.jpg" borderRadius={"5px"} />
      </Flex>
    </VStack>
  );
}
