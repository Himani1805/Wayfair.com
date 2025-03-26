import { Box, Flex, Heading, Image, VStack } from "@chakra-ui/react";
import React from "react";

export default function EntrywayEssentials() {
  return (
    <VStack>
      <Flex flexDirection={"column"}>
        <Box>
          <Heading>Entryway essentials</Heading>
        </Box>
        <Flex>
        <Box>
          <Image src="https://assets.wfcdn.com/im/61511135/scale-h448-w448%5Ecompr-r85/3175/317591332/default_name.jpg" />
          <Heading>Hall trees from $50</Heading>
        </Box>
        <Box>
          <Image src="https://assets.wfcdn.com/im/56011970/scale-h448-w448%5Ecompr-r85/3349/334930937/default_name.jpg" />
          <Heading>Bins & baskets from $20</Heading>
        </Box>
        <Box>
          <Image src="https://assets.wfcdn.com/im/46597136/scale-h448-w448%5Ecompr-r85/3308/330866621/default_name.jpg" />
          <Heading>Storage benches from $50</Heading>
        </Box>
        <Box>
          <Image src="https://assets.wfcdn.com/im/38809309/scale-h448-w448%5Ecompr-r85/3175/317591334/default_name.jpg" />
          <Heading>Shoe storage under $100</Heading>
        </Box>

        </Flex>
        
      </Flex>
    </VStack>
  );
}
