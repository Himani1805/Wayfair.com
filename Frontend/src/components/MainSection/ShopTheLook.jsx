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
import ProductCarousel from "../Common/ProductCarousel";
import { shopTheLook } from "../../data/shopTheLook";

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
      <ProductCarousel products={shopTheLook}/>
      <Flex _hover={{ border: "1px solid gray", bg: "#f3f6f4", borderRadius: "5px" }} p={"10px"}>
        <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112817/get_5__rewards...on_every_item__always_hw8tri.webp" borderRadius={"5px"} />
      </Flex>
      <Flex _hover={{ border: "1px solid gray", bg: "#f3f6f4", borderRadius: "5px" }} p={"10px"}>
        <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112817/organize._simplify._enjoy._shop_storage_and_organization_ppxmoj.webp" borderRadius={"5px"} />
      </Flex>
    </Box>
  )
}
