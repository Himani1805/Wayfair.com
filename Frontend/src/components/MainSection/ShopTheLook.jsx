import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  List,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { diningSale } from "../../data/diningSale";
import ProductCarousel from "../Common/ProductCarousel";

export default function ShopTheLook() {
  return (
    <Box>
      <Flex justifyContent={"space-evenly"}>
        <Heading width={'100%'} textAlign={"left"} fontWeight={"700"} marginLeft={"25px"} paddingBottom={"15px"}>Shop The Look</Heading>
        <List.Root listStyleType={"none"} width={"5%"}>
          <List.Item>
            <Link href="myOrders" textDecoration={"underline"} color={"#7c189f"} _hover={{ textDecoration: "none", textDecorationColor: "purple.500" }} >See all</Link>
          </List.Item>
        </List.Root>
      </Flex>
      <ProductCarousel products={diningSale}/>
      <Flex _hover={{ border: "1px solid gray", bg: "#f3f6f4", borderRadius: "5px" }} p={"10px"}>
        <Image src="https://assets.wfcdn.com/im/20092386/resize-h454-w2000%5Ecompr-r85/3354/335444395/get_5%25_rewards...on_every_item%2C_always_335444395.jpg" borderRadius={"5px"} />
      </Flex>
      <Flex _hover={{ border: "1px solid gray", bg: "#f3f6f4", borderRadius: "5px" }} p={"10px"}>
        <Image src="https://assets.wfcdn.com/im/96184247/resize-h454-w2000%5Ecompr-r85/3306/330682766/organize._simplify._enjoy._shop_storage_and_organization_330682766.jpg" borderRadius={"5px"} />
      </Flex>
    </Box>
  )
}
