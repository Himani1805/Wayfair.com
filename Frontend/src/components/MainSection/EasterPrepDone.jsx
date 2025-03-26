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
           <Box>
           <Heading>Easter. prep. done.</Heading>

           </Box>
              
            <Flex>
                <Box>
                    <Image src="https://assets.wfcdn.com/im/56669573/scale-h1508-w1764%5Ecompr-r85/3321/332173139/default_name.jpg" />
                    <Heading>Easter tabletop</Heading>
                </Box>
                <Box>
                    <Image src="https://assets.wfcdn.com/im/68020486/scale-h1508-w1764%5Ecompr-r85/3321/332173138/default_name.jpg" />
                    <Heading>Outdoor decor</Heading>
                </Box>
                <Box>
                    <Image src="https://assets.wfcdn.com/im/79371399/scale-h1508-w1764%5Ecompr-r85/3321/332173137/default_name.jpg" />
                    <Heading>Indoor decor</Heading>
                </Box>
            </Flex>
            <Flex>
                <Box>
                    <Image src="https://assets.wfcdn.com/im/75574141/resize-h0-w1200%5Ecompr-r85/3266/326654670/easter_tabletop_326654670_2.jpg" />
                </Box>
                <Box>
                    <Heading>alfresco Easter, anyone?</Heading>
                    <Text>Outdoor Easter brunch? Yes, please! Setting a festive table is the perfect way to kick off the celebrations.</Text>
                </Box>
            </Flex>

        </VStack>
    )
}
