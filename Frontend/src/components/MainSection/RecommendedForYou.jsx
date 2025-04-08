import {
  Box,
  Heading
} from "@chakra-ui/react";
import React from "react";
import { diningSale } from "../../data/diningSale";
import ProductCarousel from "../Common/ProductCarousel";

export default function RecommendedForYou() {
  return (
    <Box>
      <Heading width={'100%'} textAlign={"left"} fontWeight={"700"} marginLeft={"25px"} paddingBottom={"15px"}>Recommended for you</Heading>
      <ProductCarousel products={diningSale}/>
    </Box>
  )
}


