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

export default function KeepShoppingForFauxFlorals() {
  return (
    <Box>
           <Heading  width={'100%'} textAlign={"left"} fontWeight={"700"} marginLeft={"15px"}>Keep Shopping For Faux Florals</Heading>
            
      <ProductSlider products={diningSale} />
    </Box> 
   
     
       
          
    
  );
}
