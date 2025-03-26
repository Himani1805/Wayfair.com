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
                <Box>
                    <Heading>Unwind without overspending</Heading>
                </Box>
                <Flex>
                    <Box>
                        <Image src="https://assets.wfcdn.com/im/06552294/scale-h1764-w1764%5Ecompr-r85/3308/330846805/default_name.jpg" />
                        <Heading>Sideboards from $100</Heading>
                    </Box>
                    <Box>
                        <Image src="https://assets.wfcdn.com/im/95201381/scale-h1764-w1764%5Ecompr-r85/3308/330846806/default_name.jpg" />
                        <Heading>Sectionals under $1000</Heading>
                    </Box>
                    <Box>
                        <Image src="https://assets.wfcdn.com/im/15065843/scale-h1764-w1764%5Ecompr-r85/3308/330846798/default_name.jpg" />
                        <Heading>IAccent chairs from $125</Heading>
                    </Box>
                    <Box>
                        <Image src="https://assets.wfcdn.com/im/26416756/scale-h1764-w1764%5Ecompr-r85/3308/330846799/default_name.jpg" />
                        <Heading>Coffee Tables From $150</Heading>
                    </Box>
                </Flex>
    
            </VStack>
  )
}
