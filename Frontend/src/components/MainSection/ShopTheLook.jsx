import {
    Box,
    Flex,
    Heading,
    Image,
    Link,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import React from "react";
  import ProductSlider from '../Common/ProductSlider'
  import { diningSale } from "../../data/diningSale";

export default function ShopTheLook() {
  return (
    <Box>
       <Heading width={'100%'} textAlign={"left"} fontWeight={"700"} marginLeft={"25px"} paddingBottom={"15px"}>Shop The Look</Heading>
      <ProductSlider products={diningSale} />
      <Flex _hover={{ border: "1px solid gray", bg: "#f3f6f4", borderRadius: "5px" }} p={"10px"}>
            <Image src="https://assets.wfcdn.com/im/20092386/resize-h454-w2000%5Ecompr-r85/3354/335444395/get_5%25_rewards...on_every_item%2C_always_335444395.jpg" borderRadius={"5px"} />
          </Flex>
          <Flex _hover={{ border: "1px solid gray", bg: "#f3f6f4", borderRadius: "5px" }} p={"10px"}>
          <Image src="https://assets.wfcdn.com/im/96184247/resize-h454-w2000%5Ecompr-r85/3306/330682766/organize._simplify._enjoy._shop_storage_and_organization_330682766.jpg" borderRadius={"5px"} />
          </Flex>
    </Box>
  )
}
