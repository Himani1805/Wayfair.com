import { Box, Flex, Heading, Image, VStack } from "@chakra-ui/react";
import React from "react";

export default function EntrywayEssentials() {
  return (
    <VStack>
      <Flex flexDirection={"column"}>
        <Heading width={'100%'} textAlign={"left"} fontWeight={"700"} marginLeft={"25px"} paddingBottom={"5px"}>Entryway Essentials</Heading>
        <Flex paddingBottom={"20px"}>
          <Box _hover={{ border: "1px solid gray", borderRadius: "10px" }} p={"10px"} >
            <Image src="https://assets.wfcdn.com/im/61511135/scale-h448-w448%5Ecompr-r85/3175/317591332/default_name.jpg" borderRadius={"10px"}/>
            <Heading paddingTop={"12px"} fontWeight={"700"}>Hall trees from $50</Heading>
          </Box>
          <Box _hover={{ border: "1px solid gray", borderRadius: "10px" }} p={"10px"}>
            <Image src="https://assets.wfcdn.com/im/56011970/scale-h448-w448%5Ecompr-r85/3349/334930937/default_name.jpg" borderRadius={"10px"} />
            <Heading paddingTop={"12px"} fontWeight={"700"}>Bins & baskets from $20</Heading>
          </Box>
          <Box _hover={{ border: "1px solid gray", borderRadius: "10px" }} p={"10px"}>
            <Image src="https://assets.wfcdn.com/im/46597136/scale-h448-w448%5Ecompr-r85/3308/330866621/default_name.jpg" borderRadius={"10px"}/>
            <Heading paddingTop={"12px"} fontWeight={"700"}>Storage benches from $50</Heading>
          </Box>
          <Box _hover={{ border: "1px solid gray", borderRadius: "10px" }} p={"10px"}>
            <Image src="https://assets.wfcdn.com/im/38809309/scale-h448-w448%5Ecompr-r85/3175/317591334/default_name.jpg" borderRadius={"10px"}/>
            <Heading paddingTop={"12px"} fontWeight={"700"}>Shoe storage under $100</Heading>
          </Box>

        </Flex>

      </Flex>
    </VStack>
  );
}
