import {
    Box,
    Flex,
    Heading,
    Image,
    Text,
    VStack,
} from "@chakra-ui/react";
import React from "react";

export default function UnwindWithoutOverspending() {
  return (
    <VStack>
                    <Heading width={'100%'} textAlign={"left"} fontWeight={"700"} marginLeft={"25px"} paddingBottom={"5px"}>Unwind without overspending</Heading>
                
                <Flex paddingBottom={"20px"}>
                    <Box _hover={{ border: "1px solid gray",  borderRadius: "10px" }} p={"10px"}>
                        <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112811/Slideboards_wwwymo.webp" borderRadius={"10px"} />
                        <Heading paddingTop={"12px"} fontWeight={"700"}>Sideboards from $100</Heading>
                    </Box>
                    <Box _hover={{ border: "1px solid gray",  borderRadius: "10px" }} p={"10px"}>
                        <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112812/Sectionals_f2ti70.webp" borderRadius={"10px"}/>
                        <Heading paddingTop={"12px"} fontWeight={"700"}>Sectionals under $1000</Heading>
                    </Box>
                    <Box _hover={{ border: "1px solid gray",  borderRadius: "10px" }} p={"10px"}>
                        <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112810/IAccent_chairs_l9hhco.webp" borderRadius={"10px"} />
                        <Heading paddingTop={"12px"} fontWeight={"700"}>IAccent chairs from $125</Heading>
                    </Box>
                    <Box _hover={{ border: "1px solid gray",  borderRadius: "10px" }} p={"10px"}>
                        <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112811/Coffee_Tables_lnseew.webp" borderRadius={"10px"}/>
                        <Heading paddingTop={"12px"} fontWeight={"700"}>Coffee Tables From $150</Heading>
                    </Box>
                </Flex>
    
            </VStack>
  )
}
