import React from "react";
import {
  Box,
  Image,
  Grid,
  Heading,
  Badge,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";

const categories = [
  {
    title: "Recently Viewed",
    items: [
      { img: "https://res.cloudinary.com/dgbymqjtk/image/upload/c_thumb,w_200,g_face/v1744112816/Wazee_Matte_16_Piece_Dinnerware_Set_z27ad6.webp", tag: "Sale" },
      { img: "https://picsum.photos/150?random=2", tag: "Dining Sale" },
      { img: "https://picsum.photos/150?random=3", tag: "Sale" },
      { img: "https://picsum.photos/150?random=4", tag: "Dining Sale" },
    ],
  },
  {
    title: "Keep Shopping for Sheets & Pillowcases",
    items: [
      { img: "https://picsum.photos/150?random=5" },
      { img: "https://picsum.photos/150?random=6" },
      { img: "https://picsum.photos/150?random=7" },
      { img: "https://picsum.photos/150?random=8" },
    ],
  },
  {
    title: "Easter Decor Picks for Every Style",
    items: [
      { img: "https://picsum.photos/150?random=9", tag: "Dining Sale" },
      { img: "https://picsum.photos/150?random=10", tag: "Sale" },
      { img: "https://picsum.photos/150?random=11" },
      { img: "https://picsum.photos/150?random=12" },
    ],
  },
  {
    title: "Buzz on the Block: Rainbow Glassware",
    items: [
      { img: "https://picsum.photos/150?random=13", tag: "Dining Sale" },
      { img: "https://picsum.photos/150?random=14", tag: "Dining Sale" },
      { img: "https://picsum.photos/150?random=15", tag: "Dining Sale" },
      { img: "https://picsum.photos/150?random=16", tag: "Dining Sale" },
    ],
  },
];

export default function AllCategories() {
  return (
    <Box >
      <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={8}>
        {categories.map((section, idx) => (
          <Flex
            key={idx}
            direction="column"
            align="center"
            minH="350px"  
            flexGrow={1}   
            justify="start"
          >
            {/* Fixed Height for Heading */}
            <Heading fontSize="22px" fontWeight="bold" mb={4} textAlign="center" minH="60px">
              {section.title} →
            </Heading>

            {/* Image Grid */}
            <SimpleGrid columns={2} spacing={4}>
              {section.items.map((item, i) => (
                <Box key={i} position="relative">
                  <Image
                    src={item.img}
                    alt="product"
                    borderRadius="md"
                    objectFit="cover" 

                  />
                  {item.tag && (
                    <Badge
                      position="absolute"
                      bottom={2}
                      left={2}
                      colorScheme="red"
                    >
                      {item.tag}
                    </Badge>
                  )}
                </Box>
              ))}
            </SimpleGrid>
          </Flex>
        ))}
      </Grid>
      <br />
      <Flex _hover={{ border: "1px solid gray", bg: "#f3f6f4", borderRadius: "5px" }} p={"10px"} >
        <Image src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1744112818/wayfair_professional__unlock_pro_pricing_up_to_15__off__plus_more_benefits._join_for_free_ncmxel.webp" borderRadius={"5px"}  />
      </Flex>
    </Box>
  );
}
