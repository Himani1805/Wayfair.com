import { Flex, VStack, Image, Text, Box, Heading } from '@chakra-ui/react'
import React from 'react'

export default function ShopByDepartment() {
  return (
    <VStack my={"40px"}>
        <Heading width={'100%'} textAlign={"left"} fontWeight={"700"} marginLeft={"25px"}>Shop By Department</Heading>
        <Flex width={"100%"} flexWrap={"wrap"} justifyContent={"center"} m={"0px 40px 0px 40px"}>
            <Box  width={"14%"} lineHeight={"50px"} _hover={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", border:"1px solid black", bg:"#f3f6f4"}} p={"10px"} borderRadius={"10px"} >
                <Image src="https://assets.wfcdn.com/im/58159492/scale-h233-w233%5Ecompr-r85/8535/85357250/default_name.jpg" />
                <Text textAlign={"center"}>Sale</Text>
            </Box>
            <Box width={"14%"}lineHeight={"50px"} _hover={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", border:"1px solid black", bg:"#f3f6f4"}} p={"10px"} borderRadius={"10px"}>
                <Image src="https://assets.wfcdn.com/im/33149129/scale-h233-w233%5Ecompr-r85/2692/269209725/default_name.jpg"/>
                <Text textAlign={"center"}>Kitchen</Text>
            </Box>
            <Box width={"14%"}lineHeight={"50px"} _hover={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", border:"1px solid black", bg:"#f3f6f4"}} p={"10px"} borderRadius={"10px"}>
                <Image src="https://assets.wfcdn.com/im/19812450/scale-h233-w233%5Ecompr-r85/9847/98477084/default_name.jpg"/>
                <Text textAlign={"center"}>Baby & Kids</Text>
            </Box>
            <Box width={"14%"}lineHeight={"50px"} _hover={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", border:"1px solid black", bg:"#f3f6f4"}} p={"10px"} borderRadius={"10px"}>
                <Image src="https://assets.wfcdn.com/im/05063189/scale-h233-w233%5Ecompr-r85/9847/98477108/default_name.jpg"/>
                <Text textAlign={"center"}>Home Improvment</Text>
            </Box>
            <Box width={"14%"}lineHeight={"50px"} _hover={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", border:"1px solid black", bg:"#f3f6f4"}} p={"10px"} borderRadius={"10px"}>
                <Image src="https://assets.wfcdn.com/im/29302434/scale-h233-w233%5Ecompr-r85/9847/98477121/default_name.jpg"/>
                <Text textAlign={"center"}>Rugs</Text>
            </Box>
            <Box width={"14%"}lineHeight={"50px"} _hover={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", border:"1px solid black", bg:"#f3f6f4"}} p={"10px"} borderRadius={"10px"}>
                <Image src="https://assets.wfcdn.com/im/52453020/scale-h233-w233%5Ecompr-r85/9847/98477082/default_name.jpg"/>
                <Text textAlign={"center"}>Appliances</Text>
            </Box>
            <Box width={"14%"}lineHeight={"50px"} _hover={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", border:"1px solid black", bg:"#f3f6f4"}} p={"10px"} borderRadius={"10px"}>
                <Image src="https://assets.wfcdn.com/im/10447716/scale-h233-w233%5Ecompr-r85/9847/98477101/default_name.jpg"/>
                <Text textAlign={"center"}>Furniture</Text>
            </Box>
            <Box width={"14%"}lineHeight={"50px"} _hover={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", border:"1px solid black", bg:"#f3f6f4"}} p={"10px"} borderRadius={"10px"}>
                <Image src="https://assets.wfcdn.com/im/31612123/scale-h233-w233%5Ecompr-r85/9847/98477124/default_name.jpg"/>
                <Text textAlign={"center"}>Organization</Text>
            </Box>
            <Box width={"14%"}lineHeight={"50px"} _hover={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", border:"1px solid black", bg:"#f3f6f4"}} p={"10px"} borderRadius={"10px"}>
                <Image src="https://assets.wfcdn.com/im/48449470/scale-h233-w233%5Ecompr-r85/9847/98477095/default_name.jpg"/>
                <Text textAlign={"center"}>Decor & Pillows</Text>
            </Box>
            <Box width={"14%"}lineHeight={"50px"} _hover={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", border:"1px solid black", bg:"#f3f6f4"}} p={"10px"} borderRadius={"10px"}>
                <Image src="https://assets.wfcdn.com/im/27741466/scale-h233-w233%5Ecompr-r85/1321/132124505/default_name.jpg"/>
                <Text textAlign={"center"}>Pet</Text>
            </Box>
            <Box width={"14%"}lineHeight={"50px"} _hover={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", border:"1px solid black", bg:"#f3f6f4"}} p={"10px"} borderRadius={"10px"}>
                <Image src="https://assets.wfcdn.com/im/17795079/scale-h233-w233%5Ecompr-r85/9847/98477115/default_name.jpg"/>
                <Text textAlign={"center"}>Lighting</Text>
            </Box>
            <Box width={"14%"}lineHeight={"50px"} _hover={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", border:"1px solid black", bg:"#f3f6f4"}} p={"10px"} borderRadius={"10px"}>
                <Image src="https://assets.wfcdn.com/im/52650560/scale-h233-w233%5Ecompr-r85/1323/132350539/default_name.jpg"/>
                <Text textAlign={"center"}>Bedding & Bath</Text>
            </Box>
            <Box width={"14%"}lineHeight={"50px"} _hover={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", border:"1px solid black", bg:"#f3f6f4"}} p={"10px"} borderRadius={"10px"}>
                <Image src="https://assets.wfcdn.com/im/51847818/scale-h233-w233%5Ecompr-r85/9847/98477118/default_name.jpg"/>
                <Text textAlign={"center"}>Outdoor</Text>
            </Box>
            <Box width={"14%"}lineHeight={"50px"} _hover={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", border:"1px solid black", bg:"#f3f6f4"}} p={"10px"} borderRadius={"10px"}>
                <Image src="https://assets.wfcdn.com/im/87323303/scale-h233-w233%5Ecompr-r85/2320/232096871/default_name.jpg"/>
                <Text textAlign={"center"}>Custom Cabinetry</Text>
            </Box> 
        </Flex>
        <Flex width={"100%"} justifyContent={"center"} m={"40px 40px 0px 40px"} >
           <Flex width={"25%"}  textAlign={"center"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} height={"100%"} >
                <Image src="https://assets.wfcdn.com/im/06871307/resize-h64-w64%5Ecompr-r85/1711/171106361/default_name.jpg"  />
                <Heading  fontWeight={"700"} fontSize={"25px"}>Unbeatable Selection</Heading>
            </Flex> 
            <Flex width={"25%"} textAlign={"center"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} height={"100%"} >
                <Image src="https://assets.wfcdn.com/im/40924046/resize-h64-w64%5Ecompr-r85/1711/171106364/default_name.jpg"/>
                <Heading  fontWeight={"700"} fontSize={"25px"}>Expert Customer Service</Heading>
            </Flex> 
            <Flex width={"25%"} textAlign={"center"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} height={"100%"}  >
                <Image src="https://assets.wfcdn.com/im/97288685/resize-h64-w64%5Ecompr-r85/1711/171106369/default_name.jpg"/>
                <Heading  fontWeight={"700"} fontSize={"25px"} textWrap={"wrap"}>Fast & Free Shipping Over $35*</Heading>
            </Flex> 
            <Flex width={"25%"}textAlign={"center"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} height={"100%"} >
                <Image src="https://assets.wfcdn.com/im/31184982/resize-h64-w64%5Ecompr-r85/1711/171106371/default_name.jpg"/>
                <Heading  fontWeight={"700"} fontSize={"25px"}>Amazing Value Every Day</Heading>
            </Flex>  
        </Flex>
    </VStack>
  )
}
