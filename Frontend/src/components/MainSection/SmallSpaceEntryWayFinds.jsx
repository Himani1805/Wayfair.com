import {
  Box,
  Flex,
  Heading,
  Image
} from "@chakra-ui/react";
import React from "react";
import ProductCarousel from "../Common/ProductCarousel";
import { smallSpaceEntryWayFinds } from "../../data/smallSpaceEntryWayFinds.js";

export default function SmallSpaceEntryWayFinds() {
  return (
    <Box>
    <Heading width={'100%'} textAlign={"left"} fontWeight={"700"} marginLeft={"25px"} paddingBottom={"15px"}>Small Space Entryway Finds</Heading>
    <ProductCarousel products={smallSpaceEntryWayFinds}/>
    <Flex _hover={{ border: "1px solid gray", bg: "#f3f6f4", borderRadius: "5px" }} p={"10px"}>
        <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112800/bedroom._retreat._refresh_fbfbfa.webp" borderRadius={"5px"} />
      </Flex>
      <Flex paddingBottom={"20px"}>
        <Box _hover={{ border: "1px solid gray",  borderRadius: "10px" }} p={"10px"}  >
          <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744654733/Sheet_sets_rna8yi.webp" borderRadius={"10px"}/>
          <Heading paddingTop={"12px"} fontWeight={"700"}>Sheet sets from $20</Heading>
        </Box>
        <Box  _hover={{ border: "1px solid gray",  borderRadius: "10px" }} p={"10px"} >
          <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744654718/benches_miqmks.webp" borderRadius={"10px"} />
          <Heading paddingTop={"12px"} fontWeight={"700"}>Benches under $250</Heading>
        </Box>
        <Box  _hover={{ border: "1px solid gray",  borderRadius: "10px" }} p={"10px"} >
          <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744654711/bedding_sets_de0sgm.webp" borderRadius={"10px"} />
          <Heading paddingTop={"12px"} fontWeight={"700"}>Bedding sets from $20</Heading>
        </Box>
        <Box  _hover={{ border: "1px solid gray",  borderRadius: "10px" }} p={"10px"} >
          <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112801/Nightstands_avm8yh.webp" borderRadius={"10px"}/>
          <Heading paddingTop={"12px"} fontWeight={"700"}>Nightstands from $80</Heading>
        </Box>
      </Flex>
  </Box>
  );
}
