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
import { hoursOnlyDealsOfTheDay } from "../../data/hoursOnlyDealsOfTheDay";

export default function HoursOnlyDealsOfTheDay() {
  return (
    <Box>
            <Heading width={'100%'} textAlign={"left"} fontWeight={"700"} marginLeft={"25px"} paddingBottom={"15px"}>24-hours ONLY: Deals of the day</Heading>
            
            <ProductCarousel products={hoursOnlyDealsOfTheDay}/>
    </Box> 
    
    
  )
}
