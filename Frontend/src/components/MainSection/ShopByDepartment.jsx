import { Flex, VStack, Image, Text, Box, Heading } from '@chakra-ui/react'
import React from 'react'

export default function ShopByDepartment() {
  return (
    <VStack my={"40px"}>
        <Heading width={'100%'} textAlign={"left"} fontWeight={"700"} marginLeft={"25px"}>Shop By Department</Heading>
        <Flex width={"100%"} flexWrap={"wrap"} justifyContent={"center"} m={"0px 40px 0px 40px"}>
            <Box  width={"14%"} lineHeight={"50px"} _hover={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", border:"1px solid black", bg:"#f3f6f4"}} p={"10px"} borderRadius={"10px"} >
                <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112795/Sale_o1ejuq.webp" />
                <Text textAlign={"center"}>Sale</Text>
            </Box>
            <Box width={"14%"}lineHeight={"50px"} _hover={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", border:"1px solid black", bg:"#f3f6f4"}} p={"10px"} borderRadius={"10px"}>
                <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112790/Kitchen_raddts.webp"/>
                <Text textAlign={"center"}>Kitchen</Text>
            </Box>
            <Box width={"14%"}lineHeight={"50px"} _hover={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", border:"1px solid black", bg:"#f3f6f4"}} p={"10px"} borderRadius={"10px"}>
                <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112782/Baby_Kids_g4sfck.webp"/>
                <Text textAlign={"center"}>Baby & Kids</Text>
            </Box>
            <Box width={"14%"}lineHeight={"50px"} _hover={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", border:"1px solid black", bg:"#f3f6f4"}} p={"10px"} borderRadius={"10px"}>
                <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112789/HomeImprovment_tk7nce.webp"/>
                <Text textAlign={"center"}>Home Improvment</Text>
            </Box>
            <Box width={"14%"}lineHeight={"50px"} _hover={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", border:"1px solid black", bg:"#f3f6f4"}} p={"10px"} borderRadius={"10px"}>
                <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112793/Rugs_aojnz0.webp"/>
                <Text textAlign={"center"}>Rugs</Text>
            </Box>
            <Box width={"14%"}lineHeight={"50px"} _hover={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", border:"1px solid black", bg:"#f3f6f4"}} p={"10px"} borderRadius={"10px"}>
                <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112781/Appliances_leq0yo.webp"/>
                <Text textAlign={"center"}>Appliances</Text>
            </Box>
            <Box width={"14%"}lineHeight={"50px"} _hover={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", border:"1px solid black", bg:"#f3f6f4"}} p={"10px"} borderRadius={"10px"}>
                <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112788/Furniture_lmxx1q.webp"/>
                <Text textAlign={"center"}>Furniture</Text>
            </Box>
            <Box width={"14%"}lineHeight={"50px"} _hover={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", border:"1px solid black", bg:"#f3f6f4"}} p={"10px"} borderRadius={"10px"}>
                <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112791/organizationName_cdn4df.webp"/>
                <Text textAlign={"center"}>Organization</Text>
            </Box>
            <Box width={"14%"}lineHeight={"50px"} _hover={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", border:"1px solid black", bg:"#f3f6f4"}} p={"10px"} borderRadius={"10px"}>
                <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112786/Decor_Pillows_wfl1h3.webp"/>
                <Text textAlign={"center"}>Decor & Pillows</Text>
            </Box>
            <Box width={"14%"}lineHeight={"50px"} _hover={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", border:"1px solid black", bg:"#f3f6f4"}} p={"10px"} borderRadius={"10px"}>
                <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112793/Pet_v9nbsk.webp"/>
                <Text textAlign={"center"}>Pet</Text>
            </Box>
            <Box width={"14%"}lineHeight={"50px"} _hover={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", border:"1px solid black", bg:"#f3f6f4"}} p={"10px"} borderRadius={"10px"}>
                <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112790/Lighting.jpg_kfbwd7.webp"/>
                <Text textAlign={"center"}>Lighting</Text>
            </Box>
            <Box width={"14%"}lineHeight={"50px"} _hover={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", border:"1px solid black", bg:"#f3f6f4"}} p={"10px"} borderRadius={"10px"}>
                <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112785/Baedding_Bath_kowfr3.webp"/>
                <Text textAlign={"center"}>Bedding & Bath</Text>
            </Box>
            <Box width={"14%"}lineHeight={"50px"} _hover={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", border:"1px solid black", bg:"#f3f6f4"}} p={"10px"} borderRadius={"10px"}>
                <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112792/Outdoor_p77ly7.webp"/>
                <Text textAlign={"center"}>Outdoor</Text>
            </Box>
            <Box width={"14%"}lineHeight={"50px"} _hover={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", border:"1px solid black", bg:"#f3f6f4"}} p={"10px"} borderRadius={"10px"}>
                <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112785/CustomCabinetry_jksgy9.webp"/>
                <Text textAlign={"center"}>Custom Cabinetry</Text>
            </Box> 
        </Flex>
        <Flex width={"100%"} justifyContent={"center"} m={"40px 40px 0px 40px"} >
           <Flex width={"25%"}  textAlign={"center"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} height={"100%"} >
                <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112795/Unbeatable_ylktpb.webp"  />
                <Heading  fontWeight={"700"} fontSize={"25px"}>Unbeatable Selection</Heading>
            </Flex> 
            <Flex width={"25%"} textAlign={"center"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} height={"100%"} >
                <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112786/ExpertCustomer_dbu9yn.webp"/>
                <Heading  fontWeight={"700"} fontSize={"25px"}>Expert Customer Service</Heading>
            </Flex> 
            <Flex width={"25%"} textAlign={"center"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} height={"100%"}  >
                <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112787/Fast_Free_bv4w11.webp"/>
                <Heading  fontWeight={"700"} fontSize={"25px"} textWrap={"wrap"}>Fast & Free Shipping Over $35*</Heading>
            </Flex> 
            <Flex width={"25%"}textAlign={"center"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} height={"100%"} >
                <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112780/AmazingValue_khvevy.webp"/>
                <Heading  fontWeight={"700"} fontSize={"25px"}>Amazing Value Every Day</Heading>
            </Flex>      
        </Flex>
    </VStack>
  )
}
