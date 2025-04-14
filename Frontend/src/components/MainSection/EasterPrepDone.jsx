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
                    <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112833/Easter_Tabletop_Small_pona8l.webp" borderRadius={"10px"} />
                    <Heading paddingTop={"12px"} fontWeight={"700"}>Easter tabletop</Heading>
                </Box>
                <Box _hover={{ border: "1px solid gray",  borderRadius: "10px" }} p={"10px"}>
                    <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112834/Outdoor_Decor_fiedld.webp" borderRadius={"10px"} />
                    <Heading paddingTop={"12px"} fontWeight={"700"}>Outdoor decor</Heading>
                </Box>
                <Box _hover={{ border: "1px solid gray",  borderRadius: "10px" }} p={"10px"}>
                    <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112834/Indoor_Decor_w8vuzn.webp" borderRadius={"10px"} />
                    <Heading paddingTop={"12px"} fontWeight={"700"}>Indoor decor</Heading>
                </Box>
            </Flex>
            <Flex width={"100%"} justifyContent={"center"} alignContent={"center"} textAlign={"flex-start"} alignItems={"center"} textWrap={"wrap"}>
                <Box width={"75%"}>
                    <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112833/easter_tabletop_h3lfuu.webp" />
                </Box>
                <Box width={"25%"} paddingLeft={"70px"} >
                    <Heading  fontWeight={"700"} fontSize={"26px"}>Alfresco Easter, anyone?</Heading>
                    <Text paddingTop={"12px"}>Outdoor Easter brunch? Yes, please! Setting a festive table is the perfect way to kick off the celebrations.</Text>
                </Box>
            </Flex>

        </VStack>
    )
}
