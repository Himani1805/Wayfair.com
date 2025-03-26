import { Flex, VStack, Image, Text, Box, Heading } from '@chakra-ui/react'
import React from 'react'

export default function ShopByDepartment() {
  return (
    <VStack>
        <Flex width={"100%"} flexWrap={"wrap"} border={"3px solid red"}>
            <Box border={"3px solid red"} width={"14%"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
                <Image src="https://assets.wfcdn.com/im/58159492/scale-h233-w233%5Ecompr-r85/8535/85357250/default_name.jpg" />
                <Text textAlign={"center"}>Sale</Text>
            </Box>
            <Box width={"14%"}>
                <Image src="https://assets.wfcdn.com/im/33149129/scale-h233-w233%5Ecompr-r85/2692/269209725/default_name.jpg"/>
                <Text textAlign={"center"}>Kitchen</Text>
            </Box>
            <Box width={"14%"}>
                <Image src="https://assets.wfcdn.com/im/19812450/scale-h233-w233%5Ecompr-r85/9847/98477084/default_name.jpg"/>
                <Text textAlign={"center"}>Baby & Kids</Text>
            </Box>
            <Box width={"14%"}>
                <Image src="https://assets.wfcdn.com/im/05063189/scale-h233-w233%5Ecompr-r85/9847/98477108/default_name.jpg"/>
                <Text textAlign={"center"}>Home Improvment</Text>
            </Box>
            <Box width={"14%"}>
                <Image src="https://assets.wfcdn.com/im/29302434/scale-h233-w233%5Ecompr-r85/9847/98477121/default_name.jpg"/>
                <Text textAlign={"center"}>Rugs</Text>
            </Box>
            <Box width={"14%"}>
                <Image src="https://assets.wfcdn.com/im/52453020/scale-h233-w233%5Ecompr-r85/9847/98477082/default_name.jpg"/>
                <Text textAlign={"center"}>Appliances</Text>
            </Box>
            <Box width={"14%"}>
                <Image src="https://assets.wfcdn.com/im/10447716/scale-h233-w233%5Ecompr-r85/9847/98477101/default_name.jpg"/>
                <Text textAlign={"center"}>Furniture</Text>
            </Box>
            <Box width={"14%"}>
                <Image src="https://assets.wfcdn.com/im/31612123/scale-h233-w233%5Ecompr-r85/9847/98477124/default_name.jpg"/>
                <Text textAlign={"center"}>Organization</Text>
            </Box>
            <Box width={"14%"}>
                <Image src="https://assets.wfcdn.com/im/48449470/scale-h233-w233%5Ecompr-r85/9847/98477095/default_name.jpg"/>
                <Text textAlign={"center"}>Decor & Pillows</Text>
            </Box>
            <Box width={"14%"}>
                <Image src="https://assets.wfcdn.com/im/27741466/scale-h233-w233%5Ecompr-r85/1321/132124505/default_name.jpg"/>
                <Text textAlign={"center"}>Pet</Text>
            </Box>
            <Box width={"14%"}>
                <Image src="https://assets.wfcdn.com/im/17795079/scale-h233-w233%5Ecompr-r85/9847/98477115/default_name.jpg"/>
                <Text textAlign={"center"}>Lighting</Text>
            </Box>
            <Box width={"14%"}>
                <Image src="https://assets.wfcdn.com/im/52650560/scale-h233-w233%5Ecompr-r85/1323/132350539/default_name.jpg"/>
                <Text textAlign={"center"}>Bedding & Bath</Text>
            </Box>
            <Box width={"14%"}>
                <Image src="https://assets.wfcdn.com/im/51847818/scale-h233-w233%5Ecompr-r85/9847/98477118/default_name.jpg"/>
                <Text textAlign={"center"}>Outdoor</Text>
            </Box>
            <Box width={"14%"}>
                <Image src="https://assets.wfcdn.com/im/87323303/scale-h233-w233%5Ecompr-r85/2320/232096871/default_name.jpg"/>
                <Text textAlign={"center"}>Custom Cabinetry</Text>
            </Box> 
        </Flex>
        <Flex width={"100%"} justifyContent={"space-between"} alignItems={"center"}>
           <Box width={"25%"}>
                <Image src="https://assets.wfcdn.com/im/06871307/resize-h64-w64%5Ecompr-r85/1711/171106361/default_name.jpg"/>
                <Heading textAlign={"center"}>Unbeatable Selection</Heading>
            </Box> 
            <Box width={"25%"}>
                <Image src="https://assets.wfcdn.com/im/40924046/resize-h64-w64%5Ecompr-r85/1711/171106364/default_name.jpg"/>
                <Heading textAlign={"center"}>Expert Customer Service</Heading>
            </Box> 
            <Box width={"25%"}>
                <Image src="https://assets.wfcdn.com/im/97288685/resize-h64-w64%5Ecompr-r85/1711/171106369/default_name.jpg"/>
                <Heading textAlign={"center"}>Fast & Free Shipping Over $35*</Heading>
            </Box> 
            <Box width={"25%"}>
                <Image src="https://assets.wfcdn.com/im/31184982/resize-h64-w64%5Ecompr-r85/1711/171106371/default_name.jpg"/>
                <Heading textAlign={"center"}>Amazing Value Every Day</Heading>
            </Box>  
        </Flex>
    </VStack>
  )
}
