import {
  Box,
  Heading
} from "@chakra-ui/react";
import React from "react";
import ProductSlider from '../Common/ProductSlider'
import { diningSale } from "../../data/diningSale";

export default function RecommendedForYou() {
  return (
    <Box>
      <Heading width={'100%'} textAlign={"left"} fontWeight={"700"} marginLeft={"25px"} paddingBottom={"15px"}>Recommended for you</Heading>
      <ProductSlider products={diningSale} />
    </Box>
  )
}


