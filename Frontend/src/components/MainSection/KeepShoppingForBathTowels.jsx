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
import ProductCarousel from "../Common/ProductCarousel";
import { keepShoppingForBathTowels } from "../../data/keepShoppingForBathTowels";

export default function KeepShoppingForBathTowels() {
  return (
    <Box>
       <Heading width={'100%'} textAlign={"left"} fontWeight={"700"} marginLeft={"25px"} paddingBottom={"15px"}>keep shopping for bath towels</Heading>
       <ProductCarousel products={keepShoppingForBathTowels}/>
      <Flex  _hover={{ border: "1px solid gray", bg: "#f3f6f4", borderRadius: "5px" }} p={"10px"}>
          <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112816/easy._living_room._updates_ucbzhe.webp" borderRadius={"5px"} />
      </Flex>
    </Box>
    
         
           
      
        
       
     
  )
}
