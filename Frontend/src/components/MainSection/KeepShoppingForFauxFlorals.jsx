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
import { diningSale } from "../../data/diningSale";
import ProductCarousel from "../Common/ProductCarousel";

export default function KeepShoppingForFauxFlorals() {
  return (
    <Box>
           <Heading  width={'100%'} textAlign={"left"} fontWeight={"700"} marginLeft={"15px"}>Keep Shopping For Faux Florals</Heading>
            <ProductCarousel products={diningSale}/>
    </Box> 
   
     
       
          
    
  );
}
