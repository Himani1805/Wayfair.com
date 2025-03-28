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
                        <Image src="https://assets.wfcdn.com/im/06552294/scale-h1764-w1764%5Ecompr-r85/3308/330846805/default_name.jpg" borderRadius={"10px"} />
                        <Heading paddingTop={"12px"} fontWeight={"700"}>Sideboards from $100</Heading>
                    </Box>
                    <Box _hover={{ border: "1px solid gray",  borderRadius: "10px" }} p={"10px"}>
                        <Image src="https://assets.wfcdn.com/im/95201381/scale-h1764-w1764%5Ecompr-r85/3308/330846806/default_name.jpg" borderRadius={"10px"}/>
                        <Heading paddingTop={"12px"} fontWeight={"700"}>Sectionals under $1000</Heading>
                    </Box>
                    <Box _hover={{ border: "1px solid gray",  borderRadius: "10px" }} p={"10px"}>
                        <Image src="https://assets.wfcdn.com/im/15065843/scale-h1764-w1764%5Ecompr-r85/3308/330846798/default_name.jpg" borderRadius={"10px"} />
                        <Heading paddingTop={"12px"} fontWeight={"700"}>IAccent chairs from $125</Heading>
                    </Box>
                    <Box _hover={{ border: "1px solid gray",  borderRadius: "10px" }} p={"10px"}>
                        <Image src="https://assets.wfcdn.com/im/26416756/scale-h1764-w1764%5Ecompr-r85/3308/330846799/default_name.jpg" borderRadius={"10px"}/>
                        <Heading paddingTop={"12px"} fontWeight={"700"}>Coffee Tables From $150</Heading>
                    </Box>
                </Flex>
    
            </VStack>
  )
}
