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

export default function KeepShoppingForBathTowels() {
  return (
    <Box>
       <Heading width={'100%'} textAlign={"left"} fontWeight={"700"} marginLeft={"25px"} paddingBottom={"15px"}>keep shopping for bath towels</Heading>
      <ProductSlider products={diningSale} />
      <Flex  _hover={{ border: "1px solid gray", bg: "#f3f6f4", borderRadius: "5px" }} p={"10px"}>
          <Image src="https://assets.wfcdn.com/im/37860705/resize-h454-w2000%5Ecompr-r85/3308/330843620/easy._living_room._updates._lounge_like_you_mean_it_330843620.jpg" borderRadius={"5px"} />
      </Flex>
    </Box>
    
         
           
      
        
       
     
  )
}
