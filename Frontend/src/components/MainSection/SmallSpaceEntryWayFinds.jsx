import {
  Box,
  Flex,
  Heading,
  Image
} from "@chakra-ui/react";
import React from "react";
import ProductSlider from '../Common/ProductSlider'
import { diningSale } from "../../data/diningSale";

export default function SmallSpaceEntryWayFinds() {
  return (
    <Box>
    <Heading width={'100%'} textAlign={"left"} fontWeight={"700"} marginLeft={"25px"} paddingBottom={"15px"}>Small Space Entryway Finds</Heading>
    <ProductSlider products={diningSale} />
    <Flex _hover={{ border: "1px solid gray", bg: "#f3f6f4", borderRadius: "5px" }} p={"10px"}>
        <Image src="https://assets.wfcdn.com/im/98906402/resize-h454-w2000%5Ecompr-r85/3330/333028230/bedroom._retreat._refresh._333028230.jpg" borderRadius={"5px"} />
      </Flex>
      <Flex paddingBottom={"20px"}>
        <Box _hover={{ border: "1px solid gray",  borderRadius: "10px" }} p={"10px"}  >
          <Image src="https://assets.wfcdn.com/im/33477924/scale-h448-w448%5Ecompr-r85/3177/317780623/default_name.jpg" borderRadius={"10px"}/>
          <Heading paddingTop={"12px"} fontWeight={"700"}>Sheet sets from $20</Heading>
        </Box>
        <Box  _hover={{ border: "1px solid gray",  borderRadius: "10px" }} p={"10px"} >
          <Image src="https://assets.wfcdn.com/im/44672395/scale-h448-w448%5Ecompr-r85/3177/317780619/default_name.jpg" borderRadius={"10px"} />
          <Heading paddingTop={"12px"} fontWeight={"700"}>Benches under $250</Heading>
        </Box>
        <Box  _hover={{ border: "1px solid gray",  borderRadius: "10px" }} p={"10px"} >
          <Image src="https://assets.wfcdn.com/im/10776098/scale-h448-w448%5Ecompr-r85/3177/317780621/default_name.jpg" borderRadius={"10px"} />
          <Heading paddingTop={"12px"} fontWeight={"700"}>Bedding sets from $20</Heading>
        </Box>
        <Box  _hover={{ border: "1px solid gray",  borderRadius: "10px" }} p={"10px"} >
          <Image src="https://assets.wfcdn.com/im/21970569/scale-h448-w448%5Ecompr-r85/3177/317780617/default_name.jpg" borderRadius={"10px"}/>
          <Heading paddingTop={"12px"} fontWeight={"700"}>Nightstands from $80</Heading>
        </Box>
      </Flex>
  </Box>
  );
}
