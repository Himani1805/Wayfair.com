import {
    Box,
    Flex,
    Heading,
    Image,
    Text,
    VStack,
} from "@chakra-ui/react";
import React from "react";

export default function EasterPrepDone() {
    return (
        <VStack>
          
           <Heading width={'100%'} textAlign={"left"} fontWeight={"700"} marginLeft={"25px"} paddingBottom={"5px"}>Easter. prep. done.</Heading>

         
              
            <Flex paddingBottom={"20px"}>
                <Box _hover={{ border: "1px solid gray",  borderRadius: "10px" }} p={"10px"}>
                    <Image src="https://assets.wfcdn.com/im/56669573/scale-h1508-w1764%5Ecompr-r85/3321/332173139/default_name.jpg" borderRadius={"10px"} />
                    <Heading paddingTop={"12px"} fontWeight={"700"}>Easter tabletop</Heading>
                </Box>
                <Box _hover={{ border: "1px solid gray",  borderRadius: "10px" }} p={"10px"}>
                    <Image src="https://assets.wfcdn.com/im/68020486/scale-h1508-w1764%5Ecompr-r85/3321/332173138/default_name.jpg" borderRadius={"10px"} />
                    <Heading paddingTop={"12px"} fontWeight={"700"}>Outdoor decor</Heading>
                </Box>
                <Box _hover={{ border: "1px solid gray",  borderRadius: "10px" }} p={"10px"}>
                    <Image src="https://assets.wfcdn.com/im/79371399/scale-h1508-w1764%5Ecompr-r85/3321/332173137/default_name.jpg" borderRadius={"10px"} />
                    <Heading paddingTop={"12px"} fontWeight={"700"}>Indoor decor</Heading>
                </Box>
            </Flex>
            <Flex width={"100%"} justifyContent={"center"} alignContent={"center"} textAlign={"flex-start"} alignItems={"center"} textWrap={"wrap"}>
                <Box width={"75%"}>
                    <Image src="https://assets.wfcdn.com/im/75574141/resize-h0-w1200%5Ecompr-r85/3266/326654670/easter_tabletop_326654670_2.jpg" />
                </Box>
                <Box width={"25%"} paddingLeft={"70px"} >
                    <Heading  fontWeight={"700"} fontSize={"26px"}>Alfresco Easter, anyone?</Heading>
                    <Text paddingTop={"12px"}>Outdoor Easter brunch? Yes, please! Setting a festive table is the perfect way to kick off the celebrations.</Text>
                </Box>
            </Flex>

        </VStack>
    )
}
