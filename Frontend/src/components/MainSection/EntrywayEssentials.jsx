import { Box, Flex, Heading, Image, VStack } from "@chakra-ui/react";
import React from "react";

export default function EntrywayEssentials() {
  return (
    <VStack>
      <Flex flexDirection={"column"}>
        <Heading width={'100%'} textAlign={"left"} fontWeight={"700"} marginLeft={"25px"} paddingBottom={"5px"}>Entryway Essentials</Heading>
        <Flex paddingBottom={"20px"}>
          <Box _hover={{ border: "1px solid gray", borderRadius: "10px" }} p={"10px"} >
            <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112835/Hall_trees_zhcfad.webp" borderRadius={"10px"}/>
            <Heading paddingTop={"12px"} fontWeight={"700"}>Hall trees from $50</Heading>
          </Box>
          <Box _hover={{ border: "1px solid gray", borderRadius: "10px" }} p={"10px"}>
            <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112835/Bins_Basket_b9bgkn.webp" borderRadius={"10px"} />
            <Heading paddingTop={"12px"} fontWeight={"700"}>Bins & baskets from $20</Heading>
          </Box>
          <Box _hover={{ border: "1px solid gray", borderRadius: "10px" }} p={"10px"}>
            <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112836/Storage_Benches_y0o1sl.webp" borderRadius={"10px"}/>
            <Heading paddingTop={"12px"} fontWeight={"700"}>Storage benches from $50</Heading>
          </Box>
          <Box _hover={{ border: "1px solid gray", borderRadius: "10px" }} p={"10px"}>
            <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112836/Shoes_Storage_uyk2sg.webp" borderRadius={"10px"}/>
            <Heading paddingTop={"12px"} fontWeight={"700"}>Shoe storage under $100</Heading>
          </Box>

        </Flex>

      </Flex>
    </VStack>
  );
}
